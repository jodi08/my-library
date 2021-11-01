import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'



function Library({items}) {

  return (
    <div>
      {items.map((item) => {
        const {id, title, author, genre} = item
        return <article key={id}>
            <p className={title}>{title} - {author} - {genre}</p>
        </article>
      })}
      
    </div>
  )
}

export default Library
