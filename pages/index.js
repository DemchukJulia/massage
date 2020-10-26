import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar2'
import Language1 from '../components/Language1'


export default function Home() {
  return (
    <>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,136&display=swap" rel="stylesheet"></link>
    <title>|Sākumlapa|</title>
    <meta name="keywords" content="masāžs, relaksācija, sevis kopšana, aprūpe, masāžs Rīga, masāžs Latvija" />
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div className="information">
        <div className="name"><h1>Julija Demčuk</h1></div>
            <div className="line"></div>
            <div className="galochka"></div>
                <div className="info1"><p>Medicīniskā izglītība<br/>Liela darba pieredze</p></div>
                    <div className="info2">
                      <p>
Speciāliste, kura palīdzēs jūsu ķermeņa ādai
iegādāties tonuss, tvirtums, kā arī 
atjaunojošs efekts.</p>
                    </div>
    </div>

    <div className="button_bar">
    <a href={'/contacts'}><button className="button1"><b className="b1">Sazināties</b></button></a>
    <a href={'/about'}><button className="button2"><b className="b2">
Uzzināt vairāk</b></button></a>
      </div>
    

    <div className="background">
      <div className="Ellipse1"></div>
        <div className="Vector"></div>
          <div className="Ellipse2"></div>
    </div>

    <Navbar2 />
    <Language1 />
    <div className="box">
          <div className="photo1"></div>
            <div className="photo2" ></div> 
    </div>

    
  
    </>
 )
}
 
