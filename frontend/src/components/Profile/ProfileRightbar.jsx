import { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { toast } from "react-toastify";

// Edit Profile Form Component
const EditProfileForm = ({ nameChangedFun }) => {
  const [user, setUser] = useState({
    name: "Moiz",
    email: "moiz@gmail.com",
    phone: "01245658785",
    address: "Garden",
    passwordd: "******",
    newPass: "",
    confPass: "",
  });
  const [getUser, setGetUser] = useState(false);
  const [editStart, setEditStart] = useState(false);

  // Get user details from backend
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
      .then(({ data }) => {
        setUser({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          passwordd: "******",
          newPass: "",
          confPass: "",
        });
        nameChangedFun(data.name);
      })
      .catch((err) => console.log(err));
  }, [getUser]);

  // Input change handler
  function profileValuesGet(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  // Edit user profile
  async function userEdit() {
    let { name, email, phone, address, passwordd, newPass, confPass } = user;

    let nameRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;
    let phoneRegex = /^\d{11}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(name)) return toast.error("Invalid Name");
    if (!emailRegex.test(email)) return toast.error("Invalid Email");
    if (!phoneRegex.test(phone)) return toast.error("Invalid phone number");
    if (address.length < 6) return toast.error("Address must be at least 6 characters");
    if (!passwordRegex.test(passwordd))
      return toast.error("Password must have letters & numbers, min 6 chars");
    if (!passwordRegex.test(newPass)) return toast.error("Invalid New Password");
    if (!passwordRegex.test(confPass)) return toast.error("Invalid Confirm Password");
    if (newPass !== confPass)
      return toast.error("New password and confirm password do not match");

    try {
      let response = await fetch("http://localhost:3000/user/editProfile", {
        method: "POST",
        headers: {
          authorization: `bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      let resData = await response.json();
      if (response.status !== 200) throw new Error(resData.message);

      toast.success("Edited Successfully", { position: "bottom-right" });
      setGetUser(!getUser);
      setEditStart(false);
    } catch (error) {
      return toast.error(error.message);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto md:px-4 py-6">
      <div className="bg-white rounded-xl shadow-md p-2 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-red-500">
            {editStart ? "Edit" : "Your"} Profile
          </h2>
          {!editStart && (
            <TbEdit
              size={24}
              onClick={() => {
                setEditStart(true);
                setUser({ ...user, passwordd: "" });
              }}
              className="text-gray-600 cursor-pointer hover:text-red-500 transition-all"
            />
          )}
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              disabled={!editStart}
              value={user.name}
              onChange={profileValuesGet}
              className={`w-full px-4 py-2 rounded-md bg-gray-100 border ${
                editStart ? "border-red-500" : "border-transparent"
              } focus:outline-none`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              disabled={!editStart}
              value={user.email}
              onChange={profileValuesGet}
              className={`w-full px-4 py-2 rounded-md bg-gray-100 border ${
                editStart ? "border-red-500" : "border-transparent"
              } focus:outline-none`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type={!editStart ? "text" : "number"}
              id="phone"
              disabled={!editStart}
              value={!editStart ? user.phone.slice(0, 5) + "******" : user.phone}
              onChange={profileValuesGet}
              className={`w-full px-4 py-2 rounded-md bg-gray-100 border ${
                editStart ? "border-red-500" : "border-transparent"
              } focus:outline-none`}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              id="address"
              disabled={!editStart}
              value={user.address}
              onChange={profileValuesGet}
              className={`w-full px-4 py-2 rounded-md bg-gray-100 border ${
                editStart ? "border-red-500" : "border-transparent"
              } focus:outline-none`}
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Password Change</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="passwordd"
                disabled={!editStart}
                value={user.passwordd}
                onChange={profileValuesGet}
                className={`w-full px-4 py-2 rounded-md bg-gray-100 border ${
                  editStart ? "border-red-500" : "border-transparent"
                } focus:outline-none`}
              />
            </div>

            {editStart && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPass"
                    value={user.newPass}
                    onChange={profileValuesGet}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 border border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confPass"
                    value={user.confPass}
                    onChange={profileValuesGet}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 border border-red-500 focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        {editStart && (
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={() => {
                setEditStart(false);
                setGetUser(!getUser);
              }}
              className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={userEdit}
              className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { EditProfileForm };
