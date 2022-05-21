import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function RecreatedGithub() {
    const [repo, setRepo] = useState([]);
    const [searchElem, setSearchElem] = useState("")
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("abc");
const [sortValue, setSortValue] = useState("")
const sortOptions = ["id", "repoName", "marksObtain"];
useEffect(() =>{
    getData();
},[])
    async function getData() {
        return await axios.get(`http://localhost:8080/GithubRepo?_page=${page}&_limit=12`)
        .then((response) => setRepo(response.data))
        .catch((err) =>  console.log(err))     
    }

    //handle Search
    const searchHandle = async() => {
        console.log(searchElem)
        return await axios.get(`http://localhost:8080/GithubRepo?q=${value}`)
        .then((response) => {setRepo(response.data)
            console.log("filtered iTem", repo)    
        })
        .catch((err) =>  console.log(err)) 
      
    }


    console.log(repo)

    //sorting control 
    const handleSort = async(e) =>{
        let value = e.target.value;
        setSortValue(value)
        return await axios.get(`http://localhost:8080/GithubRepo?_sort=${value}&_order=asc`)
          .then((response) => {
            setRepo(response.data)
    
          })
          .catch((error) => console.log(error))
    
         

       
      

    }

    return (
        <div>
            <input type="text" placeholder='Search Your repo Here...' onChange={(e) => {
                setValue(e.target.value)
                console.log(value)
            }} />
            <button onClick={searchHandle}>Search</button>


            {/* //sorting of elememnts */}
            <select style={{ width: "50%", borderRadius: "2px", height: "35px" }} name="" id="" onChange={handleSort}
            value={sortValue}>
            <option value="">Please Select Value</option>
            {
              sortOptions.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }

          </select>






            {
                repo.map(e => (
                    <div style={{margin:"auto", alignItems:"center",paddingLeft:"5%", width:"50%"}} >

                      <h4>{e.id} - {e.repoName}  ---> Marks Obtained: {e.marksObtain}</h4>
                    </div>
                ))
            }

            <button onClick={() => {
                setPage(page - 1)
            }}>Prev</button>
            <button onClick={() => {
                setPage(page + 1)
            }}>Next</button>
        </div>
    )
}
