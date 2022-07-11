import Evenement from './molecule/evenement';
import Header from './molecule/header';
import Hero from './molecule/hero';
import Handisport from './molecule/handisport'
import Footer from '../../components/footer'
import './style/main.css'

export const Homepage = () => {
    return (
        <>
            <header >
                <Header />
            </header>
            <main>
                <div className='hero'>
                    <Hero />
                </div>
                <div className='evenement'>
                    <Evenement />
                </div>
                <div className='handisport'>
                    <Handisport />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Homepage;