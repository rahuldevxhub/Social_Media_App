import bg from '../assets/bg.jpg'
import { Star } from "lucide-react";
import {SignIn} from '@clerk/clerk-react'
import logo from '../assets/logo.png'
import groupUsers from '../assets/groupusers.png'

const Login = () => {
  return (
    <div className=" flex flex-col md:flex-row ">
     {/* {background img} */}
     <img className=' absolute top-0 left-0 -z-1 h-full w-full object-cover' src={bg} />

     {/* left side */}
     <div className='flex-1 flex flex-col justify-between min-h-screen p-6 md:p-10'>

      <img src={logo} alt="LOGO" className='h-80 object-contain  ' />
       
        <div>
      <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
       
        <img src={groupUsers} alt=""  className='h-15
        md:h-20'/>
        <div>
          <div className='flex'>
            {Array(5).fill(0).map((_, i) => (<Star key={i} className="size-4 md:size-4.5 text-transparent fill-amber-500"/>))}
          </div>
          <p>Connect. Share. Inspire. Repeat</p>

        </div>
      </div>
      <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-linear-to-r from-indigo-950 bg-clip-text text-transparent'>
        Connect, share, and explore with people around the world.
      </h1>
      {/* <p className='text-xl md:text-3xl text-indigo-900 max-w72 md:max-w-md'> Join thousands of people sharing stories, ideas, and moments every day.</p> */}
    
     </div>
     <span className='md:h-10'></span>
    </div>
    {/* right side */}

    <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
      <SignIn/>
    </div>
    </div>
  )
}

export default Login
