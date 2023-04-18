import React, { useEffect, useState } from "react"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./ProductDetails.css"
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../../services/BookService";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { connect } from "react-redux";
import { getCart } from "../../services/cartService";

const ProductDetails = (props) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    

    useEffect(() => {
        getBooksById(id);
    }, [id])


    const getBooksById = async (id) => {
        try {
            const result = await getBook(id)
            setProduct(result.data.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="prodct" >
            <Header />
            <p style={{ padding: "20px 12% 0px 12%", fontSize: "12px", color: "#0A0102", fontWeight: "600" }}>
                <Link to="/dashboard" className="home_nav">Home</Link>/Book01
            </p>
            {product && (<div className="product_details">
                <div className="product_image">
                    <ImageGallery id={id}  />
                </div>
                <div className="product_description">
                    <div className="product_summary">
                        <h6 className="product_details_heading">{product.bookName}</h6>
                        <span className="product_details_author">by {product.author}</span>
                        <div className="product_review">
                            <span className="product_review_value">
                                4.5 <StarIcon sx={{ fontSize: 10, color: 'white' }} />
                            </span>
                            <span className="product_review_count">(20)</span>
                        </div>
                        <div class="product_price">
                            <span className="product_details_price">{`Rs. ${product.price}`}</span>
                            <span className="product_details_discount_price">{`Rs. ${product.discountPrice}`}</span>
                        </div>
                    </div>
                    <div className="product_info">
                        <span className="product_info_head">Book Detail</span>
                        <p className="product_info_desc">{product.description}</p>
                    </div>
                    <div className="product_feedback">
                        <span className="product_feedback_head">Customer feedback</span>
                        <div className="product_rating">
                            <span className="product_rating_desc">overall rating</span>
                            <div className="product_rating_stars">
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ProductDetails;