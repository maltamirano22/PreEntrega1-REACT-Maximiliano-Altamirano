import Cart from "../Cart/Cart"
import ItemListContainer from "../ItemListContainer/ItemListContainer"


function NavBar() {
    return (
        <nav>
            <a href="./index.html"> <img src="./src/assets/logo.PNG" id="logo" /></a>
            <div>
                <ItemListContainer />
                <Cart />
            </div>
        </nav>
        
    )

}
export default NavBar