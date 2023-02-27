import "../css/cardStyles.css"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from "../components/Navbar";
const Flipkart = () => {
  const [resData, setResData] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://scraper-app-org.onrender.com/api/filpkart/get");
      console.log(response.data.data);
      setResData(response.data.data);
    }
    getData();
  }, [])
 
  return (
    <>
    <Navbar/>
    <h1 style={{color:"white",marginLeft:"45%",marginTop:"2%"}}>Flipkart Details </h1>
    <div className="work-container">
    
                  <div  className="project-container">
          { 
            
          resData && resData?.map((data, i) => {
                              return (
                                < div key={i} className="project-card" >
                                <img src={data.image} alt="true" />
                                <h2 className="project-title"> </h2>
                                <div className="pro-details">
                                  <p>{data.title} </p>
                                  <h4>Price : {data.price}</h4>
                                  <h4>Ratings :  {data.rating}</h4>
                                  <div className="pro-btns">
                                    <a href={data.link} target='_blank' rel="noreferrer" className="btn">Buy Now</a>
              
                                  </div>
                                </div>
                              </div>
              
                         
                    
              )
            }
            )
          }
    
    </div>
                </div>
    
        </>
  )
}

export default Flipkart
