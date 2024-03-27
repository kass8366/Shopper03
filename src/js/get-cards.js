
import card__headphons from '../img/card__headphons.png'
import red__star from '../img/red__star.svg'


export default function getCards(cardInfoList , elem){
     
    elem.innerHTML=''
    const arr = cardInfoList.map(cardInfo => {
        const tab = `<div class="tab__card card">
                <div class="card__product">
                    <img class="card__img" src="${card__headphons}" alt="card__headphons">
                    <div class="card__descr">
                        <h4 class="card__text">${cardInfo.cardTitle}</h4>
                        <div class="card__rating">
                            <img src="${red__star}" alt="rating">
                            <img src="${red__star}" alt="rating">
                            <img src="${red__star}" alt="rating">
                            <img src="${red__star}" alt="rating">
                            <img src="${red__star}" alt="rating">
                            <p class="card__rating-count">${cardInfo.reviews} Reviews</p>
                        </div>

                        <p class="card__price">$${cardInfo.price}</p>
                    </div>
                </div>
                <button class="card__btn button-card">Add to cart</button>
                <div class="card__discount">
                    <p>Save 60%</p>
                </div>
            </div>`
         return tab
    })
    
    elem.insertAdjacentHTML("beforeend",arr.join(' '))
}