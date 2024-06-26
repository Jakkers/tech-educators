import { useEffect } from "react";
import { useState } from "react";

export default function Recipe() {
  //I want to put the wrangled data in state, because I want to track the value of my wrangled data
  const [recipes, setRecipes] = useState([]); //we need an array to mao through it

  //We are going to use useEffect to track the API response
  //The dependency array keeps an eye on a value. When the value updates, the effect triggers again.
  //If the dependency array is empty, the effect will trigger once.
  //!If you forget the dependency array [], the effect will trigger forever.
  //   useEffect(() => {
  //     //effect --> DOM manipulation, API fetch, timers
  //   }, []);

  useEffect(() => {
    //I want to get data from API with fetch method
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes");
      //we parse the data into json
      const data = await response.json();
      //we need to wrangle the data to filter what we want
      const wrangledData = data.recipes[2];
      setRecipes([wrangledData]);
    }
    //I called the fetchData function here to be tracked by use Effect
    fetchData();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.difficulty}</p>
          </div>
        );
      })}
    </>
  );
}
