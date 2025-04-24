import { useState } from "react";
import jivas from "./assets/jivas.png";
import aloo from "./assets/alooParatha.jpeg";
import egg from "./assets/eggFriedRice.jpeg";
import order from "./assets/orderYoursNow.jpeg";
import menu1 from "./assets/menu1.png";
import menu2 from "./assets/menu2.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(navigator.userAgent);
  const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
console.log('Current mode:', mode);

  return (
    <>
      {/* <div> */}
      <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
        <img src={jivas} className="logo" alt="Jiva's logo" />
      </a>
      {/* </div> */}
      <h3 className="custom-font">Redifining Homemade Taste </h3>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Redifining HomeMade Taste !!! 
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Explore our Dishes , Scroll Down ⤵️
      </p> */}
      <div>
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
          <img src={menu1} className="images" alt="menu1" />
        </a>
      </div>
      <br></br>
      <div>
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
          <img src={menu2} className="images" alt="menu2" />
        </a>
      </div>
      <br></br>
      <div>
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
          <img src={egg} className="images" alt="egg fried rice" />
        </a>
      </div>
      <br></br>
      <div>
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
          <img src={aloo} className="images" alt="paratha" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en" target="_blank">
          <img src={order} className="images" alt="order now" />
        </a>
        {/* <h3>
          We also Serve
          <ul>
            
            <p>Smoothies 🧃 </p>
            <hr></hr>
            <li> Strawberry 🍓</li>
            <li> Chikoo(sapota) </li>
            <li> Banana</li>
            <li> OBD (Oats,Banana,Dates)💪 </li>
          </ul>
          <ul>
            <p> Bowls 🍚 </p>
            <hr></hr>
            <li> Oats with Nuts and Banana </li>
            <li> Healthy Veges 🥗 </li>
            <li> Fruits </li>
            <li> Spouts with paneer</li>
            <li> Chickpea with salad </li>
          </ul>
        </h3> */}
      </div>
      <br></br>
      <div className="insta">
        <a href="https://www.instagram.com/jivas_rasoi/?hl=en">
          Insta Jiva's Rasoi 🫰
        </a>
        <p> Do follow our 💗 Instagram Page for Offers 🎁 and Updates !!!</p>
      </div>
      <a
        href="https://wa.me/919113064924?text=Hi%2C%20I%20want%20to%20order%20from%20Jiva%27s%20Rasoi%21"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://img.icons8.com/color/96/whatsapp--v5.png"
          alt="WhatsApp"
          style={{ width: "96px", height: "96px" }}
        />
      </a>
    </>
  );
}

export default App;
