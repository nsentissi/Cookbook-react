import EmblaCarousel from "./components/EmblaCarousel";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Maindishes from "./components/main-dishes";
import Cocktails from "./components/Cocktails";
import Desserts from "./components/desserts";
import { Routes, Route, Link } from "react-router-dom";

const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <>
      <Navbar className="nav" />

      {/* <div className="main">
        <Maindishes />
        <Cocktails />
        <Desserts />
      </div> */}

      <Routes>
        <Route
          path="/"
          element={
            <main className="sandbox">
              <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </section>
            </main>
          }
        />
        <Route path="useContentfulMain" element={<Maindishes />} />
        <Route path="useContentfulDesserts" element={<Desserts />} />
        <Route path="useContentfulCocktails" element={<Cocktails />} />
      </Routes>
    </>
  );
}

export default App;
