import "../styles/Header.css"
import {open} from '../pages/Home'
import {Link} from 'react-router-dom'

export const Header = () => {
   
    return (
        <header className="container" Style="border:none;">
            <div className="logo"><Link to="./"><img src="/@orientalArg.png " alt="logo bridge in front of the sun" /></Link></div>
            <nav>
                <Link to="/"><img src="/home.svg" alt="house"/>Home</Link>
                <Link to="https://journeyblog.vercel.app/"><img src="/services.svg" alt="tuercas" />My blog</Link>
            </nav>
            <div>
                <button onClick={open}>Let's talk</button> 
            </div>
        </header>
    )
}

export default Header