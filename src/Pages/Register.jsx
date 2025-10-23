import React from 'react';
import logo from '../assets/pawsyLogo.jpeg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
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
       <form  >
         <fieldset className="fieldset ">

            {/* Name */}
          <label className="label font-semibold text-black">Your Name</label>
          <input
           type="text" 
           placeholder="your name" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />


            {/* Photo */}
          <label className="label font-semibold text-black">Photo URL</label>
          <input
           type="text" 
           
           placeholder="Photo url" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Email */}
          <label className="label font-semibold text-black">Email</label>
          <input
           type="email"  
           placeholder="Email" 
            className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Password */}
          <label className="label font-semibold text-black">Password</label>
          <input type="password"
            placeholder="Password"
             className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 "
              />

          <div><a className="link link-hover font-semibold ">Forgot password?</a></div>
  
         
          <button className="btn btn-neutral mt-4 border-none bg-gradient-to-r  from-purple-500 via-blue-600 to-pink-500">Login</button>
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