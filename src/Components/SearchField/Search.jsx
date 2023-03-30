import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Search = () => {

    const [searchValue,setValue] = useState('');
    const [datas,setDatas] = useState([])

    function searchField(event){
        setValue(event.target.value)
    }
    // console.log(searchValue)

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchValue}`)
        .then(res => res.json())
        .then(datas => setDatas(datas.meals))
    },[searchValue,datas])

    function getData(){
        {
            datas.map(data => <Cards meal={data}></Cards>)
        }
        // console.log(datas)
    }
    return (
        <div className='flex gap-4 justify-center mt-7'>
           <input onChange={searchField} type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
           <button onClick={getData} className="btn btn-warning">Search</button>
        </div>
    );
};

export default Search;