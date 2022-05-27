import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

export default function ProductPage() {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {

        async function getData() {
            const data = await fetch("https://fakestoreapi.com/products").then((d) => d.json())
            setDataUser(data)
        }
        getData();
    }, [])

    console.log(dataUser);


    return (
        <div className='App'>
            <table style={{border:"2px solid black", padding:"10px", margin:"10px"}}>
                <thead  style={{border:"2px solid black"}}>
                    <tr>
                    <th>
                        #No.
                        </th>
                        <th>
                            Product Image
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            View More
                        </th>

                    </tr>
                </thead>
                <tbody>



                    {
                        dataUser.map((e, index) => (
                            <tr>
                                <td>{index +1}</td>
                                <td><img style={{width:"60px", height: "60px"}} src={e.image} alt="pictures" /></td>
                                <td>{e.category}</td>
                                <td>{e.title}</td>
                                <td>{e.price} ₹</td>
                                
                                <td>
                                    <Link to={`/${e.id}`}>
                                    <button>View Details</button>
                                    </Link>
                                 
                                    
                                    </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
