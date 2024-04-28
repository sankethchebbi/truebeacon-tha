"use client";
import Overview from "@/components/overview";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlaceComponent } from "./placeOrder";
import ProfileComponent from "./profile/profileData";

import { StockTable } from "./tableData";

export default function page() {
	const [totalInvested, setTotalInvested] = useState('');
	const [profitLoss, setProfitLoss] = useState('');
	const [price1, setPrice1] = useState(null);
	const [price2, setPrice2] = useState(null);
	//   useEffect(() => {
	//   const fetchData = async () => {
	//     try {
	//       const response = await axios.get('http://localhost:3003/data/holdings'); // Replace '/api/data' with your server endpoint
	//       const responseData = response.data;

	//       if (responseData && Array.isArray(responseData.data)) {
	//         const data = responseData.data;

	//         // Calculate total invested (average price * quantity)
	//         const totalInvestedAmount = data.reduce((total: number, item: { average_price: number, quantity: number }) => {
	//           return total + item.average_price * item.quantity;
	//         }, 0);

	//         // Calculate total profit/loss (sum of pnl)
	//         const totalProfitLoss = data.reduce((total: number, item: { pnl: number }) => {
	//           return total + item.pnl;
	//         }, 0);

	//         setTotalInvested(totalInvestedAmount);
	//         setProfitLoss(totalProfitLoss);
	//       } else {
	//         console.error('Invalid data format:', responseData);
	//       }
	//     } catch (error) {
	//       console.error('Error fetching data:', error);
	//     }
	//   };

	//   fetchData();
	// }, []);

	// useEffect(() => {
	// 	// Fetch data from API
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get('http://localhost:3003/data/holdings');
	// 			const responseData = response.data;

	// 			if (responseData && Array.isArray(responseData.data)) {
	// 				const data = responseData.data;

	// 				const totalInvestedAmount = data.reduce((total: number, item: { average_price: number, quantity: number }) => {
	// 					return total + item.average_price * item.quantity;
	// 				}, 0);

	// 				const totalProfitLoss = data.reduce((total: number, item: { pnl: number }) => {
	// 					return total + item.pnl;
	// 				}, 0);

	// 				setTotalInvested(totalInvestedAmount);
	// 				setProfitLoss(totalProfitLoss);
	// 			} else {
	// 				console.error('Invalid data format:', responseData);
	// 			}
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error);
	// 		}
	// 	};

	// 	fetchData();

	// 	// WebSocket connection
	// 	const ws = new WebSocket('ws://localhost:8080');

	// 	ws.onopen = () => {
	// 		console.log('Connected to WebSocket server');
	// 	};

	// 	ws.onmessage = (event) => {
	// 		const stockData = JSON.parse(event.data);
	// 		console.log('Received data:', stockData);
	// 		const stockPricesDiv = document.getElementById('stockPrices');
	// 		if (stockPricesDiv) {
  //       stockPricesDiv.innerHTML = '';

	// 			// Extract prices for the first two stocks
  //       const price1 = stockData[0].price;
  //       const price2 = stockData[1].price;

  //       console.log('Price 1:', price1);
  //       console.log('Price 2:', price2);

  //       // Create HTML elements for price 1 and price 2 if needed
  //   }
	// 		// Clear previous stock prices
	// 		if (stockPricesDiv) {
	// 			stockPricesDiv.innerHTML = '';
	// 			// Loop through each stock data and create HTML elements
	// 			stockData.forEach((stock: { symbol: string, price: number }) => {
	// 				const stockDiv = document.createElement('div');
	// 				stockDiv.innerText = `${stock.symbol}: ${stock.price}`;
	// 				stockPricesDiv.appendChild(stockDiv);
	// 			});
	// 		}
	// 	};

	// 	ws.onclose = () => {
	// 		console.log('Disconnected from WebSocket server');
	// 	};

	// 	return () => {
	// 		ws.close();
	// 	};
	// }, []);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/holdings');
        const responseData = response.data;

        if (responseData && Array.isArray(responseData.data)) {
          const data = responseData.data;

          const totalInvestedAmount = data.reduce((total: number, item: { average_price: number, quantity: number }) => {
            return total + item.average_price * item.quantity;
          }, 0);

          const totalProfitLoss = data.reduce((total: number, item: { pnl: number }) => {
            return total + item.pnl;
          }, 0);

          setTotalInvested(totalInvestedAmount);
          setProfitLoss(totalProfitLoss);
        } else {
          console.error('Invalid data format:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      console.log('Received data:', stockData);
			setPrice1(stockData[0].price);
			setPrice2(stockData[1].price);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);


	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						Welcome back!
					</h2>
				</div>
				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Dashboard</TabsTrigger>
						<TabsTrigger value="analytics">
							Place order
						</TabsTrigger>
					</TabsList>
					<TabsContent value="overview" className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Total Invested
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">{typeof totalInvested === 'number' ? `₹${(totalInvested as number).toFixed(2)}` : 'Loading...'}</div>
									<p className="text-xs text-muted-foreground">
										+20.1% from last month
									</p>
								</CardContent>
							</Card>


							<Card className="col-span-1 bg-green-300">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Profit/Loss
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">{typeof profitLoss === 'number' ? `₹${(profitLoss as number).toFixed(2)}` : 'Loading...'}</div>
									<p className="text-xs text-muted-foreground">
										+180.1% from last month
									</p>
								</CardContent>
							</Card>

							<Card className="col-span-1">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Live Ticker
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<div className="text-2xl font-bold">NIFTY50</div>
											<p className="text-xs text-muted-foreground">
												+180.1% from last month
											</p>
										</div>
										<Card className="text-center flex items-center justify-center">
											<strong>{price1}</strong>
										</Card>
									</div>
								</CardContent>
							</Card>


							<Card className="col-span-1">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Live Ticker
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<div className="text-2xl font-bold">NIFTYBANK</div>
											<p className="text-xs text-muted-foreground">
												+180.1% from last month
											</p>
										</div>
										<Card className="text-center flex items-center justify-center">
											<strong>{price2}</strong>
										</Card>
									</div>
								</CardContent>
							</Card>



						</div>
						<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
							<Card className="col-span-4">
								<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle>Historical Data</CardTitle>
									{/* <SelectDemo />
									<CalendarDateRangePicker /> */}
								</CardHeader>
								<CardContent className="pl-2">
									<Overview />
								</CardContent>
							</Card>

							<Card className="col-span-4 md:col-span-3">
								<CardHeader>
									<CardTitle>Profile Information</CardTitle>
								</CardHeader>
								<CardContent>
									<ProfileComponent />{/* */}
								</CardContent>

							</Card>

						</div>
						<Card>
							<StockTable />
						</Card>
					</TabsContent>
					<TabsContent value="analytics" className="space-y-4">
						<PlaceComponent />
					</TabsContent>

				</Tabs>
			</div>
		</ScrollArea>
	);
}
