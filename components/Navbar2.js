import Link from 'next/link'
const Navbar2=()=>(
   

    <div className="menu">
        <div className="navi"><Link href={'/'}><a className="nav">Sākumlapa</a></Link>
            <div className="navi"><Link href={'/about'}><a className="nav">Pakalpojumi</a></Link>
                <div className="navi"><Link href={'/contacts'}><a className="nav">Kontakti</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Navbar2;


