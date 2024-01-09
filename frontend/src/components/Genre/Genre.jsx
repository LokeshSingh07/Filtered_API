import React from 'react';





const Genre = ({genres, filterGenre, setFilterGenre}) => {
  

    const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setFilterGenre(state);		
			// console.log(state);
		} 
		else {
			const state = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(state);		
			// console.log(state);
		}
	};





    return (
		<div className='w-full h-fit shadow-lg p-5'>
			<h1 className='text-md font-semibold'>Filter By Genre:</h1>
			<div className=' flex flex-row flex-wrap'>
				{genres.map((genre) => (
					<div className='flex items-center mt-2 min-w-[100px]' key={genre}>
						<input
							type="checkbox"
							value={genre}
							onChange={onChange}
							className=''
						/>
						<p className='ml-[5px]'>{genre}</p>
					</div>
				))}
			</div>
		</div>
  )
}

export default Genre;