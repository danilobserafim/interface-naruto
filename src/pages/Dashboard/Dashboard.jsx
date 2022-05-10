import React from 'react'
import Carrinho from '../../components/Carrinho/Carrinho'
import style from './Dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={style.container}>
            <section className={style.left}>
              <Carrinho />
            </section>
            <section className={style.right}>
                <div className={style.rightTop}>
                    
                </div>
                <div className={style.rightBottom}>BEBIDAS</div>
            </section>
        </div>
    )
}
