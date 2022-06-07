import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("")
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4)
  const sortOptions = ["first_name", "email", "age"];
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  useEffect(() => {
    loadUserData(0, 4, 0);
  }, [])
  const loadUserData = async (start, end, increase, optType = null, filterOrSortValue) => {
    switch(optType){
      case "search" :
        setOperation(optType);
        setSortValue("");
        return await axios.get(`http://localhost:8080/students?q=${value}&_start=${start}&_end=${end}`)
        .then((response) => {
          setData(response.data)
          setValue("")
          setCurrentPage(currentPage + increase)
          // console.log(data)
        })
        .catch((error) => console.log(error))

        default:

          return await axios.get(`http://localhost:8080/students?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data)
            setCurrentPage(currentPage + increase)
          })
          .catch((err) => console.log(err))
    }
   
  }

  // console.log("data", data)

  const handleReset = () => {
    loadUserData(0,4,0);
  };

  //handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    loadUserData(0,4,0,"search")
    // return await axios.get(`http://localhost:8080/students?q=${value}`)
    //   .then((response) => {
    //     setData(response.data)
    //     setValue("")
    //     // console.log(data)
    //   })
    //   .catch((error) => console.log(error))
  };

  //handlesort 


  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value)
    return await axios.get(`http://localhost:8080/students?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data)

      })
      .catch((error) => console.log(error))
  };

  //handleFilter

  const handleFilter = async (value) => {

    return await axios.get(`http://localhost:8080/students?gender=${value}`)
      .then((response) => {
        setData(response.data)
        console.log("filtered Value", data)

      })
      .catch((error) => console.log(error))
  }

  //render pagination

  const renderPagination = () => {
    if (currentPage == 0) {
      return (
        <MDBPagination className='mb-0'>
          <MDBPaginationItem>
            <MDBPaginationLink>
              1
            </MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBBtn onClick={() => {
              loadUserData(4, 8, 1, operation)
            }}>Next</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length == pageLimit) {
      return (

        <MDBPagination className='mb-0'>

          <MDBPaginationItem>
            <MDBBtn onClick={() => {
              loadUserData((currentPage-1) * 4, currentPage*4, -1, operation)
            }}>Prev</MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>
              {currentPage+1}
            </MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBBtn onClick={() => {
              loadUserData((currentPage+1)*4,  (currentPage + 2)*4, 1, operation)
            }}>Next</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      )
    } else {
      return (
        <MDBPagination className='mb-0'>
    
        <MDBPaginationItem>
          <MDBBtn onClick={() => {
            loadUserData(4, 8, -1, operation)
          }}>Prev</MDBBtn>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>
            {currentPage + 1}
          </MDBPaginationLink>
        </MDBPaginationItem>
  
      </MDBPagination>
      )
    
    }
  }

  return (
    <MDBContainer>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input type="text" className='form-control' placeholder='Search Name..' value={value} onChange={(e) => setValue(e.target.value)} />
        {/* <MDBBtnGroup> */}
        <MDBBtn type="submit" color="dark">Search</MDBBtn>
        <MDBBtn className='mx-2' color="info" onClick={() => handleReset()}>Reset</MDBBtn>
        {/* </MDBBtnGroup> */}
      </form>
      <div style={{ marginTop: "70px" }}>
        <h2 className="text-center">STUDENT'S DATA</h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col"> No.</th>
                  <th scope="col"> Name.</th>
                  <th scope="col"> Email.</th>
                  <th scope="col"> gender.</th>
                  <th scope="col"> age.</th>
                </tr>
              </MDBTableHead>
              {
                data.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className='text-center mb-0'>
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.first_name}  {item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                      </tr>

                    </MDBTableBody>
                  ))
                )
              }
            </MDBTable>
          </MDBCol>
        </MDBRow>


        <div style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "250px",
          alignContent: "center",
        }}>{renderPagination()}</div>
      </div>
      <MDBRow>
        <MDBCol size="8"><h5>Sort By :</h5>
          <select style={{ width: "50%", borderRadius: "2px", height: "35px" }} name="" id="" onChange={handleSort}
            value={sortValue}>
            <option value="">Please Select Value</option>
            {
              sortOptions.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }

          </select>


        </MDBCol>
        <MDBCol size="4"><h5>Filter By Gender : </h5>
          <MDBBtn color="success" onClick={() => handleFilter("Male")}>Male</MDBBtn>
          <MDBBtn color="danger" style={{ marginLeft: "2px" }} onClick={() => handleFilter("Female")}>Female</MDBBtn>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;
