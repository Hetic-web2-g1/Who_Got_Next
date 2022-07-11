import Evenement from './molecule/evenement';
import Header from './molecule/header';
import Hero from './molecule/hero';
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
            </main>
        </>
    )
}

export default Homepage;