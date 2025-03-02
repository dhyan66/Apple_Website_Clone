import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import VideoCarousel from "./components/VideoCarousel";

const App = () => {
  

  return (
    <main className ="bg-black">
      <Navbar></Navbar>
      <Hero></Hero>
      <VideoCarousel></VideoCarousel>
    </main>
  )
}

export default App
