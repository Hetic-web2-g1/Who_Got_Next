import HeaderJoin from './components/header_join';
import Hero from '../homepage/molecule/hero';
import '../homepage/style/main.css'

export const JoinPage = () => {
    return (
        <>
            <header >
                <HeaderJoin />
            </header>
            
            <main>
                <Hero />
            </main>
        </>
    )
}

export default JoinPage;