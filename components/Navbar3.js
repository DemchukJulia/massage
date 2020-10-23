import Link from 'next/link'
const Navbar3=()=>(
   

    <div className="menu">
        <div className="navi"><Link href={'/index-eng'}><a className="nav">Home</a></Link>
            <div className="navi"><Link href={'/about-eng'}><a className="nav">Services</a></Link>
                <div className="navi"><Link href={'/contacts-eng'}><a className="nav">Contacts</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Navbar3;


