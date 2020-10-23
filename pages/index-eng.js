import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar3 from '../components/Navbar3'
import Language1 from '../components/Language1'


export default function Home() {
  return (
    <>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,136&display=swap" rel="stylesheet"></link>
    <title>|Home|</title>
    <meta name="keywords" content="massage, relax, self-care, care, how to do massage, massage Riga, massage Latvia" />
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div className="information">
        <div className="name"><h1>Julija Demchuk</h1></div>
            <div className="line"></div>
            <div className="galochka"></div>
                <div className="info1"><p>Medical education<br/>Great work experience</p></div>
                    <div className="info2">
                      <p>A specialist who will help your body and skin
                    to gain tone, elasticity, as well as
                    a rejuvenating effect.</p>
                    </div>
    </div>

    <div className="button_bar">
    <a href={'/contacts-eng'}><button className="button1"><b className="b1">Contact</b></button></a>
    <a href={'/about-eng'}><button className="button2"><b className="b2">Learn more</b></button></a>
      </div>
    

    <div className="background">
      <div className="Ellipse1"></div>
        <div className="Vector"></div>
          <div className="Ellipse2"></div>
    </div>

    <Navbar3 />
    <Language1 />
    <div className="box">
          <div className="photo1"></div>
            <div className="photo2" ></div> 
    </div>

    
  
    </>
 )
}
 
