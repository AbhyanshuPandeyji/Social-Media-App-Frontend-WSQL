# Welcome - This is the Concept learning File of the Client , of the Social Media app


#### this file contains the main concept learned and explored through the journey of making this project 



##### React query import 
- npm i react-query  - in place of use of react redux for state management , and use effect for fetching rendering the data 
- if we use it just singular it won't work better , but if we use the it and wrap the whole app in it it works as for all the components so it can work same as the redux state management while not having to manage state of component and just calling the values
- its more efficient some times , but only difference is that the request is made in a single file , but any request made with name can be used in all the files
- but redux is still great if you want to use it and have separate files for request and state management that helps a lot too 

- react query code
```
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )
}

```


##### posts component
- use only what is necessary , the req, and res are predefined so don't worry to use only one 
- and second the api/ , and endpoint /posts - don't know how but work with each other , its not like you need to do either /api with /posts , or /api/ with posts , no it doesn't , it uses - end point as "http://localhost:8800/api/"
and in requests , it is /posts for the end point i don't know how 
- now while doing it you can use the network tab to run your application slower to see some loading results