import React, { useEffect, useRef, useState } from "react";
import imgNaruto from "./assets/naruto.png";
import imgPain from "./assets/Pain.png";
import imgMadara from "./assets/madara.png";

import style from "./app.module.css";
/*import  Dashboard  from "./pages/Dashboard/Dashboard";
import  Inicio  from "./pages/Inicio/Inicio";
import Footer from "./components/Footer/Footer"
import PopupCadastro from "./components/PopupCadastro/PopupCadastro";*/
import Button from "./components/Button/Button";
import { getQuotes } from "./services";
import jutsu from "./assets/jutsu.mp3"

const audio = new Audio(jutsu)

function App() {
  const [imgLateral, setImgLateral] = useState();
  const [quote, setQuote] = useState({quote: "", speaker: ''});
  const [index, setIndex] = useState( Math.floor(Math.random() * 12));

  useEffect(() => {
    onUpdate()
  }, []);
  
  const onUpdate = async () => {

    audio.play()
    let quote = await getQuotes()

    let random = Math.floor(Math.random() * quote.response.length)
    setIndex(index === random ? random + 1 : random)
    
    setTimeout(() => {
      setQuote({
        quote: quote.response[index].quote,
        speaker: quote.response[index].speaker}
        )
        switch (quote.response[index].speaker) {
          case "Madara Uchiha":
            setImgLateral(imgMadara)
            break;
          case "Pain":
            setImgLateral(imgPain)
            break;
          case "Naruto Uzumaki":
            setImgLateral(imgNaruto)
            break;
        
          default:
            break;
        }
    }, 500);
  }

  return(
  <div className={style.container}>
    <article>
      <p Role="p">{quote.quote}
      <span>{quote.speaker}</span>
      </p>
      <Button value="Quot no Jutsu" type="primary" click={onUpdate}/>
    </article>
    <img src={imgLateral} alt={`imagem do ${quote.speaker}`} />
  </div>) 
  
  
  /*
  const [popCadastrar, setPopCadastrar] = useState(false)
  const [login, setLogin] = useState(false)
  const [page, setPage] = useState(<Inicio />)
  return (
    <>
    
       <header className={style.header}>
          <h1>Caixa</h1>
          
          <ul className={style.nav}>
              <img src="burguerMenu.svg" alt="" className={style.menu} />
              <li onClick={() => setPage(<Inicio />)}>Inicio</li>
              {login && <li onClick={() => setPage(<Dashboard />)}>Dashboard</li>}
              {!login && <button onClick={()=> setPopCadastrar(true)}>Login</button>}
          </ul>
      </header>
      <div className={style.main}>
        {page}
      
      </div>
      <Footer />
      {popCadastrar ? <PopupCadastro click={() => setPopCadastrar(false)} login={() => setLogin(true)}/>:''}
    </>
  );*/
}

export default App;
