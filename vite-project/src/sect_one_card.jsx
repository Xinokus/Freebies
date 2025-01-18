import Arrow from './img/arrow.png'

export default function SectOneCard({img, title, desc, x, y}){
    return(
        <>
            <div className="card">
                <div>
                    <div style={{left: x + 'px', top: y + 'px'}}>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>{desc}</p>
                        <a href="">Learn more <img src={Arrow} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}