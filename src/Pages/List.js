import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const List = () => {
  let API="https://randomuser.me/api/?results=20"
  // console.log(post);
  // // {post?.email}
  const [posts,setPosts]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
   
console.log(posts);
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


  
   <table className='table'>
    <thead>
      <tr>
        <th scope="col">name </th>
        <th scope="col">Email </th>
        <th scope="col">Gender </th>
        <th scope="col">Phone </th>
      </tr>
    </thead>
    
    <tbody>
      { posts.map((post)=>{
       
        return(
         <tr>
          <td>{post?.name.first}</td>
          <td>{post?.email}</td>
          <td>{post?.gender}</td>
          <td>{post?.phone}</td>
         </tr>
        )
      })}
    </tbody>


   </table>

  );
};

export default List;