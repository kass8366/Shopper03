import ElemHTML from "../elem-html.js";
import search from '../../img/search.svg'

class Mobilemenu extends ElemHTML{
    elem = document.createElement('section')

    constructor(classes = ''){
        super()
        this.classes = classes
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",` 
        <section class="mobile-menu hidden">
            <button class="mobile-menu__close">
                x
            </button>
            <label class="search__input__label">
                <button class="search__input__btn">
                    <img src="${search}" alt="search">
                </button>
                <input class="search__input" type="text" placeholder="Search Items">
            </label>
            <ul class="mobile-menu__links">
                <li class="link"> <a class="menu-link" href="#">Features </a></li>
                <li class="link"> <a class="menu-link" href="#">Sellers </a></li>
                <li class="link"> <a class="menu-link" href="#">Earphones </a></li>
                <li class="link"> <a class="menu-link" href="#">Launches </a></li>
            </ul>
        </section>

     `)
    }
    createMobilemenu(){
        this.render()
    }
}
 


export default Mobilemenu 