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
                <Hero />
            </main>
        </>
    )
}

export default Homepage;