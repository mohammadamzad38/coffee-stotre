import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

export default function App() {
  const coffeeLoade = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeLoade);
  return (
    <div className="text-3xl font-bold max-w-7xl mx-auto">
      how many coffee: {coffees.length}
      <div className="flex flex-col gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}
