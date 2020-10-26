import Link from 'next/link'
const Language3=()=>(
   

    <div className="languages">
        <div className="lang"><Link href={'/contacts-ru'}><a className="ru">RU</a></Link>
            <div className="lang"><Link href={'/contacts'}><a className="lv">LV</a></Link>
                <div className="lang"><Link href={'/contacts-eng'}><a className="eng">ENG</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Language3;