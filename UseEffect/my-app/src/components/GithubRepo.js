import React, { useEffect, useState } from 'react'

var originalArr = [];
export default function GithubRepo() {
    const [repo, setRepo] = useState(originalArr);
    const [searchElem, setSearchElem] = useState("")
    const [page, setPage] = useState(1);


    useEffect(() => {
        async function getData() {
            let data = await fetch(`http://localhost:8080/GithubRepo?_page=${page}&_limit=12`).then((d) => d.json());
            // let data = await fetch(`http://localhost:8080/GithubRepo`).then((d) => d.json());
            setRepo(data);
        }
        getData();
    }, [])


    if (!originalArr.length) {
        originalArr = [...repo];
    }
    //filter item 
    const filterItem = (searchElem) => {
        const updatedItems = originalArr.filter((elem) => {
            // console.log(elem)
            return elem.repoName.toLowerCase().includes(searchElem)
        })
        setRepo(updatedItems)
        // console.log(updatedItems)
    }


    console.log(repo)

    //sorting control 
    const sortingHandle = (selectedValue) =>{
        if(selectedValue =="asc"){
            console.log("is clicked asc")
            const updatedItems = originalArr.sort(function(a,b) {return a.marksObtain - b.marksObtain})
            console.log("sortingHandle",selectedValue)
            setRepo(updatedItems);


        console.log(updatedItems)
      

        }else if(selectedValue =="dsc"){
            console.log("is clicked desc")
            const updatedItems = originalArr.sort(function(a,b) {return b.marksObtain - a.marksObtain})
            console.log(updatedItems)
            setRepo(updatedItems);
           
        }


    }

    return (
        <div>
            <input type="text" placeholder='Search Your repo Here...' onChange={(e) => {
                setSearchElem(e.target.value)
            }} />
            <button onClick={(e) => {

                filterItem(searchElem)
            }}>Search</button>


            {/* //sorting of elememnts */}


            <select style={{ width: "100px", margin: "auto" }} className="form-select" onChange={(e) => {
                sortingHandle(e.target.value)
                if (e.target.value == "asc") {
                    let highsort = repo;
                    highsort = highsort.sort(function (a, b) { return a.marksObtain - b.marksObtain })
                    console.log(e.target.value)
                    console.log(highsort)
                    highsort.map(e => (
                        <div >

                            <h5>{e.id} - {e.repoName} : {e.marksObtain}</h5>
                        </div>
                    ))
                }
                 else {
                    let lowsort = repo;
                    lowsort = lowsort.sort(function (a, b) { return b.marksObtain - a.marksObtain })
                    console.log(lowsort)
                    lowsort.map(e => (
                        <div >

                            <h5>{e.id} - {e.repoName} : {e.marksObtain}</h5>
                        </div>
                    ))
                }
            }} aria-label="Default select example">
                <option selected>Sort By</option>
                <option value="asc">Asc</option>
                <option value="dsc">Desc</option>

            </select>






            {
                repo.map(e => (
                    <div >

                        <h5>{e.id} - {e.repoName} : Marks obtain - {e.marksObtain}</h5>
                    </div>
                ))
            }
{console.log("MApped")}
            <button onClick={() => {
                setPage(page - 1)
            }}>Prev</button>
            <button onClick={() => {
                setPage(page + 1)
            }}>Next</button>
        </div>
    )
}
