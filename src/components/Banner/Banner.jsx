import React from 'react'
import style from './Banner.module.css'


export default function Banner() {
    return (
        <div className={style.banner}>
            <article>
            <h1>O melhor site para quem quer resolver seus problemas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nesciunt dolor id optio fuga impedit veniam distinctio mollitia officiis eligendi sunt facilis, deserunt, recusandae cumque eaque maxime iusto quas!</p>
            </article>
            <img src="/frontBanner.jpg" alt="" />
        </div>
    )
}
