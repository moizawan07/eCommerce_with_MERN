import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 py-10 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] bg-white shadow-md rounded-xl overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[55%]">
          <img
            src="/assets/SignupImg.png"
            alt="Shopping Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[45%] p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-1">
           Login To TekCode
          </h2>
          <p className="text-gray-600 mb-6 font-medium text-sm">Enter your details below</p>

          <form className="space-y-4">
           
            <input
              type="email"
              className="w-full outline-none focus:border-red-500 py-4 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter email..."
              name="email"
            />
           
            <input
              type="password"
              className="w-full outline-none focus:border-red-500 py-4 px-3 text-gray-700 border-b border-gray-300 text-sm"
              placeholder="Enter password..."
              name="password"
            />
           
            
         <div className="flex items-center justify-between mt-3">
           <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded w-[45%] text-sm transition duration-300"
           >
            Login
           </button>
           <p className='text-red-500 text-[14px]'>Forget Your Password?</p>
         </div>
            
          </form>

          <p className="mt-5 text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500 underline font-semibold">
              Signup 
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
