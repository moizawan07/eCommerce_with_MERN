import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

const AdminSignupCom = () => {
  // For Inputs Value Stored
  const [formValue, setFormValue] = useState({
    name : '',
    email: '',
    phone: '',
    password: '',
    address: '',
  })

  // For Input Fields Errors
  const [formValueErr, setFormValueErr] = useState({
    name : '',
    email: '',
    phone: '',
    password: '',
    address: '',
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
    let {name, email, phone, password,  address} = formValue
    let errComes = {}    // In this Hold err Comes when Form validation call

    //  All Fiedls Regex Code Stored
    let nameRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;  
    let phoneRegex = /^\d{11}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    // Name Check
    if(!name){
      errComes.name = "Name is Required"
    }
    else if(!nameRegex.test(name)){
      errComes.name = "Name must be 3 chracters long"
    }

    // Email Check
    if(!email){
      errComes.email = "Email is Required"
    }
    else if(!emailRegex.test(email)){
      errComes.email = "Invalid Email"
    }

    // Phone Check
    if(!phone){
      errComes.phone = "Phone number is Required"
    }
    else if(!phoneRegex.test(phone)){
      errComes.phone = "Invalid number"
    }

    // password Check
    if(!password){
      errComes.password = "Password is Required"
    }
    else if(!passwordRegex.test(password)){
      errComes.password = "Password must be at 6 chars with letters and numbers"
    }
    // password Check
    if(!address){
      errComes.address = "Address is Required"
    }
    else if(address.length < 6){
      errComes.address = "Addres must be at 6 characters long"
    }
    

    // Update the State
    setFormValueErr(errComes)

    let errorArray = Object.values(errComes) 
    return errorArray.length
    
    
  }


  const signupSubmit = async (e) => {
    e.preventDefault();
     if(formValdation()){
       return 'form validation failed'
     }

    try {
      let response = await fetch('http://localhost:3000/admin/signup', {
        method : 'POST',
        headers : {"Content-type": "application/json"},
        body : JSON.stringify({...formValue, role : 'admin'})
      })
      let resData = await response.json()

       if(response.status != 201){
        return setServerMsg(resData.message)
       }

       setServerMsg(resData.message)
       setTimeout(() => {
          navigate('/adminnnnnnnnnnlogin')
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
        <div className="w-full md:w-[55%]">
          <img
            src="/assets/adminform.png"
            alt="Admin Form "
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[45%] p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-1">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6 font-medium text-sm">Enter your details below</p>

          <form onSubmit={signupSubmit} className="space-y-4">
            <input
              type="text"
              className="w-full outline-none focus:border-[#00DFC0] py-2 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter name..."
              name="name"
              onChange={valuedStored}
            />
            {formValueErr.name && <p className='err'>{formValueErr.name}</p>}

            <input
              type="email"
              className="w-full outline-none focus:border-[#00DFC0] py-2 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter email..."
              name="email"
              onChange={valuedStored}
            />
            {formValueErr.email && <p className='err'>{formValueErr.email}</p>}

            <input
              type="number"
              className="w-full outline-none focus:border-[#00DFC0] py-2 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter phone number..."
              name="phone"
              onChange={valuedStored}
            />
            {formValueErr.phone && <p className='err'>{formValueErr.phone}</p>}

            <input
              type="password"
              className="w-full outline-none focus:border-[#00DFC0] py-2 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter password..."
              name="password"
              onChange={valuedStored}
            />
            {formValueErr.password && <p className='err'>{formValueErr.password}</p>}

            <input
              type="text"
              className="w-full outline-none focus:border-[#00DFC0] py-2 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter address..."
              name="address"
              onChange={valuedStored}
            />
            {formValueErr.address && <p className='err'>{formValueErr.address}</p>}


            {/* This State is the server msg show */}
            {serverMsg && <p className={serverMsg.includes('successfully') ? 
            'text-green-700 text-[12px] relative bottom-[12px] left-[5px]' : 'err'}
            >{serverMsg}
            </p>}

            <button
              className="bg-[#0b8777] hover:bg-[#4a867e] text-white outline-none font-bold py-3 px-4 rounded w-full text-sm transition duration-300"
              type="submit"
            >
              Create Account
            </button>

            <button
              className="flex items-center justify-center border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full text-sm hover:bg-gray-100 transition"
              type="button"
            >
              <FcGoogle className="mr-2" size={18} />
              Sign up with Google
            </button>
          </form>

          <p className="mt-5 text-gray-600 text-sm text-center">
            Already have an account?{" "}
            <Link to="/adminnnnnnnnnnlogin" className="text-[#094b42] underline font-semibold" 
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignupCom;
