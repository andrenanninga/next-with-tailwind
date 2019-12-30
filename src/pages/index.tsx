import React from "react";
import { Loader } from "../components/Loader";

const Home = () => (
  <main
    className={`
      min-h-screen flex flex-col items-center justify-center
      bg-white text-black
      md:bg-black md:text-white
    `}
  >
    <h1 className="text-4xl font-serif">Hello world!</h1>

    <Loader />
  </main>
);

export default Home;
