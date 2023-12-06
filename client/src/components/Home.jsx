import { motion } from 'framer-motion'
import React from 'react'
import { buttonClick } from '../animations'

import { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div className='w-full grid grid-cols-1 gap-4'>
        <div className='flex flex-col items-start justify-start gap-6'>
            <p className='text-[40px] text-headingColor md:text-[60px] font-sans font-extrabold tracking-wider'>
                Greatest Grocery in {" "}
                <span className='text-orange-600'>Salt Lake City</span>!
            </p>
            <p className='text-textColor text-lg'>
                If you not only want to buy fresh and cheap food, but also look for healthy recipes, Menumind is for you.
            </p>
        </div>
    </motion.div>
  )
}

// design with menu
// const Home = () => {
//     let default_food = 'apple'

//     const APP_ID = 'b9912160';
//     // const APP_ID = 'b4559f4b'; // food database API
//     const API_KEY = 'a10419b80a1852bb31ecf515363d2e18';
//     // const API_KEY = '3f4435fe982df7d2702d6c694aaddd08'; // food database API

//     const [recipes, setRecipes] = useState([])
//     const [search, setSearch] = useState("");
//     const [querry, setQuerry] = useState(default_food)

//     useEffect(() => {
//         // getRecipes() // simply comment this function out when testing (to avoid excessive API calls)
//     }, [querry])
    
//     const getSearch = (e) => {
//         e.preventDefault()
//         setQuerry(search)
//         setSearch('')
//     }
    
//     const updateSearch = (e) => {
//         setSearch(e.target.value);
//     };

//     const search_show = false // hide the search bar

//     // very important function...
//     const getRecipes = async () => {
//         const response = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${API_KEY}`)
//         const data = await response.json();
//         setRecipes(response.data);
//         console.log(data.hits);
//         // console.log(data.hits[0].recipe.label); // dish name
//         // console.log(data.hits[0].recipe.image) // dish image (url)
//         // console.log(data.hits[0].recipe.totalTime) // cook time

//         for (let i = 0; i < 10; i++) {
//             // console.log(data.hits[0].recipe.image) // dish image (url)
//             // console.log(data.hits[0].recipe.totalTime) // cook time
//             let menu_info = document.getElementById("info" + `${i}`);

//             menu_info.innerHTML = ""; // clean before search

//             if (data.hits[i] === undefined) {
//                 continue; // sometimes there are <10 results (for example, borshch)
//             }

//             let picture = document.createElement('p');
//             picture.innerHTML += "<img src='" + 
//                                 data.hits[i].recipe.image + 
//                                 "' alt='pic' width='200' height='200' >";
//             menu_info.appendChild(picture);

//             let record = document.createElement('p');
//             let label = data.hits[i].recipe.label; // dish label
//             // clean the data
//             label = label.replace(" Recipe", "");
//             label = label.replace(" Recipes", "");
//             label = label.replace(" recipes", "");
//             label = label.replace(" recipe", "");
//             label = label.replace("recipe: ", "");
//             label = label.replace("Recipe: ", "");
//             record.innerHTML += "\xa0\xa0\xa0" + label + "<br>";
//             let calories = data.hits[i].recipe.calories;
//             calories = Math.round(calories);
//             let grams = data.hits[i].recipe.totalWeight;
//             grams = Math.round(grams);
//             record.innerHTML += "\xa0\xa0\xa0• " + grams + " grams, " + calories + " kcals" + "<br>";
//             let type = data.hits[i].recipe.dishType + " for " + data.hits[i].recipe.mealType;
//             record.innerHTML += "\xa0\xa0\xa0• " + type + "<br>";
//             let diet = data.hits[i].recipe.dietLabels; // arr
//             if (diet[0] !== undefined) {
//                 record.innerHTML += "\xa0\xa0\xa0• " + diet[0].toLowerCase()
//             }
//             for (let i = 1; i < 5; i++) {
//                 if (diet[i] !== undefined) {
//                     record.innerHTML += ", " + diet[i].toLowerCase()
//                 }
//             }
//             if (diet[0] !== undefined) {
//                 record.innerHTML += "<br>"
//             }
//             let time = data.hits[i].recipe.totalTime;
//             if (time === 0) {
//                 record.innerHTML += "\xa0\xa0\xa0• ready almost immediately"
//             }
//             else if (time <= 1) {
//                 record.innerHTML += "\xa0\xa0\xa0• ready in " + time + " minute"
//             }
//             else {
//                 record.innerHTML += "\xa0\xa0\xa0• ready in " + time + " minutes"
//             }


//             // // add "add to cart" button
//             // record.innerHTML += "<br>\xa0\xa0\xa0\xa0\xa0\xa0"
//             // var btn = document.createElement("button");  //<button> element
//             // var t = document.createTextNode("Add to Cart"); // Create a text node
//             // btn.appendChild(t);
//             // btn.className = "p-2 rounded-full bg-orange-500 text-black my-2 hover:shadow-lg transition-all duration-150 ease-out" 
//             // btn.onclick = (item) =>  { // add item to cart
//             //     item = [label, data.hits[i].recipe.image, calories]
//             //     // console.log(item)
//             //     dispatch({
//             //         type: actionType.SET_CART_ITEMS,
//             //         cartItems: [...cartItems, item]
//             //     })
//             //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//             // };  
//             // record.appendChild(btn);


//             menu_info.appendChild(record);
//         }

//         // BELOW IS THE INFORMATION FOR API DATA (data.hits); NO NEED TO UNCOMMENT
//         // ---------- - ---------- - ---------- - ----------
//         // data.hits is an array of 10
//         // array[i] is a recipe object that contains:
//         // calories: a number
//         // cusineType: an array, cusineType[0] is the type ("world", etc.)
//         // dietLabels: an array of strings like "Low-Fat", "Low-Sodium"...
//         // label: name of the dish
//         // dishType: an array, dishType[0] is the type ("drink", etc.)
//         // mealType: an array, dishType[0] is the type ("lunch/dinner", etc.)
//         // image: image of the dish (provided as a link)
//         // totalNutrients
//         // totalTime: total cook time as a number (mins)
//         // totalWeight: grams in number
//         // cautions: an array, ("Sulfites", "Wheat", etc.)
//         // healthLabels: array: "Pork-Free", "Kidney-Friendly", etc.
//     }

//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
//             <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6'>
//                 <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
//                     Welcome to {""}
//                     <span className='text-blue-600'>Menumind</span>.
//                 </p>
//                 <p className='text-[1.5rem] font-bold tracking-wide text-headingColor'>
//                     We make dishes from the recipes you choose.
//                 </p>
//             </div>
//             <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
//                 <p className='text-[2rem] font-bold tracking-wide text-headingColor'>
//                     Choose the food you want.
//                 </p>
//                 <p className='text-[1.5rem] font-bold tracking-wide text-headingColor'>
//                     And we will make it into dishes.
//                 </p>
//                 <Link to="/menu" className='text-center bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg'>
//                     View Our Full Food List Now!
//                 </Link>
//             </div>
//             {/* <div className='py-2 col-span-2 text-center'>
//                 Or search for the food that you want to make dishes from...
//             </div> */}
//             {search_show &&
//                 <div className='py-2 col-span-2 text-center'>
//                     <form onSubmit={getSearch} className="search-form">
//                         <input
//                         className="search-bar"
//                         type="text"
//                         value={search}
//                         onChange={updateSearch}
//                         />
//                         <button
//                         onClick={getSearch} 
//                         className='bg-gradient-to-br from-orange-400 to-orange-500 w-auto px-4 py-2 rounded-lg hover:shadow-lg' 
//                         type="button"
//                         >
//                             Search
//                         </button>
//                     </form>
//                 </div>
//             }

//             <div className='py-2 col-span-2 text-center'>
//                 If you don't know what to order, check out our top 10 dishes made from {default_food}!
//             </div>

//             {/* menu grids */}
//             <div className='px-2 py-2 flex items-center' id='info0'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info1'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info2'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info3'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info4'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info5'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info6'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info7'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info8'>
//             </div>
//             <div className='px-2 py-2 flex items-center' id='info9'>
//             </div>
//         </div>
//     )
// }


export default Home