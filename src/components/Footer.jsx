import '../styles/Footer.css'
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="container">
            <div>
                <Link to="https://www.upwork.com/freelancers/~0117753d45764f61bb">Upwork</Link>
                <span>|</span>
                <Link to="https://www.fiverr.com/joaquinreyno623">Fiverr</Link>
            </div>
            <div>
                <Link to="https://www.github.com/orientalArg" title="find more projects here" >Github<svg height="20" width="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1"data-view-component="true" class="octicon octicon-mark-github"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></Link>
                <span>|</span>
                <Link to="https://www.figma.com/@orientalArg" title="find more designs here" >Figma<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" class="figma-77e5ie" aria-label="Homepage"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"></path><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"></path><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"></path></svg></Link>
            </div>
        </footer>
    )
}

export default Footer