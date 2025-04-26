import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

const AdminLoginCom = () => {
 // For Inputs Value Stored
 const [formValue, setFormValue] = useState({
  email: '',
  password: '',
})


// For Input Fields Errors
const [formValueErr, setFormValueErr] = useState({
  email: '',
  password: '',
})

// This state is the server msg comes store in  this
const [serverMsg  , setServerMsg] = useState('')

let navigate = useNavigate(null)

//  Onchange Func  Stored value in formValue State
const valuedStored = (e) => {
  setFormValue({
    ...formValue, [e.target.name] : e.target.value
  })
}


// Form validation func
const formValdation = () => {
  let {email,  password,} = formValue
  let errComes = {}    // In this Hold err Comes when Form validation call

  //  All Fiedls Regex Code Stored
 
  let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;  
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;


  // Email Check
  if(!email){
    errComes.email = "Email is Required"
  }
  else if(!emailRegex.test(email)){
    errComes.email = "Invalid Email"
  }

  // password Check
  if(!password){
    errComes.password = "Password is Required"
  }
  else if(!passwordRegex.test(password)){
    errComes.password = "Password must be at 6 chars with letters and numbers"
  }
  
  // Update the State
  setFormValueErr(errComes)

  let errorArray = Object.values(errComes) 
  return errorArray.length

}


const loginSubmit = async (e) => {
  e.preventDefault();
   if(formValdation()){
     return 'form validation failed'
   }

  try {
    let response = await fetch('http://localhost:3000/admin/login', {
      method : 'POST',
      headers : {"Content-type": "application/json"},
      body : JSON.stringify({...formValue, role : 'admin'})
    })
    let resData = await response.json()
    
    console.log("dtaa==>", resData);
    
     if(response.status != 200){
      return setServerMsg(resData.message)
     }

     // Token Set in the Localstorage
     window.localStorage.setItem('token', resData.token)
     setServerMsg(resData.message)
     setTimeout(() => {
        navigate('/admin/dashboard')
     }, 1000);
  }
   catch (error) {
    console.log(error)
    setServerMsg('signup Failed ❌')
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 py-10 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] bg-white shadow-md rounded-xl overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[50%]">
          <img
            src='/assets/adminlogin.png'
            alt="Shopping Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[45%] p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#334DDF] mb-1">
           Login To TekCode
          </h2>
          <p className="text-gray-600 mb-6 font-medium text-sm">Enter your details below</p>

          <form onSubmit={loginSubmit} className="space-y-4">
           
            <input
              type="email"
              className="w-full outline-none focus:border-[#334DDF] py-4 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter email..."
              name="email"
              onChange={valuedStored}
            />
            {formValueErr.email && <p className='err'>{formValueErr.email}</p>}
           
            <input
              type="password"
              className="w-full outline-none focus:border-[#334DDF] py-4 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter password..."
              name="password"
              onChange={valuedStored}
            />
            {formValueErr.password && <p className='err'>{formValueErr.password}</p>}
           
            {/*  server msg show */}
            {serverMsg && <p className={serverMsg.includes('successfully') ? 
            'text-green-700 text-[12px] relative bottom-[12px] left-[5px]' : 'err'}
            >{serverMsg}
            </p>}
         <div className="flex items-center justify-between mt-3">
           <button 
              className="bg-[#334DDF] hover:bg-[#7482cf] text-white font-bold py-3 px-4 rounded w-[45%] text-sm transition duration-300"
           >
            Login
           </button>
           <p className='text-[#334DDF] text-[14px]'>Forget Your Password?</p>
         </div>
            
          </form>

          {/* <p className="mt-5 text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/admin/signup" className="text-[#334DDF] underline font-semibold">
              Signup 
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginCom;
