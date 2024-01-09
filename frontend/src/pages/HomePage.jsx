// import "../App.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png";
import Search from '../components/Search/Search';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort/Sort';
import Genre from '../components/Genre/Genre';





const BASE_URL = process.env.REACT_APP_BASE_URL;




const HomePage = () => {

  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({sort: "rating", order: "desc",});
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");


  useEffect(()=>{
    const getAllMovies = async()=>{
      try{
        const url = `${BASE_URL}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;

        // console.log("url ->",url);

        const response = await axios.get(url);
        setObj(response.data.data);
        // console.log(response.data.data);
      }
      catch(err){
        console.log(err);
      }
    }

    
    getAllMovies();
  },[sort, filterGenre, page, search]);




  return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-full flex flex-col '>

          {/* header */}
          <div className='w-full bg-black py-2 flex justify-between items-center px-10'>
            <img src={Logo} alt='logo' loading='lazy' className="logo"/>

            {/* search */}
            {/* <Search setSearch={(search)=> setSearch(search)}/> */}
            <Search setSearch={setSearch}/>

          </div>
          

          {/* body container */}
          <div className='w-11/12 mx-auto h-full min-h-[500px] flex flex-col-reverse md:flex-row justify-between mt-5'>
            {/* Filtered DATA */}
            <div className='md:w-[70%] flex flex-col justify-between gap-10'>
              <Table movies={obj.movies? obj.movies: []}/>
          
              <Pagination
                page={page}
					  		limit={obj.limit ? obj.limit : 0}
						  	total={obj.total ? obj.total : 0}
							  setPage={(page) => setPage(page)}
              />
            </div>

            
            {/* filtering UI */}
            <div className='md:w-[25%] h-fit flex flex-col flex-start shadow-lg hover:scale-[1.01] transition-all duration-[0.1s]'>
              <Sort 
                sort={sort}
                setSort={(sort)=> setSort(sort)}
              />
              
              <Genre
                filterGenre={filterGenre}
                genres={obj.genres ? obj.genres : []}
                setFilterGenre={(genre) => setFilterGenre(genre)}
              />

            </div>
          
          </div>


        </div>
      </div>


  )
}

export default HomePage