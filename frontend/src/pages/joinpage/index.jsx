import HeaderJoin from './components/header_join';
import Hero from '../homepage/molecule/hero';
import '../homepage/style/main.css'
import TopNavigation from '@components/TopNavigation/TopNavigation';


export const JoinPage = () => {
    return (
        <>
            <header >
                <TopNavigation />
                <HeaderJoin />
            </header>
            
            <main>
                <Hero />
            </main>
        </>
    )
}

export default JoinPage;