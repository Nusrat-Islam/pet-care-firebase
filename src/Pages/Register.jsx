import React, { use } from 'react';
import logo from '../assets/pawsyLogo.jpeg'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { RiEyeCloseFill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';





const Register = () => {
 
    const {register, setUser, profileUpdate} = use(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleRegister = (e) =>{
      e.preventDefault();
      const form = e.target;
      const displayName = form.name?.value;
      const photoURL = form.photo?.value;
      const email = form.email?.value;
      const password = form.password?.value;
      console.log(email,photoURL, displayName, password)
      

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!passwordRegex.test(password)) {
  toast.error("❌ Invalid password. Must be at least 6 characters, include uppercase and lowercase letters.");
  return;
} 

      //firebase functionality
       register(email,password)
       .then(res => {
          console.log(res)
         profileUpdate(
          displayName,
          photoURL )
          .then((res)=> {

          toast.success("REgistration Successfull")
           navigate("/")
          })
          .catch((e) => {
            console.log(e)
            toast.error(e.message)
          })
        
       })
       .catch((error) => {
        console.log(error)
  const errorCode = error.code;

  if (errorCode === "auth/email-already-in-use") {
    toast.error("This email is already registered!");
  } 
  else if (errorCode === "auth/invalid-email") {
    toast.error("Invalid email address!");
  } 
  else if (errorCode === "auth/weak-password") {
    toast.error("Password must be at least 6 characters!");
  } 
  else if (errorCode === "auth/missing-password") {
    toast.error("Please enter a password!");
  } 
  else if (errorCode === "auth/internal-error") {
    toast.error("Internal error occurred. Try again!");
  } 
  else {
    toast.error("Something went wrong. Try again later!");
    console.error("Register error:", error);
  }
})


};





    return (
        <div>
             <div className=" 
             relative hero min-h-screen bg-gradient-to-r to-fuchsia-300 bg-green-300 bg-cover bg-center "
             >
  <div className="hero-content flex-col ">
    <div className=" flex ">
        <img src={logo} alt="" className='h-16 w-16 rounded-full' />
      <h1 className="text-5xl font-bold">Register Now!</h1>
    </div>
    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl overflow-hidden">
      <div className="card-body ">
       <form onSubmit={handleRegister} >
         <fieldset className="fieldset ">

            {/* Name */}
          <label className="label font-semibold text-black">Your Name</label>
          <input
          name="name"
           type="text" 
           placeholder="your name" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            />


            {/* Photo */}
          <label className="label font-semibold text-black">Photo URL</label>
          <input
           type="text" 
           name="photo"
           placeholder="Photo url" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            />

            {/* Email */}
          <label className="label font-semibold text-black">Email</label>
          <input
          name="email"
           type="email"  
           placeholder="Email" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            />

            {/* Password */}
          <label className="label font-semibold text-black">Password</label>
          <input 
         name="password"
                            type={show ? "text" : "password"}
                             placeholder="Password"
                             className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 "
                           />
                          
                           <div onClick={()=> setShow(!show)} className="absolute right-10 top-83 curser-pointer">
                             {show? <FaEye size={16} /> : < RiEyeCloseFill size={16}/>}
                             </div>

                   
          <button type='submit' className="btn btn-neutral mt-4 border-none bg-gradient-to-r  from-purple-500 via-blue-600 to-pink-500">Register</button>
        </fieldset>
        <p className='text-xm font-semibold'>Already have an account? <Link to='/login' className='text-pink-600 hover:underline'>Login</Link></p>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;