
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)
  const handleBookmarkAdd = (blog) =>{
    // console.log('bookmark added')
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id,time) =>{
    const newReadingTime=readingTime + time
    setReadingTime(newReadingTime);
    //remove mark as read
    // console.log('remove bookmark',id)
    const remainingBookmarks=bookmarks.filter(bookmark => bookmark.id !== id)
   setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      
      <Header></Header>
     <div className='flex'>
     <Blogs handleBookmarkAdd={handleBookmarkAdd} handleReadingTime={handleReadingTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
   </div>
  )
}

export default App
