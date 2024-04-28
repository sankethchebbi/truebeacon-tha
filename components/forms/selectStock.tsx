// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select"

// export function SelectDemo() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a ticker" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Stocks</SelectLabel>
//           <SelectItem value="apple">NIFTY50</SelectItem>
//           <SelectItem value="banana">NIFTYBANK</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }


import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React, { createContext, useContext, useState } from 'react';

// Create a context for the selected value
const SelectedValueContext = createContext<{
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectedValue: '',
  setSelectedValue: () => {},
});

// Custom hook to use the selected value
export const useSelectedValue = () => useContext(SelectedValueContext);

export const SelectDemo = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <SelectedValueContext.Provider value={{ selectedValue, setSelectedValue }}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a ticker" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Stocks</SelectLabel>
            <SelectItem value="NIFTY50" onSelect={() => handleChange('NIFTY50')}>NIFTY50</SelectItem>
            <SelectItem value="NIFTYBANK" onSelect={() => handleChange('NIFTYBANK')}>NIFTYBANK</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </SelectedValueContext.Provider>
  );
};

// Now you can use `useSelectedValue` in any component to access and set the selected value
