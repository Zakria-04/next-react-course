import React from "react";
import "../styles/Home.css";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
