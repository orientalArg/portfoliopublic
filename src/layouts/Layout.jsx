import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Layout() {
    return(
        <main>
            <Header />
                <Outlet />
                <Contact />
            <Footer />
        </main>
    )
}
