import React, { use } from 'react';
import logo from '../assets/pawsyLogo.jpeg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';

const Login = () => {
const {login} = use(AuthContext)
const navigate = useNavigate();
const [show, setShow] = useState(false)

const handleLogin = (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email?.value;
  const password = form.password?.value;
  console.log(email, password);

  //firebase funtionality
  login(email,password)
  .then((result) => {
   const user =result.user;
   console.log(user);
   navigate("/")
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
}

  return (
    <div>
      <div className=" 
             relative hero min-h-screen bg-gradient-to-r to-fuchsia-300 bg-green-300 bg-cover bg-center "
      >
        <div className="hero-content flex-col ">
          <div className=" flex ">
            <img src={logo} alt="" className='h-16 w-16 rounded-full' />
            <h1 className="text-4xl font-bold">Login Your Account!</h1>
          </div>
          <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl overflow-hidden">
            <div className="card-body ">


              <form onSubmit={handleLogin} >
                <fieldset className="fieldset ">

                  {/* Email */}
                  <label className="label font-semibold text-black">Email</label>
                  <input
                  name='email'
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />

                  {/* Name */}
                  <label className="label font-semibold text-black relative">Password</label>
               
                    <input
                
                  name="password"
                   type={show ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 "
                  />
                 
                  <div onClick={()=> setShow(!show)} className="absolute right-10 top-39 curser-pointer">
                    {show? <FaEye size={16} /> : < RiEyeCloseFill size={16}/>}
                    </div>
                  

                  <div><a className="link link-hover font-semibold ">Forgot password?</a></div>

                  <button className="btn  mt-4  w-full p-3 mb-4 rounded border border-black-400 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 ">
                    <FcGoogle size={24} />
                    Continue with google</button>

                  <button className="btn btn-neutral mt-4 border-none bg-gradient-to-r  from-purple-500 via-blue-600 to-pink-500">Login</button>
                </fieldset>
                <p className='text-xm font-semibold'>Don't have an account? <Link to='/register' className='text-pink-600 hover:underline'>Register</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;