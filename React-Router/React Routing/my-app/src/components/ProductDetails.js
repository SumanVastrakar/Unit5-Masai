import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        async function getData() {
          const data = await fetch(`https://fakestoreapi.com/products/${id}`).then((d) =>d.json())
          setProduct(data)
        }
        getData();
    },[])
    console.log(product)
  return (
    <div  style={{border:"2px solid black", width:"60%"}}>
        <img style={{width: "200px", height:"200px"}}src={product.image} alt="" />
<h1>{product.category}</h1>
<h3>{product.title}</h3>
<p>{product.description}</p>
<h5>{product.price} Rs.</h5>
{/* <h5>{product.rating.rate}</h5> */}
<Link to="/products">
<button> Go Back</button>
</Link>



      
    </div>
  )
}
// category: "men's clothing"
// description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
// id: 3
// image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
// price: 55.99
// rating: {rate: 4.7, count: 500}
// title: "Mens Cotton Jacket"