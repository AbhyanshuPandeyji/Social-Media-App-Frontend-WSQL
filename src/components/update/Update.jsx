import axios from 'axios';
import './update.scss'
import { makeRequest } from '../../axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQueryClient } from 'react-query';



const Update = ({setOpenUpdate , user}) => {

  const queryClient = useQueryClient();

  // const { currentUser } = useContext(AuthContext);




  const [ cover , setCover ] = useState(null);

  const [ profile , setProfile ] = useState(null);
  
  const [ texts , setTexts ] = useState({
    name : "",
    city : "",
    website : "",
  });


  // const [err , setErr] = useState(null) 


  // on change to change the value of the input - on change method
  const handleChange = (e) =>{
    setTexts((prev)=>({
      ...prev , [e.target.name] : [e.target.value]
    }));
  };


  const upload = async (file) => {
      try {
          const formData = new FormData();
          formData.append("file", file)
          const res = await makeRequest.post("/upload", formData);
          return res.data;
      } catch (err) {
          console.log(err)
      }
  }


  // the refetch query should be equal to the query stored with the name with the react query client
  const mutation = useMutation((user) => {
      return makeRequest.put('/users', user);
  }, {
      onSuccess: () => { // Invalidate and refetch
          queryClient.invalidateQueries(["user"]);
      }
  })

  const handleClick = async (e) =>{
          e.preventDefault();

          let coverUrl;
          let profileUrl;

          coverUrl = cover ? await upload(cover) : user.coverPic ;
          profileUrl = profile ?  await upload(profile) : user.profilePic;

          console.log(coverUrl)

          mutation.mutate({ ...texts , coverPic: coverUrl , profilePic : profileUrl});

          // setFile(null);
          setOpenUpdate(false);
  }

  console.log(texts , cover , profile )




  return (
    <div className='update'>
      Update
        <form>
          <input type="file" name="coverPic" placeholder='Cover Picture' onChange={(e)=>setCover(e.target.files[0])}/>
          <input type="file" name="profilePic" placeholder='Profile Picture' onChange={(e)=>setProfile(e.target.files[0])} />
          <input type="text" name="name" onChange={handleChange} placeholder='Name...' />
          <input type="text" name="city" onChange={handleChange}  placeholder='City...' />
          <input type="text" name="website" onChange={handleChange}  placeholder='Website...' />
        <button onClick={handleClick} >Update</button>
        </form>
        <button onClick={()=>setOpenUpdate(false)} >Close</button>
    </div>
  )
}

export default Update;
