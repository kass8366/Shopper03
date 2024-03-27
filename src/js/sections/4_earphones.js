import ElemHTML from "../elem-html.js";
import card__headphons__4 from '../../img/card__headphons__4.png'
import red__star from '../../img/red__star.svg'
import card__headphons__2 from '../../img/card__headphons__2.png'
import card__headphons__5 from '../../img/card__headphons__5.png'


class EarphonesBlock extends ElemHTML{
    elem = document.createElement('section')

    constructor(classes = ''){
        super()
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",
        `<section class="earphones"id="earphones">
        <h2 class="sellers__title sellers__title-margin-bt">Trending Earphones</h2>
        <div class="tab container">
            <div class="tab__btn-wrapper">
                <button class="button-oval active">Earbuds</button>
                <button class="button-oval">Wireless</button>
                <button class="button-oval">Wired</button>
            </div>
            <div class="tab__card-wrapper">
               
                  <div class="tab__card card">
                    <div class="card__product">
                        <img class="card__img" src="${card__headphons__4}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 333</h4>
                            <div class="card__rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <p class="card__rating-count">75 Reviews</p>
                            </div>

                            <p class="card__price">$20</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>
                    <div class="card__discount">
                        <p>Save 60%</p>
                    </div>
                </div> 
                
                  <div class="tab__card card">
                    <div class="card__product card__product_blue">
                        <img class="card__img" src="${card__headphons__2}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat kerz 234</h4>
                            <div class="card__rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <p class="card__rating-count">75 Reviews</>
                            </div>

                            <p class="card__price">$40</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>

                </div>  
                 
                  <div class="tab__card card">
                    <div class="card__product card__product_purp">
                        <img class="card__img" src="${card__headphons__5}" alt="card__headphons">
                        <div class="card__descr">
                            <h4 class="card__text">Boat Rockerz 323</h4>
                            <div class="card__rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <img src="${red__star}" alt="rating">
                                <p class="card__rating-count">75 Reviews</p>
                            </div>

                            <p class="card__price">$30</p>
                        </div>
                    </div>
                    <button class="card__btn button-card">Add to cart</button>
                    <div class="card__discount card__discount_purp">
                        <p>Save 40%</p>
                    </div>
                </div>  
            </div>
        </div>
     `)
    }
    createEarphonesBlock(){
        this.render()
    }
}
 


export default EarphonesBlock 