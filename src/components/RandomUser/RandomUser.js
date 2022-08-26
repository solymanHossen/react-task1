import { useEffect, useState } from 'react';

import axios from 'axios';
import List from '../../Pages/List';



let API="https://randomuser.me/api/?results=20"

const RandomUser = () => {
  
  const [posts,setPosts]=useState()
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
   

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(API);
        // fetch(API)
        // .then(reponse=>Response.json())
        // .then(data=>setPosts(data.results))
    
        setPosts(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>There was an error trying to load the posts.</p>;
  }

  return (
    <div>
  
  
  
   {
   posts.map((post)=>{
    return   <List posts={posts}/>
   })

     
   }

    
    
  
   
    </div>
  );
};

export default RandomUser;