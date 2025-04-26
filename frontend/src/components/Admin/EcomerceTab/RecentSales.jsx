import React from 'react';

const recentSalesData = [
  { id: 1, name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: 1500 },
  { id: 2, name: 'James Smith', email: 'james.smith@email.com', amount: 2000 },
  { id: 3, name: 'Sophia Brown', email: 'sophia.brown@email.com', amount: 4000 },
  { id: 4, name: 'Noah Wilson', email: 'noah.wilson@email.com', amount: 3000 },
  { id: 5, name: 'Isabella Garcia', email: 'isabella.garcia@email.com', amount: 2500 },
  { id: 6, name: 'William Lee', email: 'william.lee@email.com', amount: 3500 },
  { id: 7, name: 'Ava Martinez', email: 'ava.martinez@email.com', amount: 1800 },
  { id: 8, name: 'Ethan Rodriguez', email: 'ethan.rodriguez@email.com', amount: 2200 },
  { id: 9, name: 'Mia Lopez', email: 'mia.lopez@email.com', amount: 2800 },
  { id: 10, name: 'Alexander Hall', email: 'alexander.hall@email.com', amount: 3200 },
];

// Sales Item Component
const SalesItem = ({ name, email, amount }) => {
  return (
    <div className="flex items-center py-4  last:border-b-0">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
        <img
          src='/assets/moiz.jpg'
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="text-xs text-gray-400">{email}</p>
      </div>
      <div className="text-sm font-medium text-white">${amount}</div>
    </div>
  );
};

const RecentSales = () => {
  return (
    <div
      className="bg-[#0E1628] rounded-md shadow-md overflow-y-auto md:w-[430px] h-[370px] w-[100%]"
      style={{
        scrollbarColor: '#5C6777 #0E1628', // thumb and track color (Firefox)
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#0E1628',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#5C6777',
          borderRadius: '4px',
        },
      }}
    >
      <h2 className="text-lg font-semibold text-gray-300 p-3">
        Recent Sales
      </h2>
      <div className="p-3">
        {recentSalesData.map((sale) => (
          <SalesItem key={sale.id} name={sale.name} email={sale.email} amount={sale.amount} />
        ))}
      </div>
    </div>
  );
};

export default RecentSales;