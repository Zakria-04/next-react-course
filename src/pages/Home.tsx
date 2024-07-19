import React from "react";
import "../styles/Home.css";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import HomeBody from "@/components/HomeBody";

function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <HomeBody />
      <Footer />
    </>
  );
}

export default Home;
