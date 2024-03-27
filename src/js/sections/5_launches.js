import ElemHTML from "../elem-html.js";
import headphones__1 from '../../img/headphones__1.png'
import headphones__2 from '../../img/headphones__2.png'

class LaunchesBlock extends ElemHTML{
    elem = document.createElement('section')

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`  
        <section class="launches" id="launches">
        <h2 class="launches__title launches__title-margin-bt">New Launches</h2>
        <div class="launches__wrapper bg-primary-products">
            <!-- левый блок -->
            <div class="launches__images">
                <img src="${headphones__1}" alt="headphones">
                <img class="down" src="${headphones__2}" alt="headphones">
            </div>
            <!-- правый блок -->
            <div class="launches-descr launches-descr-normal">
                <div class="launches-descr__title">Airdrop 500 Anc</div>
                <div class="launches-descr__description">Lorem ipsum is a placeholder text commonly used to demonstrate
                    the
                    visual form of a launches ... Read More</div>
                <div class="price price_launchess">
                    <p class="price__text">Price :</dp>
                    <p class="price__number">$45.99</>
                </div>
                <div class="launches__colors">
                    <div class="color black"></div>
                    <div class="color yellow"></div>
                    <div class="color blue"></div>
                </div>
                <div class="launches__button-container">
                    <button class="button-card  ">Add to cart</button>
                    <button class="button-outline  ">Explore More</button>
                </div>
            </div>
        </div>
    </section>
     `)
    }
    createLaunchesBlock(){
        this.render()
    }
}
 


export default LaunchesBlock