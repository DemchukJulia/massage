import Link from 'next/link'
const Navbar1=()=>(
   

    <div className="menu">
        <div className="navi"><Link href={'/index-ru'}><a className="nav">Главная</a></Link>
            <div className="navi"><Link href={'/about-ru'}><a className="nav">Услуги</a></Link>
                <div className="navi"><Link href={'/contacts-ru'}><a className="nav">Контакты</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Navbar1;


