import Evenement from "./molecule/evenement";
import TopNavigation from '@components/TopNavigation/TopNavigation';
import Hero from "./molecule/hero";
import Handisport from "./molecule/handisport";
import Footer from "@components/footer";
import Play from './atomes/play'
import Sports from './atomes/sport';
import "./style/main.css";

export const Homepage = () => {
  return (
    <>
      <header>
        <TopNavigation />
        <div className="play">
          <Play />
        </div>

        <div className="sport">
          <Sports />
        </div>
      </header>
      <main>
        <div className="hero">
          <Hero />
        </div>
        <div className="evenement">
          <Evenement />
        </div>
        <div className="handisport">
          <Handisport />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
