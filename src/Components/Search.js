import React, { useState } from 'react'
import "./style.css"
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
const Search = () => {
    const [fdata,setFdata]=useState(Fooddata);
    // console.log(fdata)

    const zomatologo="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  return (
<>
    <div className='container d-flex justify-content-between align-items-center'>
    <img src={zomatologo} style={{width:"8rem",position:"relative",left:"2%",cursor:"pointer"}}alt=''/>
    </div>

  <Form className='d-flex justify-content-center align-items-center mt-3'> 
<Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
  <Form.Control type="text" placeholder="Search Resaurant" />
</Form.Group>
<button className='btn text-light col-lg-1'style={{background:"#ed4c67"}}>Submit</button>
</Form> 
<section className='iteam_section mt-4 container'>
<h2 className='px-4'style={{fontWeight:500, color:"rgb(237, 76, 103)",wordSpacing:"5px"}}>Resaurants Open Now</h2>

<div className='row mt-2 d-flex justify-content-around align-items-center'>
<Cards data={fdata}/>
</div>
</section>
</>
  )
}

export default Search;