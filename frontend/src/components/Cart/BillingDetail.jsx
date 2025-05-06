import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CardContext } from '../../context/CardContext';
import { toast } from 'react-toastify';

const BillingDetails = ({modaal,cardProucts, orderState}) => {
// console.log("card", cardProucts);
let {product, setProduct} = cardProucts
let {orderDone, setOrderDone} = orderState
let  {cardItems, setCardItems} = useContext(CardContext)


const [billingForm, setBillingForm] = useState({ firstName: '', streetAddress: '', townCity: '', phone: '', paymentMethod: 'easypaisa' });
const [message, setMessage] = useState(''); 

const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingForm(prevForm => ({ ...prevForm, [name]: value }));
        setMessage(''); // Clear any previous message on input change
}; 

const validate = () => {
        if (billingForm.firstName.trim().split(/\s+/).filter(Boolean).length < 2) {
            setMessage('Error: First Name must have at least 2 words.');
            return false;
        }
        if (billingForm.streetAddress.trim().length < 6) {
            setMessage('Error: Street Address must be at least 6 characters.');
            return false;
        }
        if (billingForm.townCity.trim().split(/\s+/).filter(Boolean).length < 1) {
            setMessage('Error: Town/City must have at least 1 word.');
            return false;
        }
        if (!/^\d{11}$/.test(billingForm.phone.trim())) {
            setMessage('Error: Phone Number must be 11 digits.');
            return false;
        }
        if (!billingForm.paymentMethod) {
            setMessage('Error: Please select a payment method.');
            return false;
        }
        setMessage(''); // Clear any previous error message if validation passes so far
        return true;
};

// Place Orders
async function placeOrder () {
    if(!validate()) return;
   
    // // all user slect card items pa status pending kr ka send kr rha
    let allcheckoutProducts= product.map(item => ({...item, status : 'pending'}))
    
    // console.log("allChjekut products ==>", allcheckoutProducts);

     try {
      let response = await  fetch('http://localhost:3000/order/done', {
        method: 'POST',
        headers : {
          'authorization' : `bearer ${window.localStorage.getItem('token')}`,
          "Content-Type" : 'application/json',
        },
        body: JSON.stringify(
            {allcheckoutProducts,
             userName: billingForm.firstName,    
             userNum: billingForm.phone,    
             userCity: billingForm.townCity,    
             userAdd: billingForm.streetAddress,    
             userPM: billingForm.paymentMethod,    
            }) 
       })
       let resData = await response.json() 
    //   console.log("response ==>", response);
    //   console.log("Data ==>", resData);

      if(response.status === 200){
         toast.success('Order Done', {position : 'top-left'})
        setProduct([])
        setCardItems([])
        modaal(false)
        return setOrderDone(true)
      }

      
      
     } 
     catch (error) {
      console.log("errror", error);
      
     }
  }   



 return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 rounded-md shadow-md w-130 z-50 animate-fade-in">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                <AiOutlineClose className="h-6 w-6"  onClick={() => console.log(modaal(false))}/>
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Billing Details</h2>

            <div className="mb-3">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-1">First Name*</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={billingForm.firstName}
                    onChange={handleChange}
                    required
                    className={`shadow appearance-none border-none outline-none bg-gray-100 rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm`}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-1">Street Address*</label>
                <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={billingForm.streetAddress}
                    onChange={handleChange}
                    required
                    className={`shadow appearance-none border-none outline-none bg-gray-100 rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm`}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="townCity" className="block text-gray-700 text-sm font-bold mb-1">Town/City*</label>
                <input
                    type="text"
                    id="townCity"
                    name="townCity"
                    value={billingForm.townCity}
                    onChange={handleChange}
                    required
                    className={`shadow appearance-none border-none outline-none bg-gray-100 rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm`}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-1">Phone Number*</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={billingForm.phone}
                    onChange={handleChange}
                    required
                    className={`shadow appearance-none border-none outline-none bg-gray-100 rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm`}
                />
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Payment Method</h3>
                <div className="flex items-center mb-1">
                    <input
                        type="radio"
                        id="easypaisa"
                        name="paymentMethod"
                        value="easypaisa"
                        checked={billingForm.paymentMethod === 'easypaisa'}
                        onChange={handleChange} 
                        className="mr-2 focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label htmlFor="easypaisa" className="text-gray-700 text-sm">Easypaisa</label>
                </div>
                <div className="flex items-center mb-1">
                    <input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        value="cod"
                        checked={billingForm.paymentMethod === 'cod'}
                        onChange={handleChange} 
                        className="mr-2 focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label htmlFor="cashOnDelivery" className="text-gray-700 text-sm">Cash on Delivery</label>
                </div>
            </div>

            <div className="mt-4 flex items-center">
                <input type="checkbox" id="saveInfo" name="saveInfo" className="mr-2 focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" />
                <label htmlFor="saveInfo" className="text-gray-700 text-sm">Save this information for faster check-out next time</label>
            </div>
            <button onClick={placeOrder} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mt-6 focus:outline-none focus:shadow-outline">
                Place Order
            </button>

            {message && (
                <p className={`mt-4 text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </p>
            )}
        </div>
 );
};

export default BillingDetails;