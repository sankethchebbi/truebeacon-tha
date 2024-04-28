// import {
// 	AlertDialog,
// 	AlertDialogAction,
// 	AlertDialogContent,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogTrigger
// } from "@/components/ui/alert-dialog";


// import { Button } from "@/components/ui/button";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
// 	ToggleGroup,
// 	ToggleGroupItem,
// } from "@/components/ui/toggle-group";
// import axios from 'axios'; // Import axios for making API requests

// export function PlaceComponent() {
//   const placeOrder = async () => {
//     const symbolElement = document.getElementById('symbol') as HTMLInputElement;
//     const qtyElement = document.getElementById('quantity') as HTMLInputElement;
//     const priceElement = document.getElementById('price') as HTMLInputElement;

//     if (symbolElement && qtyElement && priceElement) {
//       const symbol = symbolElement.value;
//       const qty = qtyElement.value;
//       const price = priceElement.value;
// 			const message = "Order placed";
// 			const orderID = "CMD1001";
//       try {
// 				const response = await axios.post('http://localhost:3003/placeorder', {
// 					message,
// 					orderID,
//           symbol,
//           qty,
//           price
//         });

//         console.log('Order placed successfully:', response.data);
//       } catch (error) {
//         console.error('Error placing order:', error);
//       }
//     }
//   };

//   return (
//     <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-xl">Place order</CardTitle>
//         <CardDescription>
//           Enter SYMBOL, QTY and PRICE to place an order
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="grid gap-2">
//               <Label>SYMBOL</Label>
//               <Input id="symbol" placeholder="NIFTYBANK" required />
//             </div>
//             <div className="grid gap-2">
//               <Label>QTY</Label>
//               <Input id="quantity" type="number" defaultValue="100"/>
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <Label>Price</Label>
//             <Input id="price" type="number" defaultValue="1000" required />
//           </div>
//           <ToggleGroup type="single" defaultValue="s" variant="outline">
//             <ToggleGroupItem value="s">Buy</ToggleGroupItem>
//             <ToggleGroupItem value="m">Sell</ToggleGroupItem>
//           </ToggleGroup>
//           <AlertDialog>
//             <AlertDialogTrigger asChild>
//               <Button onClick={placeOrder}>Place order</Button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>YAY! Your order has been placed! 🎉</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   Your order has been placed successfully. <br></br>Please check logs for further info.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogAction>
//                   Okay
//                 </AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>

//           <Button variant="outline" className="w-full">
//             View orders
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


import axios from 'axios';
import { useState } from 'react';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group";


interface order {
  symbol: string;
  quantity: number;
  price: number;
}

export function PlaceComponent() {
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [orders, setOrders] = useState<order[]>([]); // State to store orders

  const placeOrder = async () => {
    const symbolElement = document.getElementById('symbol') as HTMLInputElement;
    const qtyElement = document.getElementById('quantity') as HTMLInputElement;
    const priceElement = document.getElementById('price') as HTMLInputElement;

    if (symbolElement && qtyElement && priceElement) {
      const symbol = symbolElement.value;
      const quantity = qtyElement.value;
      const price = priceElement.value;
      const message = "Order placed";
      const orderID = "CMD1001";

      try {
        const response = await axios.post('http://localhost:3003/placeorder', {
          message,
          orderID,
					price,
					quantity,
					symbol
        });

        console.log('Order placed successfully:', response.data);
        setOrderPlaced(true);
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
	};

	 const viewOrder = async () => {
    try {
      const response = await axios.get('http://localhost:3003/orders'); // Adjust URL as needed
      setOrders(response.data);
      console.log('Orders fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Place order</CardTitle>
        <CardDescription>
          Enter SYMBOL, QTY and PRICE to place an order
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>SYMBOL</Label>
              <Input id="symbol" placeholder="NIFTYBANK" required />
            </div>
            <div className="grid gap-2">
              <Label>QTY</Label>
              <Input id="quantity" type="number" defaultValue="100"/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Price</Label>
            <Input id="price" type="number" defaultValue="1000" required />
          </div>
          <ToggleGroup type="single" defaultValue="s" variant="outline">
            <ToggleGroupItem value="s">Buy</ToggleGroupItem>
            <ToggleGroupItem value="m">Sell</ToggleGroupItem>
          </ToggleGroup>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button onClick={placeOrder}>Place order</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>YAY! Your order has been placed! 🎉</AlertDialogTitle>
                <AlertDialogDescription>
                  Your order has been placed successfully. <br></br>Please check logs for further info.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>
                  Okay
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
</div>

					{orders.length > 0 && (
  <div>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={viewOrder}>View orders</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Order Details</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Here are the details of your orders:
        </AlertDialogDescription>
        <div>
          <h3>Orders:</h3>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                Symbol: {order.symbol}, Quantity: {order.quantity}, Price: {order.price}
              </li>
            ))}
          </ul>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction>
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
)}
      </CardContent>
		</Card>
  );
}
