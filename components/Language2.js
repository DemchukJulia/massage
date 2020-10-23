import Link from 'next/link'
const Language2=()=>(
   

    <div className="languages">
        <div className="lang"><Link href={'/about-ru'}><a className="ru">RU</a></Link>
            <div className="lang"><Link href={'/about-lv'}><a className="lv">LV</a></Link>
                <div className="lang"><Link href={'/about-eng'}><a className="eng">ENG</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Language2;