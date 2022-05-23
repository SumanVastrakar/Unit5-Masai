import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./index.css";
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';


export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() =>{
    loadUserData();
  },[])

  const loadUserData = async () => {
    return await axios.get(`https://json-server-mocker-masai.herokuapp.com/candidates?_page=${page}&_limit=5`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
  }
  console.log("data",data)
  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON"  setData={setData} data ={data}  title={`Sort by Ascending Salary`} />
        <Button title="PREV" setPage={setPage} page={1} id="PREV" />
        <Button  id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => 
      <div >
        <CandidateCard item={item}/>
     
        </div>
       
      )}
  <button onClick={() => {
                setPage(page - 1)
                console.log(page)
            }}>Prev</button>
            <button onClick={() => {
                setPage(page + 1)
                console.log(page)
            }}>Next</button>
    </div>
  );
}
