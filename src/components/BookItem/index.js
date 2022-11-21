import React from 'react'
import './index.css'

const BookItem = (props) => {
    const {bookDetails}=props
    const {author,imageLink,title}=bookDetails
  return (
   <li>
    <img src={imageLink} alt="title" />
    <h3>Title: {title}</h3>
    <p>Author: {author}</p>
   </li>)
}

export default BookItem
