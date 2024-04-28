// // pages/index.js
// "use client";

// import { useEffect, useState } from 'react';

// const IndexPage = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch JSON data when the component mounts
//     const fetchData = async () => {
// 			try {
// 				var data =
// 					{
// 					  "status": "success",
// 					  "data": {
// 					    "user_id": "AB1234",
// 					    "user_type": "individual",
// 					    "email": "xxxyyy@gmail.com",
// 					    "user_name": "AxAx Bxx",
// 					    "broker": "ZERODHA"
// 					  }
// 					}

//        // const response = await axios.get('/api/data'); // Assuming you have an API route to fetch the JSON data
// 				setUserData(data);
// 				console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>User Data</h1>
//       {userData && (
//         <div>
//           <p>Name: {userData.data.user_id}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndexPage;

// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const WebSocketComponent = () => {
//   const [randomNumber, setRandomNumber] = useState(null);

//   useEffect(() => {
//     const socket = io();

//     // Event listener for receiving random numbers from the server
//     socket.on('randomNumber', (data) => {
//       setRandomNumber(data);
//     });

//     // Clean up the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Random Number</h1>
//       <p>{randomNumber}</p>
//     </div>
//   );
// };

// export default WebSocketComponent;


import { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      console.log('Received data:', stockData);
      const stockPricesDiv = document.getElementById('stockPrices');

      // Clear previous stock prices
      stockPricesDiv.innerHTML = '';

      // Loop through each stock data and create HTML elements
      stockData.forEach((stock) => {
        const stockDiv = document.createElement('div');
        stockDiv.innerText = `${stock.symbol}: ${stock.price}`;
        stockPricesDiv.appendChild(stockDiv);
      });
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Random Stock Price Generator</h1>
      <div id="stockPrices"></div>
    </div>
  );
};

export default WebSocketComponent;
