import '../styles/Experience.css'
import { useState } from 'react';
import {data} from '../data/stackData.js'; 

export const Experience = () => {
    const [state, setState] = useState({
        data: []
    })
    function showVisor(a){
        if(a.length !== 0){
            return <div className="view" title={a.name+' . '+a.description}>
                        <div className='_title container'>
                            <img src={a.image.url} alt={a.image.alt}/>
                            <div className='desc'>
                                <h3>{a.name}</h3>
                                <p><small>{a.description}</small></p>
                            </div>
                        </div>
                        <p>{a.story}</p>
                    </div>
        } else {return ''}
    }
    return(
        <>
        <div Style="text-align:center;margin:1em 0;">
            <h3>Welcome to my experience page. This isn't part of the portfolio.</h3>
            <p>Here I kept on live some "React state" functionality for showing</p>
        </div>
        <div className='wrapper'>
            <ul className="list">
                {data.map((a) =>
                    <li title={a.name+' . '+a.description} onClick={e => {setState({ data: a})}}>
                        <div>
                            <img src={a.image.url} alt={a.image.alt}/>
                        </div>
                        <div className='desc'>
                            <b>{a.name}</b>
                            <p><small>{a.description}</small></p>
                            <p>{a.experience}</p>
                        </div>
                    </li>)}
            </ul>
            {
                showVisor(state.data)
            }
        </div>
        </>
    )
}


export default Experience