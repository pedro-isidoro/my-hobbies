import React from "react";
import { ThemeProvider } from "../../contexts/Theme-context";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header"
import HomePage from "../home-page/homePage";
import { Footer } from "../footer/Footer";
import WhatsApp from "../floating-whatsapp/floating-whatsapp";


function App() {

  return (
    <ThemeProvider>
      <Header />
      <Outlet>
        <HomePage />
      </Outlet>
      <Footer />
      <WhatsApp />
    </ThemeProvider>
  );
}

export default App
