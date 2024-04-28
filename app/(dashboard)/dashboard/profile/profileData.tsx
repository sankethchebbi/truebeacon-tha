
"use client";

// Import necessary components and libraries
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import axios from 'axios';

import { Separator } from "@/components/ui/separator";
import {
	Copy,
	CreditCard
} from "lucide-react";
import { useEffect, useState } from 'react';
// Define interface for user data
interface UserData {
  user_id: string;
  user_type: string;
  email: string;
  user_name: string;
  broker: string;
}


export default function ProfileComponent() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Fetch JSON data when the component mounts
    const fetchData = async () => {
			try {
				// const data: UserData = {
        //   "user_id": "AB1234",
        //   "user_type": "individual",
        //   "email": "xxxyyy@gmail.com",
        //   "user_name": "AxAx Bxx",
        //   "broker": "ZERODHA"
        // };

       const response = await axios.get<UserData>('http://localhost:3003/data/profile');
				// Assuming you have an API route to fetch the JSON data
					console.log(response);
				setUserData(response.data);

				console.log("response---------------");
				//console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            {userData && (
              <>
                <span>"user_id": {userData.user_id}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </>
            )}
          </CardTitle>
          <CardDescription>Date: {new Date().toLocaleDateString()}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">username</dt>
              <dd>{userData && userData.user_name}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">email</dt>
              <dd>
                <a href={`mailto:${userData && userData.email}`}>{userData && userData.email}</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">user type</dt>
              <dd>{userData && userData.user_type}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">broker</dt>
              <dd>{userData && userData.broker}</dd>
            </div>
          </dl>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Payment Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                Mastercard
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}
