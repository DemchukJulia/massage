import Link from 'next/link'
const Language1=()=>(
   

    <div className="languages">
        <div className="lang"><Link href={'/index-ru'}><a className="ru">RU</a></Link>
            <div className="lang"><Link href={'/index-lv'}><a className="lv">LV</a></Link>
                <div className="lang"><Link href={'/index-eng'}><a className="eng">ENG</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);

export default Language1;