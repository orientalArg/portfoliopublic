import '../styles/NoPage.css'
import { Link } from 'react-router-dom';

export const NoPage = ()=> {
    return (
        <section className="nopage">
            <i><h3>htttp ERROR 404</h3></i>
            <h2>...Welp, This is akward.</h2>
            <small>Looks like we couldn't find your page</small>
            <div className='gif'>
                <img src="https://66.media.tumblr.com/b16bdcfb6d5a35ed889811fb9f7ba8a9/tumblr_mlacf24V8d1rfjowdo1_r1_500.gif" alt="" />
            </div>
            <nav>
                <div>
                    <Link to="/" className='title'>&larr; HOME</Link>
                    <Link to="https://journeyblog.vercel.app/" className='title'>BLOG &rarr;</Link>
                    <div>
                        <Link to="/services" className='title'>&larr; Email Templates</Link>
                        <Link to="/experience" className='title'>My experience &rarr;</Link>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NoPage