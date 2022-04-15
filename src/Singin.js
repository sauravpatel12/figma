import React from 'react'
import Navbar from './Navbar'
import {Signin} from './action/index';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';


export const Singin = () => {
    const [obj,setobj]=useState({email:"",password:"",rem:""});
    const formdata=useSelector(store =>store.Signin);
    console.log("our state",formdata)
    const dispatch = useDispatch();
    
 
     const handlesubmit =(e)=>{
         e.preventDefault();
         console.log("form submited");
         dispatch(Signin(obj));
           
         
   }
  return (
  <>
      <Navbar />
       <div className='row'>
           <div  className='col-7  block1  main1'>
                
            <h1 >Hello world</h1> 
           </div>
           <div  className='col-5 block2' >
             <div className='flexcol  con1'>
                       <div className='s1'>Welcome Back!</div>
                       <div className='s2'>Login to yout account</div>
                       <div className='s3' >Email</div>
                       <input type="text" placeholder='Typing...' className='s4' value={obj.email} onChange={(e)=>{

                           obj.email=e.target.value;
                           setobj({...obj})
                           console.log(obj);
                       }}/>
                       <div>password</div>
                       <input type="text" placeholder='Typing...' className='s6' value={obj.password} onChange={(e)=>{
                           obj.password=e.target.value;
                           setobj({...obj})
                           console.log(obj);

                       }}/>
                      <div className='three one'> <input type="checkbox"  placeholder='checkbox' id='rememeber' value={obj.rem}/> <label  style={{color:" #FF7F00"}} for="rememeber">Remember Me</label>
                       <div className='s3 two' style={{color:" #FF7F00"}}>Forget password</div> </div>
                       <button className='btn100' onClick={handlesubmit}>Signin</button>

                
                     
                 
              
             </div>


           </div>
       </div>
  </>
  )
}
