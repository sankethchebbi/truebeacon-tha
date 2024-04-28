// "use client";

// import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// const data = [
// {"name": "2017-01-02", "total": 8179.5, "symbol": "NIFTY50"},
// {"name": "2017-01-03", "total": 8192.25, "symbol": "NIFTYBANK"},
// {"name": "2017-01-04", "total": 8190.5, "symbol": "NIFTY50"},
// {"name": "2017-01-05", "total": 8273.8, "symbol": "NIFTYBANK"},
// {"name": "2017-01-06", "total": 8243.8, "symbol": "NIFTY50"},
// {"name": "2017-01-09", "total": 8236.05, "symbol": "NIFTYBANK"},
// {"name": "2017-01-10", "total": 8288.6, "symbol": "NIFTY50"},
// {"name": "2017-01-11", "total": 8380.65, "symbol": "NIFTYBANK"},
// {"name": "2017-01-12", "total": 8407.2, "symbol": "NIFTY50"},
// {"name": "2017-01-13", "total": 8400.35, "symbol": "NIFTYBANK"},
// {"name": "2017-01-16", "total": 8412.8, "symbol": "NIFTY50"},
// {"name": "2017-01-17", "total": 8398, "symbol": "NIFTYBANK"},
// {"name": "2017-01-18", "total": 8417, "symbol": "NIFTY50"},
// {"name": "2017-01-19", "total": 8435.1, "symbol": "NIFTYBANK"},
// {"name": "2017-01-20", "total": 8349.35, "symbol": "NIFTY50"},
// {"name": "2017-01-23", "total": 8391.5, "symbol": "NIFTYBANK"},
// {"name": "2017-01-24", "total": 8475.8, "symbol": "NIFTY50"},
// {"name": "2017-01-25", "total": 8602.75, "symbol": "NIFTYBANK"},
// {"name": "2017-01-27", "total": 8641.25, "symbol": "NIFTY50"},
// {"name": "2017-01-30", "total": 8632.75, "symbol": "NIFTYBANK"},
// {"name": "2017-01-31", "total": 8561.3, "symbol": "NIFTY50"},
// {"name": "2017-02-01", "total": 8716.4, "symbol": "NIFTYBANK"},
// {"name": "2017-02-02", "total": 8734.25, "symbol": "NIFTY50"},
// {"name": "2017-02-03", "total": 8740.95, "symbol": "NIFTYBANK"},
// {"name": "2017-02-06", "total": 8801.05, "symbol": "NIFTY50"},
// {"name": "2017-02-07", "total": 8768.3, "symbol": "NIFTYBANK"},
// {"name": "2017-02-08", "total": 8769.05, "symbol": "NIFTY50"},
// {"name": "2017-02-09", "total": 8778.4, "symbol": "NIFTYBANK"},
// {"name": "2017-02-10", "total": 8793.55, "symbol": "NIFTY50"},
// {"name": "2017-02-13", "total": 8805.05, "symbol": "NIFTYBANK"},
// {"name": "2017-02-14", "total": 8792.3, "symbol": "NIFTY50"},
// {"name": "2017-02-15", "total": 8724.7, "symbol": "NIFTYBANK"},
// {"name": "2017-02-16", "total": 8778, "symbol": "NIFTY50"},
// {"name": "2017-02-17", "total": 8821.7, "symbol": "NIFTYBANK"},
// {"name": "2017-02-20", "total": 8879.2, "symbol": "NIFTY50"},
// {"name": "2017-02-21", "total": 8907.85, "symbol": "NIFTYBANK"},
// {"name": "2017-02-22", "total": 8926.9, "symbol": "NIFTY50"},
// {"name": "2017-02-23", "total": 8939.5, "symbol": "NIFTYBANK"},
// {"name": "2017-02-27", "total": 8896.7, "symbol": "NIFTY50"},
// {"name": "2017-02-28", "total": 8879.6, "symbol": "NIFTYBANK"},
// {"name": "2017-03-01", "total": 8945.8, "symbol": "NIFTY50"},
// {"name": "2017-03-02", "total": 8899.75, "symbol": "NIFTYBANK"},
// {"name": "2017-03-03", "total": 8897.55, "symbol": "NIFTY50"},
// {"name": "2017-03-06", "total": 8963.45, "symbol": "NIFTYBANK"},
// {"name": "2017-03-07", "total": 8946.9, "symbol": "NIFTY50"},
// {"name": "2017-03-08", "total": 8924.3, "symbol": "NIFTYBANK"},
// {"name": "2017-03-09", "total": 8927, "symbol": "NIFTY50"},
// {"name": "2017-03-10", "total": 8934.55, "symbol": "NIFTYBANK"},
// {"name": "2017-03-14", "total": 9087, "symbol": "NIFTY50"},
// {"name": "2017-03-15", "total": 9084.8, "symbol": "NIFTYBANK"},
// {"name": "2017-03-16", "total": 9153.7, "symbol": "NIFTY50"},
// {"name": "2017-03-17", "total": 9160.05, "symbol": "NIFTYBANK"},
// {"name": "2017-03-20", "total": 9126.85, "symbol": "NIFTY50"},
// {"name": "2017-03-21", "total": 9121.5, "symbol": "NIFTYBANK"},
// {"name": "2017-03-22", "total": 9030.45, "symbol": "NIFTY50"},
// {"name": "2017-03-23", "total": 9086.3, "symbol": "NIFTYBANK"},
// {"name": "2017-03-24", "total": 9108, "symbol": "NIFTY50"},
// {"name": "2017-03-27", "total": 9045.2, "symbol": "NIFTYBANK"},
// {"name": "2017-03-28", "total": 9100.8, "symbol": "NIFTY50"},
// {"name": "2017-03-29", "total": 9143.8, "symbol": "NIFTYBANK"},
// {"name": "2017-03-30", "total": 9173.75, "symbol": "NIFTY50"},
// {"name": "2017-03-31", "total": 9173.75, "symbol": "NIFTYBANK"},
// {"name": "2017-04-03", "total": 9237.85, "symbol": "NIFTY50"},
// {"name": "2017-04-05", "total": 9265.15, "symbol": "NIFTYBANK"},
// {"name": "2017-04-06", "total": 9261.95, "symbol": "NIFTY50"},
// {"name": "2017-04-07", "total": 9198.3, "symbol": "NIFTYBANK"},
// {"name": "2017-04-10", "total": 9181.45, "symbol": "NIFTY50"},
// {"name": "2017-04-11", "total": 9237, "symbol": "NIFTYBANK"},
// {"name": "2017-04-12", "total": 9203.45, "symbol": "NIFTY50"},
// {"name": "2017-04-13", "total": 9150.8, "symbol": "NIFTYBANK"},
// {"name": "2017-04-17", "total": 9139.3, "symbol": "NIFTY50"},
// {"name": "2017-04-18", "total": 9105.15, "symbol": "NIFTYBANK"},
// {"name": "2017-04-19", "total": 9103.5, "symbol": "NIFTY50"},
// {"name": "2017-04-20", "total": 9136.4, "symbol": "NIFTYBANK"},
// {"name": "2017-04-21", "total": 9119.4, "symbol": "NIFTY50"},
// {"name": "2017-04-24", "total": 9217.95, "symbol": "NIFTYBANK"},
// {"name": "2017-04-25", "total": 9306.6, "symbol": "NIFTY50"},
// {"name": "2017-04-26", "total": 9351.85, "symbol": "NIFTYBANK"},
// {"name": "2017-04-27", "total": 9342.15, "symbol": "NIFTY50"},
// {"name": "2017-04-28", "total": 9304.05, "symbol": "NIFTYBANK"},
// {"name": "2017-05-02", "total": 9313.8, "symbol": "NIFTY50"},
// {"name": "2017-05-03", "total": 9311.95, "symbol": "NIFTYBANK"},
// {"name": "2017-05-04", "total": 9359.9, "symbol": "NIFTY50"},
// {"name": "2017-05-05", "total": 9285.3, "symbol": "NIFTYBANK"},
// {"name": "2017-05-08", "total": 9314.05, "symbol": "NIFTY50"},
// {"name": "2017-05-09", "total": 9316.85, "symbol": "NIFTYBANK"},
// {"name": "2017-05-10", "total": 9407.3, "symbol": "NIFTY50"}
// ]
// export function Overview() {

// 	return (
// 		<div>
// 			<div style={{ display: 'flex', justifyContent: 'center' }}>
// 		</div>

// 		<ResponsiveContainer width="100%" height={350}>
//       <LineChart data={data}>
//         <XAxis
//           dataKey="name"
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//           tickFormatter={(value) => `$${value}`}
//         />
// 				<Tooltip />
//         <Line type="linear" dataKey="total" stroke="blue" strokeWidth={2} dot={false} />
//       </LineChart>
// 			</ResponsiveContainer>
// 			</div>
//   );
// }

import React, { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import "./Overview.css";


// const data = [
// {"name": "2017-01-02", "total": 8179.5, "symbol": "NIFTY50"},
// {"name": "2017-01-03", "total": 8192.25, "symbol": "NIFTYBANK"},
// {"name": "2017-01-04", "total": 8190.5, "symbol": "NIFTY50"},
// {"name": "2017-01-05", "total": 8273.8, "symbol": "NIFTYBANK"},
// {"name": "2017-01-06", "total": 8243.8, "symbol": "NIFTY50"},
// {"name": "2017-01-09", "total": 8236.05, "symbol": "NIFTYBANK"},
// {"name": "2017-01-10", "total": 8288.6, "symbol": "NIFTY50"},
// {"name": "2017-01-11", "total": 8380.65, "symbol": "NIFTYBANK"},
// {"name": "2017-01-12", "total": 8407.2, "symbol": "NIFTY50"},
// {"name": "2017-01-13", "total": 8400.35, "symbol": "NIFTYBANK"},
// {"name": "2017-01-16", "total": 8412.8, "symbol": "NIFTY50"},
// {"name": "2017-01-17", "total": 8398, "symbol": "NIFTYBANK"},
// {"name": "2017-01-18", "total": 8417, "symbol": "NIFTY50"},
// {"name": "2017-01-19", "total": 8435.1, "symbol": "NIFTYBANK"},
// {"name": "2017-01-20", "total": 8349.35, "symbol": "NIFTY50"},
// {"name": "2017-01-23", "total": 8391.5, "symbol": "NIFTYBANK"},
// {"name": "2017-01-24", "total": 8475.8, "symbol": "NIFTY50"},
// {"name": "2017-01-25", "total": 8602.75, "symbol": "NIFTYBANK"},
// {"name": "2017-01-27", "total": 8641.25, "symbol": "NIFTY50"},
// {"name": "2017-01-30", "total": 8632.75, "symbol": "NIFTYBANK"},
// {"name": "2017-01-31", "total": 8561.3, "symbol": "NIFTY50"},
// {"name": "2017-02-01", "total": 8716.4, "symbol": "NIFTYBANK"},
// {"name": "2017-02-02", "total": 8734.25, "symbol": "NIFTY50"},
// {"name": "2017-02-03", "total": 8740.95, "symbol": "NIFTYBANK"},
// {"name": "2017-02-06", "total": 8801.05, "symbol": "NIFTY50"},
// {"name": "2017-02-07", "total": 8768.3, "symbol": "NIFTYBANK"},
// {"name": "2017-02-08", "total": 8769.05, "symbol": "NIFTY50"},
// {"name": "2017-02-09", "total": 8778.4, "symbol": "NIFTYBANK"},
// {"name": "2017-02-10", "total": 8793.55, "symbol": "NIFTY50"},
// {"name": "2017-02-13", "total": 8805.05, "symbol": "NIFTYBANK"},
// {"name": "2017-02-14", "total": 8792.3, "symbol": "NIFTY50"},
// {"name": "2017-02-15", "total": 8724.7, "symbol": "NIFTYBANK"},
// {"name": "2017-02-16", "total": 8778, "symbol": "NIFTY50"},
// {"name": "2017-02-17", "total": 8821.7, "symbol": "NIFTYBANK"},
// {"name": "2017-02-20", "total": 8879.2, "symbol": "NIFTY50"},
// {"name": "2017-02-21", "total": 8907.85, "symbol": "NIFTYBANK"},
// {"name": "2017-02-22", "total": 8926.9, "symbol": "NIFTY50"},
// {"name": "2017-02-23", "total": 8939.5, "symbol": "NIFTYBANK"},
// {"name": "2017-02-27", "total": 8896.7, "symbol": "NIFTY50"},
// {"name": "2017-02-28", "total": 8879.6, "symbol": "NIFTYBANK"},
// {"name": "2017-03-01", "total": 8945.8, "symbol": "NIFTY50"},
// {"name": "2017-03-02", "total": 8899.75, "symbol": "NIFTYBANK"},
// {"name": "2017-03-03", "total": 8897.55, "symbol": "NIFTY50"},
// {"name": "2017-03-06", "total": 8963.45, "symbol": "NIFTYBANK"},
// {"name": "2017-03-07", "total": 8946.9, "symbol": "NIFTY50"},
// {"name": "2017-03-08", "total": 8924.3, "symbol": "NIFTYBANK"},
// {"name": "2017-03-09", "total": 8927, "symbol": "NIFTY50"},
// {"name": "2017-03-10", "total": 8934.55, "symbol": "NIFTYBANK"},
// {"name": "2017-03-14", "total": 9087, "symbol": "NIFTY50"},
// {"name": "2017-03-15", "total": 9084.8, "symbol": "NIFTYBANK"},
// {"name": "2017-03-16", "total": 9153.7, "symbol": "NIFTY50"},
// {"name": "2017-03-17", "total": 9160.05, "symbol": "NIFTYBANK"},
// {"name": "2017-03-20", "total": 9126.85, "symbol": "NIFTY50"},
// {"name": "2017-03-21", "total": 9121.5, "symbol": "NIFTYBANK"},
// {"name": "2017-03-22", "total": 9030.45, "symbol": "NIFTY50"},
// {"name": "2017-03-23", "total": 9086.3, "symbol": "NIFTYBANK"},
// {"name": "2017-03-24", "total": 9108, "symbol": "NIFTY50"},
// {"name": "2017-03-27", "total": 9045.2, "symbol": "NIFTYBANK"},
// {"name": "2017-03-28", "total": 9100.8, "symbol": "NIFTY50"},
// {"name": "2017-03-29", "total": 9143.8, "symbol": "NIFTYBANK"},
// {"name": "2017-03-30", "total": 9173.75, "symbol": "NIFTY50"},
// {"name": "2017-03-31", "total": 9173.75, "symbol": "NIFTYBANK"},
// {"name": "2017-04-03", "total": 9237.85, "symbol": "NIFTY50"},
// {"name": "2017-04-05", "total": 9265.15, "symbol": "NIFTYBANK"},
// {"name": "2017-04-06", "total": 9261.95, "symbol": "NIFTY50"},
// {"name": "2017-04-07", "total": 9198.3, "symbol": "NIFTYBANK"},
// {"name": "2017-04-10", "total": 9181.45, "symbol": "NIFTY50"},
// {"name": "2017-04-11", "total": 9237, "symbol": "NIFTYBANK"},
// {"name": "2017-04-12", "total": 9203.45, "symbol": "NIFTY50"},
// {"name": "2017-04-13", "total": 9150.8, "symbol": "NIFTYBANK"},
// {"name": "2017-04-17", "total": 9139.3, "symbol": "NIFTY50"},
// {"name": "2017-04-18", "total": 9105.15, "symbol": "NIFTYBANK"},
// {"name": "2017-04-19", "total": 9103.5, "symbol": "NIFTY50"},
// {"name": "2017-04-20", "total": 9136.4, "symbol": "NIFTYBANK"},
// {"name": "2017-04-21", "total": 9119.4, "symbol": "NIFTY50"},
// {"name": "2017-04-24", "total": 9217.95, "symbol": "NIFTYBANK"},
// {"name": "2017-04-25", "total": 9306.6, "symbol": "NIFTY50"},
// {"name": "2017-04-26", "total": 9351.85, "symbol": "NIFTYBANK"},
// {"name": "2017-04-27", "total": 9342.15, "symbol": "NIFTY50"},
// {"name": "2017-04-28", "total": 9304.05, "symbol": "NIFTYBANK"},
// {"name": "2017-05-02", "total": 9313.8, "symbol": "NIFTY50"},
// {"name": "2017-05-03", "total": 9311.95, "symbol": "NIFTYBANK"},
// {"name": "2017-05-04", "total": 9359.9, "symbol": "NIFTY50"},
// {"name": "2017-05-05", "total": 9285.3, "symbol": "NIFTYBANK"},
// {"name": "2017-05-08", "total": 9314.05, "symbol": "NIFTY50"},
// {"name": "2017-05-09", "total": 9316.85, "symbol": "NIFTYBANK"},
// {"name": "2017-05-10", "total": 9407.3, "symbol": "NIFTY50"}
// ]

import axios from 'axios';
import { useEffect } from 'react';
const fetchData = async () => {
	try {
		const response = await axios.get('/data/historical');
		const data = response.data;
		console.log('Fetched data:', data);
		// Add your data parsing logic here
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

fetchData();


const Overview = () => {
	const [selectedSymbol, setSelectedSymbol] = useState('NIFTY50');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('/data/historical');
			setData(response.data);
			console.log('Fetched data:', response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleChangeSymbol = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSymbol(event.target.value);
	};

	const handleChangeStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStartDate((event.target as HTMLInputElement).value);
	};

	const handleChangeEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEndDate((event.target as HTMLInputElement).value);
	};

	const filteredData = data.filter((item: { symbol: string, name: string }) => {
    if (startDate && endDate) {
        return item.symbol === selectedSymbol && item.name >= startDate && item.name <= endDate;
    } else {
        return item.symbol === selectedSymbol;
    }
});

	return (
		<div className="overview-container">
			<div className="input-container">
				<div className="select-container">
					<label htmlFor="symbol">Symbol:</label>
					<select id="symbol" value={selectedSymbol} onChange={handleChangeSymbol}>
						<option value="NIFTY50">NIFTY50</option>
						<option value="NIFTYBANK">NIFTYBANK</option>
					</select>
				</div>
				<div className="date-picker-container">
					<label htmlFor="startDate">Start Date:</label>
					<input id="startDate" type="date" value={startDate} onChange={handleChangeStartDate} />
				</div>
				<div className="date-picker-container">
					<label htmlFor="endDate">End Date:</label>
					<input id="endDate" type="date" value={endDate} onChange={handleChangeEndDate} />
				</div>
			</div>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={400}>
					<LineChart
						data={filteredData}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="total" stroke="#8884d8" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default Overview;
