import React from 'react';
import "./Pagination.css"


const Pagination = ({page, total, limit, setPage}) => {
	const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};


  return (
    <div className='w-full h-full flex justify-center items-center mb-5'>
        {
            totalPages > 0 && 
            [...Array(totalPages)].map((ele, index) => (
                <button
                    key={index}
                    onClick={()=> onClick(index)}
                    className={
                        page === index+1 
                            ? 'page_btn active'
                            : 'page_btn'
                    }
                >
                    {index + 1}
                </button>
            ))
        }

    </div>
  )
}

export default Pagination