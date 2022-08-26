import React, { useState } from "react";
import {  useForm } from "react-hook-form"
import FormData from "../components/FormData/FormData";

const Form = () => {

  const { register,
    formState: { errors },
    handleSubmit,
  }=useForm();

  const [newData,newSetData]=useState([])




  const onSubmit=(data)=>{
  const findData= newData.find((d)=>d.email===data.email)
  
  if(!findData){
    newSetData([...newData,data])
  }else{
    console.log('email already found!!!');
  }
    
   
    
}




  return (



    <div className="container">

    <FormData data={newData}/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1">User Name</label>
          <input type="text" className="form-control" placeholder="Enter Your Name" 
         {...register("name",{required:true})}

          />
          <error>
            {errors.name?.type==="required"&& "Name is required"}
          </error>
         </div>


        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
            />
           
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
             
          

        </div>

    
        <div className="form-froup">
          <input type="radio" value="MALE" name="gender"
         {...register("gender",{required:true})}
          /> Male
          <input type="radio" value="FEMALE" name="gender" required 
           {...register("gender",{required:true})}
          /> Female


        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">PhoneNumber</label>
          <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Enter your phone number" 
           {...register("number", {
            minLength: 6,
            maxLength: 12,
          })}
           />
          <p>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
         
         </p>


        </div>
        <br />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;