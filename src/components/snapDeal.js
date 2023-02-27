import "../css/cardStyles.css"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from "../components/Navbar";
const Snapdeal = () => {
  const [resData, setResData] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://scraper-app-org.onrender.com/api/snapDeal/get");
      console.log(response.data.data);
      setResData(response.data.data);
    }
    getData();
  }, [])
 
  return (
    <>
    <Navbar/>
    <br/>
    <h1 style={{color:"white",marginLeft:"45%",marginTop:"2%"}}>Snapdeal Details </h1>
    <div className="work-container">
    
                  <div  className="project-container">
          { 
            
          resData && resData?.map((data, i) => {
                              return (
                                < div key={i} className="project-card" >
                                <img src={data.image} alt="true" />
                                <h2 className="project-title"> </h2>
                                <div className="pro-details">
                                  <p>{data.name} </p>
                                  <h4>BY : {data.author}</h4>
                                  <br/>
                                  <h4>Price : {data.price}</h4>
                                  <br/>
                                  <h4>Ratings :  {data.rating}</h4>
                                  <br/>
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

export default Snapdeal;
