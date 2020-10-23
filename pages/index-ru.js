import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar1 from '../components/Navbar1'
import Language1 from '../components/Language1'


export default function Home() {
  return (
    <>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,136&display=swap" rel="stylesheet"></link>
    <title>|Главная|</title>
    <meta name="keywords" content="массаж, релакс, уход за собой, уход, как делать массаж, массаж Рига, массаж Латвия" />
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div className="information">
        <div className="name"><h1>Юлия Демчук</h1></div>
            <div className="line"></div>
            <div className="galochka"></div>
                <div className="info1"><p>Медицинское образование<br/>Многолетний опыт работы</p></div>
                    <div className="info2">
                      <p>Специалист, который поможет вашему телу и коже
приобрести тонус, упругость, а так же 
омолаживающий эффект.</p>
                    </div>
    </div>

    <div className="button_bar">
    <a href={'/contacts-ru'}><button className="button1"><b className="b1">Связаться</b></button></a>
    <a href={'/about-ru'}><button className="button2"><b className="b2">Узнать подробнее</b></button></a>
      </div>
    

    <div className="background">
      <div className="Ellipse1"></div>
        <div className="Vector"></div>
          <div className="Ellipse2"></div>
    </div>

    <Navbar1 />
    <Language1 />
    <div className="box">
          <div className="photo1"></div>
            <div className="photo2" ></div> 
    </div>

    
  
    </>
 )
}
 
