import React from 'react';



const Search = ({setSearch}) => {
  return (
    <input
    	type="text"
		placeholder="Search"
		// onChange={({ currentTarget: input }) => setSearch(input.value)}
		onChange={(e) => setSearch(e.currentTarget.value)}
		className='w-[200px] md:w-[400px] h-[35px] rounded-lg outline-none px-5'
    />
  )
}

export default Search