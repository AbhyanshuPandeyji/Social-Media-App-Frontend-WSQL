import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext";


import {useMutation, useQueryClient , QueryClient} from 'react-query';
import {makeRequest} from './../../axios';

const Share = () => {


    const {currentUser} = useContext(AuthContext);

    const queryClient = useQueryClient();


    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("")


    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }

    // adding data and fetching data using react query - this is for the uploading 
    // share components for the new post
    const mutation = useMutation((newPost) => {
        return makeRequest.post('/posts', newPost);
    }, {
        onSuccess: () => { // Invalidate and refetch
            queryClient.invalidateQueries(["posts"]);
        }
    })

    const handleClick = async (e) => {
        e.preventDefault();

        // to upload image - to see the image we will go to posts
        let imgUrl = "";

        if (file) 
            imgUrl = await upload();
        


        // we will use react-query use mutation for creating our post requests
        // mutation.mutate({desc});
        mutation.mutate({desc, img: imgUrl});

        setDesc(null);
        setFile(null);

    }

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">

                        <img src={
                                currentUser.profilePic
                            }
                            alt=""/>
                        <input type="text"
                            placeholder={
                                `What's on your mind ${
                                    currentUser.name
                                }?`
                            }
                            onChange={
                                (e) => setDesc(e.target.value)
                            }
                            value={desc}/>
                    </div>
                    <div className="right">
                        {/* this is to show the image being upload in the share part 
                            Also create a functionality to not upload or delete the upload 
                            action of the share and text because once the image is added 
                            its not going to not upload and you cant just cancel it once 
                            its been put in upload it can only be replaced
                        */}
                        {
                        file && <img className="file" alt=""
                            src={
                                URL.createObjectURL(file)
                            }/>
                    } </div>
                </div>
                <hr/>
                <div className="bottom">
                    <div className="left">
                        {/* change this to upload more files / images at the same time , the carousel and the displaying this in the 
                        posts with the selection of the scroll if there are more than one image scroll if not then don't */}
                        <input type="file" id="file"
                            style={
                                {display: "none"}
                            }
                            onChange={
                                (e) => setFile(e.target.files[0])
                            }/>
                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image}
                                    alt=""/>
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={Map}
                                alt=""/>
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend}
                                alt=""/>
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
