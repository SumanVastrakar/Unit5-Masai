import styles from "./Button.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";

function Button({ title, data, setData,page, setPage, onClick, disabled, id }) {
    
console.log(setPage)
console.log(page)
    const handleButton = async() =>{
       
       if( id == "NEXT"){
        setPage(page + 1)
       console.log("next is called")
       
       }
       if( id == "PREV"){
        console.log("prev is called")
      if( page >= 1){
        setPage(page - 1)
      }
  
       }
       if( id == "SORT_BUTTON"){
      
        console.log("sort")
        return await axios.get(`https://json-server-mocker-masai.herokuapp.com/candidates?_sort=salary&_order=asc&_page=${page}&_limit=5`)
        .then((response) => {
          data = response.data
          // console.log(response.data)
          setData(response.data)

        })
        .catch((error) => console.log(error))
  
       }
    }
  return (
    <>
      <button id={id} data-testid="button-component"
     onClick={handleButton}
    className={styles.button}>
      {title}
   
    </button>
   
   
    </>
  
   
  );
}

export default Button;
