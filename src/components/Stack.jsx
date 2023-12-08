import '../styles/Stack.css'

export const Stack = ()=> {
  
    return(
        <div className="stack">
            <span><img src="/react.svg" title="React . UI framework" alt="social media svg" /></span>
            <span><img src="/astro.svg" title="Astro . UI framework" alt="social media svg" /></span>
            <span><img src="/html.svg" title="HTML" alt="social media svg" /></span>
            <span><img src="/css.svg" title="CSS" alt="social media svg" /></span>
            <span><img src="/js.svg" title="JavaScript" alt="social media svg" /></span>
            <span><img src="/scss.svg" title="SCSS . Styling framework" alt="social media svg" /></span>
            <span><img src="/tailwind.svg" title="Tailwind . Styling framework" alt="social media svg" /></span>
            {/*<a className='btn_more' href="/experience"><small>More Details <span>&rarr;</span> </small></a>*/}
        </div>
    )
}

export default Stack