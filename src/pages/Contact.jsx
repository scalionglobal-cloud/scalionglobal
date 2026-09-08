import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />
        <ContactForm />
      
      </main>

      <Footer />
    </>
  );
};

export default Contact;