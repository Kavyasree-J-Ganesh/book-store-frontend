import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"

import "./DashBoard.css"
import { getBooks } from "../../services/BookService";
import Book from "../../components/Book/Book";
import { connect } from "react-redux";




const DashBoard = props => {
    useEffect(()=>{
        getBookList();
    }, [])

    async function getBookList (){
        try{
            const books = await getBooks();
            props.dispatch({type:"SET_BOOKS", payload: books.data.data})
        }catch (e){
          console.log(e)
        }
    }


    return (
            <div className="dashboard">
               <Header  />
                 <header className="dashboard_header">
                  <h1 className="dashboard_header_heading">Books</h1>
                 </header>
               <div className="dashboard_books">
                 {props.books.map(book=> <Book book={book}/>)}
               </div>
            </div>
    )
}

const mapStateToProps = (state) => {
  
  return {
   books: state.book.books,
  };
};

export default connect(mapStateToProps)(DashBoard)