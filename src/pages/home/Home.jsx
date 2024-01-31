import React from "react";
import Featured from "../../components/featured/Featured";
// import HomeGuestLove from "../../components/homeGuestLove/HomeGuestLove";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// import PropertyList from "../../components/propertyList/PropertyList";
// import MailList from "../../components/mailList/MailList";
import "./home.css";
// import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
      </div>
      </div>
    </>
  );
};

export default Home;
