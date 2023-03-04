import React from "react";
import elf from './images/elfbar-preview.png'
import elf1 from './images/elfbarpreview1.jpg'
import pink from './images/odnorazovye-podelf-bar-1500-pink-lemonade-81061751468247.jpg'
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Carousel/>
        <Card/>
      </div>
  );
}

export default App;

