import { useState,useEffect } from "react";
import jivas from "./assets/jivas.png";
import aloo from "./assets/alooParatha.jpeg";
import egg from "./assets/eggFriedRice.jpeg";
import order from "./assets/orderYoursNow.jpeg";
import menu1 from "./assets/menu1.jpeg";
import menu2 from "./assets/menu2.jpeg";
import Smoothies from "./assets/Smoothie.jpeg";
import ImageCarousel from "./Carousel.jsx";
import ParathaCarousel from "./paratha.jsx";
import CakesCarousel from "./cakes.jsx";
import "./App.css";

function App() {

  const [locationLink, setLocationLink] = useState("");

  async function getUserLocationLink() {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by your browser");
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    return `https://www.google.com/maps?q=${lat},${lon}`;
  }

  useEffect(() => {
    async function fetchLocation() {
      try {
        const link = await getUserLocationLink();
        setLocationLink(link);
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    }

    fetchLocation();
  }, []);

  // ✅ wplink now uses the actual resolved locationLink
  const wplink = `https://wa.me/919113064924?text=Hi%2C%20I%20want%20to%20order%20from%20Jiva%27s%20Rasoi%21%20Here's%20my%20location%20${encodeURIComponent(locationLink)}`;

  return (
    <>
      {/* <div> */}
      <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
        <img src={jivas} className="logo" alt="Jiva's logo" />
      </a>
      {console.log(async () => await getUserLocationLink())}
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
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
          <img src={menu1} className="images" alt="menu1" />
        </a>
      </div>
      <br></br>
      <div>
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
          <img src={menu2} className="images" alt="menu2" />
        </a>
      </div>
      <br></br>
      <div>
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
          <img src={egg} className="images" alt="egg fried rice" />
        </a>
      </div>
      <br></br>
      
      {/* <div>
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
          <img src={aloo} className="images" alt="paratha" />
        </a>
      </div> */}
      <br></br>
      <h2> The OG Smoothie </h2>
      <h5>🥤 OBD Smoothie
      A creamy, no-sugar power smoothie with oats 🌾, dates 🌰, banana 🍌, dry fruits 🥜 & milk 🥛 — natural energy in every sip! 💪✨</h5>
      <div>
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
          <img src={Smoothies} className="images" alt="Smoothies" />
        </a>
      </div>
      <br></br>
      <h2>Paratha's you won't miss </h2>
      <h4> swipe left for more ... </h4>
      <ParathaCarousel/>
      <br></br>
      <h3> Want Protein, we have it ⤵️ </h3>
      <h4> swipe left for more ... </h4>
      
         <ImageCarousel/>
      <br></br>
      <br></br>
      
      <h2> Sweet Cravings ??? </h2>
      <h4> swipe left for more ... </h4>
      
         <CakesCarousel/>
      
      <div>
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en" target="_blank">
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
        <a href="https://www.instagram.com/jivas_homemade_goodness/?hl=en">
          Insta Jiva's Rasoi 🫰
        </a>
        <p> Do follow our 💗 Instagram Page for Offers 🎁 and Updates !!!</p>
      </div>
      
      <a
        href={wplink}
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
