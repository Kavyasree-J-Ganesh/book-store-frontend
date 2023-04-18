import { useEffect, useState } from "react";
import { addToCart, getCart, removeFromCart } from "../../services/cartService";
import "./ImageGallery.css"
import { connect } from "react-redux";


const ImageGallery = (props) => {

    const [item,setItem] = useState(null);

    useEffect(()=>{
        getCartItems()
    }, [props.id])

    useEffect(()=>{
      if(props.cart){
        let itemIndex = props.cart.books.findIndex(book=> book.productID === props.id)
        if(itemIndex>=0){
          setItem(props.cart.books[itemIndex])
          console.log(props.cart.books[itemIndex])
        } else {
          setItem(null)
        }
      }
    },[props.cart])

   

    async function getCartItems(){
        try{
            const cart = await getCart();
            props.dispatch({type:"SET_CART", payload: cart.data.data})
        }catch (e){
          console.log(e)
        }
      }

    const addToCartList = async () => {
        try{
            await addToCart(props.id);
            getCartItems();
        }catch (e){
          console.log(e)
        }
    }

    const removeFromCartList = async () => {
        try{
            await removeFromCart(props.id);
            getCartItems();
        }catch (e){
          console.log(e)
        }
    }

    return (
    <div className="imagegallery">
        <div className="thumbnail">
            <img className="thumbnail_item" src="/image.png" alt="thumbnail" />
            <img className="thumbnail_item" src="/image1.png" alt="thumbnail" />
        </div>
        <div>
            <img className="main_image" src="/image2.png" alt="image" />
            <div className="product_buy">
                {!item && <button className="product_buy_addtocart" onClick={addToCartList}>ADD TO BAG</button>}
                {item && (<div className="product_add_or_remove">
                    <button className="product_add" onClick={addToCartList}>+</button>
                    <div className="product_count">{item.quantity}</div>
                    <button className="product_remove" onClick={removeFromCartList}>-</button>
                </div>)}
                <button className="product_buy_wishlist">WISHLIST</button>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
  
    return {
     cart: state.cart.cart,
    };
  };

export default connect(mapStateToProps)(ImageGallery);
