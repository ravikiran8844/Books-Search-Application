import React, { useState } from 'react'
import {v4} from 'uuid'
import BookItem from '../BookItem'
import './index.css'

const BooksSearchApp = () => {
const [searchTerm,setSearchTerm]=useState("")
const [serachResults,setSearchResults]=useState([])

const getSearchResults=async ()=>{
    const response= await fetch(`https://apis.ccbp.in/book-store?title=${searchTerm}`)
    const data= await response.json()
    const updatedData=data.search_results.map(each=>({
        id:v4(),
        author:each.author,
        imageLink:each.imageLink,
        title:each.title
    }))
    setSearchResults(updatedData)
}
console.log(serachResults)

const handleKeyDown=(e)=>{
if(e.key==="Enter"){
    getSearchResults()
}
}

  return (
    <div>
        <header>
            <h1>Book Search App</h1>
            <input onKeyDown={handleKeyDown} onChange={(e)=>setSearchTerm(e.target.value)} type="Search" placeholder='Enter Book Name' />
        </header>
      <main>
        <ul>
            {serachResults.map(each=><BookItem key={each.id} bookDetails={each} />)}
        </ul>
      </main>
    </div>
  )
}

export default BooksSearchApp
