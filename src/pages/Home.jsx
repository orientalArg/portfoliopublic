import {Link} from 'react-router-dom'
import {data} from '../data/projectData.js'; 
import { Stack } from '../components/Stack.jsx';
import '../styles/Globals.css';
import '../styles/Home.css';

export const open = function() {
    var contact = document.getElementById("Contact");
    return contact.style.display = "flex"
}


export const Home = ()=> {
    function show(project) {
        if(project.design.url.length === 0){
            return ''
        } else {
            return <Link to={project.design.url} title="Find the design here" >
                    <img src={project.design.img} alt={project.design.img} />
                   </Link>
        }
    }
    return(
        <>
        <section className='hero'>
            <div className='container'>
                <div className='platforms'>
                    <a title='Reviews' className="icon" href='https://www.upwork.com/freelancers/~0117753d45764f61bb' rel="noreferrer" target="_blank">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADfUlEQVR4Ab1WA3QkQRCtsx0nZ9u2bdu2bfvpbMY527Zt23fRsq5/0G+zM8ki+PtqVeg/XdXVRdYi83ZK7+BNHR28aJ2Qq0K+CtGGCb7jP09aKz47OOyhdBRXEAHzZfGkDeIzSAhbKbBd77iD8pK98PChVCLIEiE6BLVTsDuLcmyilGQLwNzRi+4hSFyIiHXJYRu5Wre4J5WMyCnHqXjTO6edVMzikysWj2MSjj7kQmpAnoTRbRjGs1xHfalV+xIYJJDMVBw1We0JI/+ipALnHIoElpWyw5k2mSJ73Lj2kdJc+WAhhZObT3LopNQ8UlJhg/8n3xzBs+6M594X2nFu/4zREQgM65hor6aKxfdnMvDg1x2FU8l9OdgcZfbnDtMV2O3ERz/sV+j/aH/zyKt91fuDJ7Un9HZ7CATq/jEw4cYQzu6Xlu/8vMGAwWjgq98v8uEPe/l76FdpP/b6QDUSa0Dgqj0EfF9vZ+Duz5s87+4UBozi1eFMI2mfyz8Dn/18QhLOt8tB0SFB4Js9BDqdbRL2tMAvzU8GAt54KnxK7cspfYZd6WXemL6AgMYeAijAfe/82BTtzjRQzfXH4PcMLH84z1wXqiAw+84EBj4Hf1StcAAouz9PWAFqDKFy+/MGZFa5iBLxb+0vBhbdn6EkYJYCbK0MWOlgwSgOU26NlPl09UkW9t+m56sY0Bv13PRENQWB1qfqmKZNNQVXzc/6h6B3DNz4cQU5xFMguKzq7S/WS/utL9bKBYL1QSAZdvZdvJNym9N15fY///sEpJVFiDHKnHX7Mw1Za9DKwCH6YPkd5Arudpa2V79dYOCv9g+bIlQfIr8jBbWOlFKrj9WEGU6tcJqdqM63f16XQUAIRVdsr4epnczvxJvDeNDlrvz4zwPpozFohI8/6iW6QaUtOfpQWrTF6Ho2nrbCgfxoNgodyEQAuZb/oxjh4+GbKqa7IBBrE4AB0p4Lpe3p+pJA4T2uNvki9eaTkNZWAlNvjZI5ttFX47yDcpnPBItsJTDn7qSwOvF6tcXWIXW+6kiGYxHPMwBuwIt5DlIKUgOmFGH0Nh4JfMjiQ+4UEzA6Y3qNh8XfOvtQUbIGLj7kKBzOxOW2yxnQWiBPmF5lj7BPNGLxeTLntkPWxUobicB2jTxqcQF0Lcxw6N9CLuMmwxNC8D3sP09a5ehN7WBLVuI/Nu/KoIOUopQAAAAASUVORK5CYII=" alt="upwork logo"/>
                        <span>Upwork</span>
                    </a>
                    <a title='Designs' className="icon" href='https://figma.com/@orientalArg' rel="noreferrer" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt=""/>
                        <span>Figma</span>
                    </a>
                    <a title='Code' className="icon" href='https://www.github.com/orientalArg' rel="noreferrer" target="_blank">
                        <svg height="35" width="35" aria-hidden="true" viewBox="0 0 16 16" version="1.1"data-view-component="true" class="octicon octicon-mark-github"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                        <span>Github</span>
                    </a>
                        <ul>
                        <details>
                            <summary>Download CV</summary>
                            <li>
                                <a href="/CV/CV%20EN.pdf" download>English</a>
                            </li>
                            <li>
                                <a href="/CV/CV%20ES.pdf" download>Español</a>
                            </li>
                        </details>
                        </ul>
                    <img alt="github profile" className='me' src="https://avatars.githubusercontent.com/u/38798553?v=4" />
                </div>
                <div Style="margin: 3em 0;">
                    <h1>Joaquín Reynoso</h1>
                    <small>JavaScript Frameworks Developer</small>
                </div>
                <Stack />
            </div>
        </section>
        <section className="about container">
            <h2>Let me Introduce myself</h2>
            <p>I've been working as a freelance developer for the past two years plus.
            I am fluent in Javascript, whenever possible, I like developing products with Modern Javascript Frameworks like React.js and Astro.<br/>
            Want to talk? send me an email.</p>
            <div>
                <Link to="mailto:orientalArg@outlook.com"><img src="https://camo.githubusercontent.com/52ec1ded94c13652dd2c0154fd9926b65d76542a229d072e36c0c91320032117/68747470733a2f2f74682e62696e672e636f6d2f74683f69643d4f444c532e38663063653064382d323434392d343538632d626634312d61383533326366666436633526773d333226683d333226716c743d39322670636c3d666666666661266f3d36267069643d312e32" alt="outlook logo" /></Link>
                <button onClick={open}>Let's talk</button>
            </div>
        </section>
        <section className="exp container">
            <div><h2>100+</h2><p>Projects completed</p></div>
            <div><h2>2+</h2><p>Years of experience</p></div>
            <div><h2>2.300+</h2><p>Hours of coding</p></div>
        </section>
        <section className="projects container">
            <div className="_title">
                <h2>Projects</h2>
                <small><a href='/services'><span>Looking for</span> Email Templates<span>?</span> &#129125;</a></small>
            </div>
            <div className='slider'>
                {data.map((project, index) => 
                <div className='card' key={index} >
                    <div Style="position:relative;">
                        <div className='stack-bar'>
                            {project.stack.map((r, index) => 
                                <img src={r.url} alt={r.alt} title={r.title} key={index} />
                            )}
                        </div>
                        <Link to={project.url}>
                            <img className="thumbnail" src={project.image.url} alt={project.image.alt}/>
                        </Link>
                    </div>
                    <div className='desc'>
                        <Link className="title" to={project.url}>{project.name}</Link>
                        <p>{project.description}</p>
                        <div className="links" >
                            <Link to={project.repository} title="Find the code here">
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                            </Link>
                            {
                                show(project)
                            }
                        </div>
                    </div>
                </div> )
                }
            </div>
        </section>
        </>
    )
}

export default Home
