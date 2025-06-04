import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/user/forgotPassword', {
        method : 'POST',
        headers : {
             "Content-Type" : 'application/json'
        },
        body : JSON.stringify({email})
      });
      const resData = await res.json()
      setMessage(resData.message);
    } catch (err) {
      setMessage('Something went wrong!');
    }
  };

  return (
    <>
    <Header />
    <div className="py-30 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-red-500 text-left">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-[70%]  mb-4 border-red-500 rounded-md outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-red-600 text-left text-white px-4 py-2 rounded">Send Reset Link</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
    <Footer />
  </>
  );
};

export default ForgotPasswordPage;
