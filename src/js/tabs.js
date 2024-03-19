

const cardInfoList = [{
    cardTitle: "JBL",
    reviews: "15",
    price: "$51",
},{
    cardTitle: "Xiaomi",
    reviews: "25",
    price: "$61",
},{
    cardTitle: "Realme",
    reviews: "35",
    price: "$71",
},]


const tabCardWrapper1 = document.querySelector('.main_section02_03').querySelector('.main_section02_03__products')
const tabCardWrapper2 = document.querySelector('.main_section02_03_v2').querySelector('.main_section02_03_v2__products')

const tabButtonCardWrapper1 = document.querySelector('.main_section02_03').querySelector('.main_section02_03__buttons')
const tabButtonCardWrapper2 = document.querySelector('.main_section02_03_v2').querySelector('.main_section02_03_v2__buttons')

tabButtonCardWrapper1.addEventListener("click",(event)=>{
    const target = event.target
    const ovalButtons = tabButtonCardWrapper1.querySelectorAll('button')
    ovalButtons.forEach(btn =>{
        btn.classList.remove('active')
    })
    target.classList.add('active')
    getCards(cardInfoList,tabCardWrapper1)
})

tabButtonCardWrapper2.addEventListener("click",(event)=>{
    const target = event.target
    const ovalButtons = tabButtonCardWrapper2.querySelectorAll('button')
    ovalButtons.forEach(btn =>{
        btn.classList.remove('active')
    })
    target.classList.add('active')
    
    getCards(cardInfoList,tabCardWrapper2)
})

function getCards(cardInfoList, elem){
    const arr = cardInfoList.forEach(cardInfo => {
            const tab = `<div class="main_section02_03__products_block"> 
            <div class="main_section02_03__products_block_rectangle1">
                <img class="main_section02_03__products_block_rectangle1_img" src="../src/img/headphones 01.png" alt="headphones">
                <div class="main_section02_03__products_block_rectangle1_rectangle2">
                    <p class="main_section02_03__products_block__rectangle1_rectangle2_text">${cardInfo.cardTitle}</p>
                    <div class="main_section02_03__products_block_rectangle1_rectangle2_rating">
                        <div class="main_section02_03__products_block_rectangle1_rectangle2_rating_star">
                            <img src="../src/svg/StarRed.svg" alt="star">
                            <img src="../src/svg/StarRed.svg" alt="star">
                            <img src="../src/svg/StarRed.svg" alt="star">
                            <img src="../src/svg/StarRed.svg" alt="star">
                            <img src="../src/svg/StarRed.svg" alt="star">
                        </div>
                        <h class="main_section02_03__products_block_rectangle1_rectangle2_rating_reviews">${cardInfo.reviews}</h>
                    </div>
                    <p class="main_section02_03__products_block_rectangle1_rectangle2_price">${cardInfo.price}</p>
                </div>
            </div>
            <button class="main_section02_03__products_block_button button">Add to cart</button>
            <button class="main_section02_03__products_block_round bgrclr_green">Save 60%</button>
        </div>`
        
        elem.insertAdjacentHTML("beforeend",tab)
        })
        
}
