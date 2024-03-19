
function getCards(cardInfoList, elem){
    const arr = cardInfoList.forEach(cardInfo => {
            const tab = `<div class="main_section02_03__products_block"> 
            <div class="main_section02_03__products_block_rectangle1">
                <img class="main_section02_03__products_block_rectangle1_img" src="./img/headphones 01.png" alt="headphones">
                <div class="main_section02_03__products_block_rectangle1_rectangle2">
                    <p class="main_section02_03__products_block__rectangle1_rectangle2_text">${cardInfo.cardTitle}</p>
                    <div class="main_section02_03__products_block_rectangle1_rectangle2_rating">
                        <div class="main_section02_03__products_block_rectangle1_rectangle2_rating_star">
                            <img src="./svg/StarRed.svg" alt="star">
                            <img src="./svg/StarRed.svg" alt="star">
                            <img src="./svg/StarRed.svg" alt="star">
                            <img src="./svg/StarRed.svg" alt="star">
                            <img src="./svg/StarRed.svg" alt="star">
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