import React from 'react';
import "./Sort.css";



const Sort = ({sort, setSort}) => {


	const onSelectChange = (e) => {
		setSort({ sort: e.target.value, order: sort.order });
	};

	const onArrowChange = () => {
		if (sort.order === "asc") {
			setSort({ sort: sort.sort, order: "desc" });
		} else {
			setSort({ sort: sort.sort, order: "asc" });
		}
	};

  return (
    <div className='w-full h-fit flex items-center gap-3 p-5'>
        <p className='sort_by'>Sort By:</p>
        <select
			onChange={onSelectChange}
			className='select'
			defaultValue={sort.sort}
		>
			<option value="year">Year</option>
			<option value="rating">Rating</option>
			</select>
		<button className='arrow_btn' onClick={onArrowChange}>
			<p className='up_arrow'>&uarr;</p>
			<p className='down_arrow'>&darr;</p>
		</button>
    </div>
  )
}

export default Sort