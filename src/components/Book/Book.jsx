import React from "react";
import StarIcon from '@mui/icons-material/Star';
import "./Book.css";
import { useNavigate } from "react-router-dom";

const Book = (props) => {
    const navigate = useNavigate();
    const showProductDetails = (id)=>{
        navigate(`/dashboard/${id}`)
    }
    return (
        <div className="book" onClick={()=>showProductDetails(props.book._id)}>
            <div className="book_image">
                <img src="http://books.google.com/books/publisher/content?id=FRboAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721e9hHHSYxAzMYdYLRJGxmJonID57PV2E7v5Mfjd_sw1T4RTm-R0VEWk4iV1Dm3zBx2FZxH9StzNqGsxcdw8Ra6QYt8x0J9lAD5wptSJABBVwjeDXWmiofYsRWgGT2Rqf-WSty&source=gbs_api" alt={props.book.bookName} />
            </div>
            <div className="book_details">
                <h6 className="book_details_heading">{props.book.bookName}</h6>
                <span className="book_details_author">by {props.book.author}</span>
                <div className="book_review">
                   <span className="book_review_value">
                    4.5 <StarIcon sx={{fontSize: 10, color: 'white'}} />
                   </span>
                   <span className="book_review_count">(20)</span>
                </div>
                <div class="book_price">
                    <span className="book_details_price">{`Rs. ${props.book.price}`}</span>
                    <span className="book_details_discount_price">{`Rs. ${props.book.discountPrice}`}</span>
                </div>
            </div>
        </div>
    )

}

export default Book