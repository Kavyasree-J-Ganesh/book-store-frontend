import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";

import "./CartDetails.css";
import { addToCart, getCart, removeFromCart } from "../../services/cartService";

const CartDetails = (props) => {

    async function getCartItems() {
        try {
            const cart = await getCart();
            props.dispatch({ type: "SET_CART", payload: cart.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    const addToCartList = async (id) => {
        try {
            await addToCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    const removeFromCartList = async (id) => {
        try {
            await removeFromCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="prodct" >
            <Header />
            <p style={{ padding: "20px 12% 0px 12%", fontSize: "12px", color: "#0A0102", fontWeight: "600" }}>
                <Link to="/dashboard" className="home_nav">Home</Link>/Cart
            </p>
            {props.cart && <div className="cart">
                {props.cart.books.map(book => (
                    <div className="cart_item">
                        <div className="cart_item_image">
                            <img style={{ width: "4rem" }} src="/image2.png" alt="book" />
                        </div>
                        <div className="cart_item_desc">
                            <h6 className="cart_item_heading">{book.bookName}</h6>
                            <div className="cart_item_author">by {book.author}</div>
                            <div class="cart_item_price">
                                <span className="cart_item_price">{`Rs. ${book.price}`}</span>
                                <span className="cart_item_discount_price">{`Rs. 500`}</span>
                            </div>
                            <div className="cart_add_or_remove">
                                <button className="cart_add" onClick={() => addToCartList(book.productID)}>+</button>
                                <div className="cart_count">{book.quantity}</div>
                                <button className="cart_remove" onClick={() => removeFromCartList(book.productID)}>-</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="cart_place">
                    <button className="cart_place_order">
                        PLACE ORDER
                    </button>
                </div>
            </div>}
        </div>)
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(CartDetails);