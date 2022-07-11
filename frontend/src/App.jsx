import Navbar from "./components/sidebar/Navbar";
import Favsport from "./components/favsport"; 
import {LandingPage} from "./pages/landingPage";
import Mysport from "./components/mysports";


export default function App() {
  return (
    <main>
      <Navbar/>
      <LandingPage/>
      {/* <Mysport/>
      <Favsport/> */}
      
    </main>
  )
}
