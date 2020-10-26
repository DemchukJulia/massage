import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar2'
import Language3 from '../components/Language3'

export default function Contacts() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>|Kontakti|</title>
    <div className="ground">
    <Navbar2 />
    <Language3 />
      <div className="background2"></div>
    </div>
    
    <div className="contacts">
        <div className="loc1"></div>
            <div className="loc2"></div>
                <div className="line2"></div>
      
          <div className="phone_pic"></div>
              <div className="location_pic"></div>
                  <div className="facebook_pic"></div>
        <h1 className="phone">+371-23-277-067</h1>
        <p className="location">Deglava iela 69D
         "Active Kids"</p>
    <p className="facebook">Yuliya Demchuk</p>
    </div>

    </>
  )
}