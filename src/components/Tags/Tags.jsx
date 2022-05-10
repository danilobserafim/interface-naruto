import React from 'react'
import style from './Tags.module.css'

export default function Tags() {
    return (
        <div className={style.tags}>
            <div className={style.tag} id='complementar'>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, magnam debitis accusantium dolorum odio accusamus officiis ut vero voluptatibus dolor.</p>
                <a href="/" rel="noopener noreferrer">Saiba mais</a>
            </div>
            <div className={style.tag}>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, magnam debitis accusantium dolorum odio accusamus officiis ut vero voluptatibus dolor.</p>
                <a href="/" rel="noopener noreferrer">Saiba mais</a>
            </div>
            <div className={style.tag}>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, magnam debitis accusantium dolorum odio accusamus officiis ut vero voluptatibus dolor.</p>
                <a href="/" rel="noopener noreferrer">Saiba mais</a>
            </div>
            
        </div>
    )
}
