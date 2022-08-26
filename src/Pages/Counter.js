import React, { useState } from 'react';

const Counter = () => {

  const [count,setCount]=useState(0);

 const increment=()=>{
 
 
 if(count<10){
  setCount(count+1)
 }else{
  alert("High Count")
  setCount(0)
 }


 }
const decrement=()=>{


  if(count>0){
    setCount(count-1)
   }else{
    alert("almost finish")
    setCount(0)
   }
  }


const resetbtn=()=>{
  alert("reset")
    setCount(0)
}

  return (
   <div className="container bg-info ">
    <div className="container d-flex justify-content-center  ">
      <div>
   <h1>Counter:{count}</h1>
   <button onClick={increment} className='btn btn-danger'>Increase</button ><br /><br />
   <button onClick={decrement} className='btn btn-danger'>Decrease</button><br /><br />
   <button className='btn btn-success'  onClick={resetbtn}>Reset</button>
   </div>
   </div>
    
   </div>
  );
};

export default Counter;