import React from 'react'

function Search() {
  return (
    <div className='mt-16'>
      <input className='border border-gray-400 w-[35%] p-2 rounded-md' type='text' placeholder='Search products, brands and categories' />
      <button className='border bg-blue-500 p-2 w-[8%] ml-2 rounded-md' type='button'>Search</button>
    </div>
  )
}

export default Search
