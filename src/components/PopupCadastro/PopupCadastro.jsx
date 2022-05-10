import React from 'react'
import style from './PopupCadastro.module.css'

export default function PopupCadastro(props) {
    function sub(event, login) {
        login(true)
        event()
    }
    return (
        <div className={style.container}>
            <form onSubmit={() => {sub(props.click, props.login) }}>
            <h2>Entre para abrir o caixa</h2>
                <button onClick={props.click} className={style.close}>X</button>
                <input type="text" placeholder='Login'/>
                <input type="password" placeholder='Senha'/>
                <button className={style.btnSubmit}>Entrar</button>
            </form>
        </div>
    )
}
