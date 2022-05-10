import React, { useState } from 'react'
import style from './Carrinho.module.css'

export default function Carrinho(props) {
    const [produtos, setProdutos] = useState(
        [{
            nome:"Sabão",
            preco: 2.15
        },
        {
            nome:"Feijão",
            preco: 5.60
        }]
    )
    const [total, setTotal] = useState(0)
    
    
    
    return (
        <div className={style.container}>
            <h2>Produtos</h2>
               {produtos.map((prod, index) =>{   
                   
                   return (
                       <div className={style.produto} key={index}>
                            <span>{prod.nome}</span> 
                            <span>R$ {prod.preco}</span>
                        </div>
                   )
                })
                
            }
            <div className={style.total}>
                <span>Total</span>_____<span>R$ {total}</span>
            </div>
            

        </div>
    )
}
