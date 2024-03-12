import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import TaskBoard from "./TaskBoard/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center relative">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
