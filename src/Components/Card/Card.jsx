import Star from './assets/Star 1.svg'
import Icon2 from './assets/kepka.svg'
import Icon3 from './assets/tools.svg'
import { Data } from "../Data/data.js";
import likeImg from '/src/Components/Card/assets/like.svg';

export function Card(){
    return(
        <>
            {Data.map(item => (<CardList  {...item}/>))}
        </>
    )
}
export function CardList({img, ratingNum ,Lang, title, user, oldPrice, newPrice, icon1, text1, text2, text3 }){
    return(
        <div className="box">
            <div className="box-img">
                <img src={img} alt="img" />
                <div className='rating'>
                    <img src={Star} alt="star" />
                    <p>{ratingNum}</p>
                </div>
                <div className='lang'>
                    <p>{Lang}</p>
                </div>
            </div>

            <div className="box-title">
                <h4>{title}</h4>
                <p>{user}</p>
            </div>

            <div className="box-price">
                    <p>{oldPrice}</p>
                    <h5>{newPrice}</h5> 
            </div>

            <div className="box-icons">
                <div className='icon1'><img src={icon1} alt="icon" /><p>{text1}</p></div>
                <div className='divider'></div>
                <div className='icon2'><img src={Icon2} alt="icon" /><p>{text2}</p></div>
                <div className='divider'></div>
                <div className='icon3'><img src={Icon3} alt="icon" /><p>{text3}</p></div>
            </div>
            <button className='like'>
                <img src={likeImg} alt="like" />
            </button>
        </div>
    )
}