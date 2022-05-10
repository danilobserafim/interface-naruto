import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.container}>
            <img src="/frontBanner.jpg" alt="" style={{maxHeight: '200px'}}/>

            <ul className={style.contatos}>
                <h4>Entre em contato</h4>
                <li>Danilob.serafim@gmail.com</li>
                <li>(81) 9 8356-7279</li>
                <li>https://www.linkedin.com/danilobserafim</li>
            </ul>
            
        </footer>
    )
}
