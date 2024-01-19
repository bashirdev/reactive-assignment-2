import './App.css';
import BookFinderSection from "./components/BookFinderSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
       <BookFinderSection />
      <Footer />
    </>
  );
};

export default App;