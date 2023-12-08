import '../styles/Globals.css'
import '../styles/Contact.css'
import { useForm, ValidationError } from '@formspree/react';


export const Contact = () => {
    
    const close = function() {
        var contact = document.getElementById("Contact");
        var form = document.getElementById("Form");

        form.style.animationName = "closing";
        form.style.animationDuration = "500ms";
        setTimeout(()=> {
            contact.style.display = "none"
            form.style.animationName = "slide-in";
        }, 500)
    }

    const [state, handleSubmit] = useForm("");
    if (state.succeeded) {
        return <p>This form was build with formspree your message will never be send!</p>;
        
    }

    return (
        <>
        <section className='contact' id='Contact' >
            <div id='Form'>
                <div className="title">
                    <button onClick={close} className='btn_close'>X</button>
                    <h4>Get In Touch with me</h4>
                    <h2>Want to work together?</h2>
                </div>
                <form onSubmit={handleSubmit}>
               <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Type your Email here'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Type your message here'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button className='send' onClick={close} type="submit" disabled={state.submitting}>Send</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Contact
