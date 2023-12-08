import { Stack } from '../components/Stack.jsx';
import {data} from '../data/templatesData'
import '../styles/Globals.css';
import '../styles/Services.css';

export const Services = () => {
  return (
    <>
    <section className='services'>
      <div className='title'>
        <h4>my services</h4>
        <h1> I can help you with</h1>
        <Stack />
      </div>
      <div className='box'>
        <div className="_container">
          <img className="bckg" src="/html.svg" alt="background"/>
          <div className="_title">
            <h4>Email Templates</h4>
            <p Style="padding: 1em 0px;"><i>Characteristics of these templates:</i></p>
            <ul>
              <li><b>Dark mode </b>compatibility for mailing apps.</li>
              <li><b>Perfectly display </b>on all major email providers.</li>
              <li>Multiple media query breakpoint for <b>better</b> mobile <b>responsiveness</b>.</li>
            </ul>
          </div>
          <div className='template_list'>
            { data.map((template) => 
              <div className='template'>
                <img src={template.image.url} alt={template.image.alt}/>
                <div className="hand">
                  <img src="/hand.png" alt="background"/>
                </div>
                <div className='desc'>
                  <h4>{template.name}</h4>
                  <p>{template.description}</p>
                  <a href={template.image.url} target='_blank' rel='noreferrer' >Fullscreen</a>
                </div>
              </div>
            )}
          </div>
          <div className='repository'>
            <a title="Find the code here" target='_blank' rel='noreferrer' href="https://github.com/orientalArg/Email-Template-" aria-label="Find the code of this templates" >
            <svg height="30" width="30" aria-hidden="true" viewBox="0 0 16 16" version="1.1"data-view-component="true" class="octicon octicon-mark-github"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services
