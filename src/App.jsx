import "./App.css";
import { Navbar, Footer } from "././components";
import { Aboutus, Header, Menu, Intro, ContactUs } from "././container";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Aboutus />
      <Menu />
      <Intro />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
