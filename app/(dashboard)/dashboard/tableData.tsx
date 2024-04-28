import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Stock {
  tradingsymbol: string;
  exchange: string;
  isin: string;
  quantity: number;
  authorised_date: string;
  average_price: number;
  last_price: number;
  close_price: number;
  pnl: number;
  day_change: number;
  day_change_percentage: number;
}

export function StockTable() {
	const [stockData, setStockData] = useState<{ data: Stock[] }>({ data: [] });

  useEffect(() => {
    axios.get('http://localhost:3003/data/holdings')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <Table>
      <TableCaption>Stock Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Exchange</TableHead>
          <TableHead>ISIN</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Authorized Date</TableHead>
          <TableHead>Average Price</TableHead>
          <TableHead>Last Price</TableHead>
          <TableHead>Close Price</TableHead>
          <TableHead>Profit/Loss</TableHead>
          <TableHead>Day Change</TableHead>
          <TableHead>Day Change Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stockData.data.map((stock) => (
          <TableRow key={stock.isin}>
            <TableCell>{stock.tradingsymbol}</TableCell>
            <TableCell>{stock.exchange}</TableCell>
            <TableCell>{stock.isin}</TableCell>
            <TableCell>{stock.quantity}</TableCell>
            <TableCell>{stock.authorised_date}</TableCell>
            <TableCell>{stock.average_price}</TableCell>
            <TableCell>{stock.last_price}</TableCell>
            <TableCell>{stock.close_price}</TableCell>
            <TableCell>{stock.pnl}</TableCell>
            <TableCell>{stock.day_change}</TableCell>
            <TableCell>{stock.day_change_percentage}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
