import scss from './scss/main.scss'
import createMobileMenu from './js/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import tabs from './js/tabs.js'
import { cardInfoTopPicksList, cardInfoWatchesList } from './js/data/tabs-card.js'
import Mobilemenu from './js/sections/0_mobilemenu.js'
import Header from './js/sections/1_header.js'
import ProductsBlock from './js/sections/2_products.js'
import SellersBlock from './js/sections/3_sellers.js'
import EarphonesBlock from './js/sections/4_earphones.js'
import LaunchesBlock from './js/sections/5_launches.js'
import FooterBlock from './js/sections/6_footer.js'

const mobilemenu = new Mobilemenu('mobilemenu')
const header = new Header('header')
const productsBlock = new ProductsBlock('products')
const sellersBlock =new SellersBlock('sellers')
const earphonesBlock =new EarphonesBlock('earphones')
const launchesBlock =new LaunchesBlock('launches')
const footerBlock =new FooterBlock('footer')

mobilemenu.setTemplate()
mobilemenu.createMobilemenu()
header.setTemplate()
header.createHeader()
productsBlock.setTemplate()
productsBlock.createProductsBlock()
sellersBlock.setTemplate()
sellersBlock.createSellersBlock()
earphonesBlock.setTemplate()
earphonesBlock.createEarphonesBlock()
launchesBlock.setTemplate()
launchesBlock.createLaunchesBlock()
footerBlock.setTemplate()
footerBlock.createFooterBlock()

createMobileMenu()
createWelcomePopup()

const tabSellersNames = ['Top Picks', 'Watches']
const tabEarphonesNames = ['Earbuds', 'Wireless', 'Wired']
tabs(tabSellersNames, [cardInfoTopPicksList, cardInfoWatchesList], '.sellers')
tabs(tabEarphonesNames, [cardInfoTopPicksList, cardInfoWatchesList, cardInfoTopPicksList], '.earphones')



 
 
 



// class Card extends ElemHTML {
//     elem = document.createElement('div')

//     constructor(cardTitle,reviews,price,name){
//         super(name)
//         this.price = price
//         this.cardTitle = cardTitle
//         this.reviews = reviews
//     }
//     setTemplate(){
//         this.elem.insertAdjacentHTML('beforeend', `
//         <div class="card__product">
//             <img class="card__img" src="./img/card__headphons.png" alt="card__headphons">
//             <div class="card__descr">
//                 <h4 class="card__text">${this.cardTitle}</h4>
//                 <div class="card__rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <img src="./img/red__star.svg" alt="rating">
//                     <p class="card__rating-count">${this.reviews} Reviews</p>
//                 </div>
    
//                 <p class="card__price">$${this.price}</p>
//             </div>
//         </div>
//         <button class="card__btn button-card">Add to cart</button>
//         <div class="card__discount">
//             <p>Save 60%</p>
//         </div> `)
//     }

//     createCard(container) {
//         this.render(container)
//     }
// }

// const card = new Card()
// card.setTemplate()
// card.setClasses('tab__card')
// card.setClasses('card')
// card.createCard('.header')












