import Link from 'next/link'
const Navbar2=()=>(
   

    <div className="menu">
        <div className="navi"><Link href={'/index-lv'}><a className="nav">Sākumlapa</a></Link>
            <div className="navi"><Link href={'/about-lv'}><a className="nav">Pakalpojumi</a></Link>
                <div className="navi"><Link href={'/contacts-lv'}><a className="nav">Kontakti</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Navbar2;


