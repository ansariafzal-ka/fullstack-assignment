import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="w-full h-screen">
      <NavBar />
      <Hero onSearch={setSearchQuery} />
      <Content searchQuery={searchQuery} />
      <Footer />
    </main>
  );
};

export default App;
