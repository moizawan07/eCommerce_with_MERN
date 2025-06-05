import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ResetPasswordPage = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://ecommercewithmern-production.up.railway.app/user/resetPassword/${token}`,{
        method : 'POST',
         headers : {
             "Content-Type" : 'application/json'
        },
        body: JSON.stringify({ password })
      });
      let resData = await res.json()
      setMessage(resData.message);
    } catch (err) {
      setMessage('Error resetting password!');
    }
  };

  return (
    <>
    <Header />
    <div className="py-25 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-red-500">Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="Enter new password"
          className="border p-2 w-[75%] rounded-md  border-red-500 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-red-600 text-white px-4 py-2  rounded">Reset Password</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
    <Footer />
    </>
  );
};

export default ResetPasswordPage;
