import { useRef } from "react";
import { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { toast } from "react-toastify";

// Edit Profile Form Component
const EditProfileForm = ({ nameChanged }) => {
  let [user, setUser] = useState({
    name: "Moiz",
    email: "moiz@gmail.com",
    phone: "01245658785",
    address: "Garden",
    passwordd : '******',
    newPass : '',
    confPass : '',
  });
  const [getUser, setGetUser] = useState(false)
  const [editStart, setEditStart] = useState(false);


  // User Profile Values get
  useEffect(() => {
    fetch("http://localhost:3000/user/getUser", {
      method: "GET",
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status !== 200) throw new Error("Error");
        return res.json();
      })
      .then(({data}) => {
        setUser({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          passwordd : '******',
          newPass : '',
          confPass : '',
        });
      })
      .catch((err) => console.log(err));
  }, [getUser]);

  // useEffect(() => {
  //   nameChanged(user.name);
  // }, [user.name]);

  function profileValuesGet(e) {
   setUser({...user, [e.target.id] : e.target.value})
  }

  // User Edit In this
  async function userEdit  ()  {
   let {name, email, phone, address, passwordd, newPass, confPass} = user
   //  All Fiedls Regex Code
   let nameRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
   let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;  
   let phoneRegex = /^\d{11}$/;
   let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  //  console.log("name", name);
   
   // Name Check
    if(!nameRegex.test(name)){
   return toast.error('Invalid Name')
  }
    if(!emailRegex.test(email)){
   return toast.error('Invalid Email')

  }
    if(!phoneRegex.test(phone)){
   return toast.error('Invalid phone number')

  }
    if(address.length < 6){
   return toast.error('Addres must be at 6 characters long')

  }
    if(!passwordRegex.test(passwordd)){
   return toast.error('Password must be at least 6 characters and include letters and numbers')
  }
    if(!passwordRegex.test(newPass)){
   return toast.error('Invalid New Password')
  }
    if(!passwordRegex.test(confPass)){
      return toast.error('Invalid Confirm Password')
  }

  if(newPass !== confPass){
    return toast.error('New password and confirm password do not match')
  }

  try {
    let response = await  fetch("http://localhost:3000/user/editProfile", {
      method: "POST",
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body : JSON.stringify(user)
})
  let resData = await response.json()
 
  if(response.status !== 200){
    throw new Error(resData.message)
  }
  toast.success('Edit Sucessfully', {position : 'bottom-right'})
  
  setGetUser()
  setEditStart(false)
} 
  catch (error) {
    return toast.error(error.message)  
  }
   
  }


  return (
    <div className={`bg-white p-6  ${!editStart ? 'mt-5' : 'mt-2'} rounded-md shadow-md w-full md:w-3/4 lg:w-[780px] mx-auto`}>
      <div className="flex justify-between items-center">
        <h2
          className="text-xl font-semibold mb-6 text-red-500"
          onClick={() => nameChanged(user.name)}
        >
          {editStart && "Edit"} Your Profile
        </h2>

        {!editStart && (
          <TbEdit size={22} onClick={() => {setEditStart(true); setUser({...user, passwordd : ''})}} 
          className="cursor-pointer text-gray-700"/>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            className={`rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none 
              ${editStart && 'border border-red-500'}
              `}
            placeholder="Md"
            value={user.name}
            onChange={profileValuesGet}
            disabled={!editStart}
          />
        </div>
       
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
           className={`rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none 
              ${editStart && 'border border-red-500'}
              `}
            placeholder="rimel1111@gmail.com"
            value={user.email}
            onChange={profileValuesGet}
            disabled={!editStart}
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type={!editStart ? 'text' : 'number'}
            id="phone"
            className={`rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none 
              ${editStart && 'border border-red-500'}
              `}
            placeholder="Rimon"
            value={!editStart ? user.phone.slice(0, 5) + "******" : user.phone}
            onChange={profileValuesGet}
            disabled={!editStart}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className={`rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none 
              ${editStart && 'border border-red-500'}
              `}
            placeholder="Kingston, 5236, United State"
            value={user.address}
            onChange={profileValuesGet}
            disabled={!editStart}
          />
        </div>

      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Password Changes
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Current Password
            </label>
            <input
              type="password"
              id="passwordd"
              className={`rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none 
                ${editStart && 'border border-red-500'}
                `}
              placeholder="Current Passwod"
              value={user.passwordd}
              onChange={profileValuesGet}
              disabled={!editStart}
            />
          </div>

         {editStart && (
          <>
            <div>
             <label
              htmlFor="newPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
             >
              New Password
             </label>
             <input
              type="password"
              id="newPass"
              className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none border border-red-500"
              placeholder="New Passwod"
              value={user.newPass}
              onChange={profileValuesGet}
             />
             </div>
            <div>
            <label
              htmlFor="confirmNewPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confPass"
              className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none border border-red-500"
              placeholder="Confirm New Passwod"
              onChange={profileValuesGet}
              value={user.confPass}
            />
            </div>
        </>
         )}
        </div>
         </div>

       {editStart && (
         <div className="flex justify-end mt-6">
        <button
          onClick={() => {setEditStart(false); setGetUser(!getUser)}}
          className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm mr-4 focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
        <button onClick={userEdit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:shadow-outline">
          Save Changes
        </button>
         </div>
       ) 

       }
       
    </div>
  );
};

export { EditProfileForm };
