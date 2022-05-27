import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import Fetching from './Fetching';
import '../App.css';
import Copywrite from './CopyWrite';
import './DressesCollection.css'
import { DressnumberContext } from '../Context/DressnumberContext';
import { Navigate } from "react-router-dom";



var originalArr = [];


let dresses= [
  {
    "id": 1,
    "payment_method": "jcb",
    "total_votes": 5,
    "price": 2341,
    "reviews": "good",
    "Categories": "Indian",
    "Image": "https://www.iwmbuzz.com/wp-content/uploads/2021/03/have-a-look-at-blackpink-jennie-wearing-3-elegant-dresses-which-will-stun-you-3.jpg"
  },
  {
    "id": 2,
    "payment_method": "mastercard",
    "total_votes": 4,
    "price": 1935,
    "reviews": "awesome",
    "Categories": "Breakfast",
    "Image": "https://assets.teenvogue.com/photos/5eaef522459a130c0c6cdf6f/3:2/w_2552,h_1701,c_limit/GettyImages-1193032654.jpg"
  },
  {
    "id": 3,
    "payment_method": "cash",
    "total_votes": 3,
    "price": 1907,
    "reviews": "good",
    "Categories": "Yogurt",
    "Image": "https://www.iwmbuzz.com/wp-content/uploads/2021/11/10-times-blackpink-jennie-proved-her-fashion-credentials-take-cues-4.jpg"
  },
  {
    "id": 4,
    "payment_method": "jcb",
    "total_votes": 1,
    "price": 2020,
    "reviews": "Great",
    "Categories": "Dessert",
    "Image": "https://media.vogue.co.uk/photos/607d45d60a076219357f66ff/master/w_1080,h_1351,c_limit/Instas%20Jennierubyjane.jpg"
  },
  {
    "id": 5,
    "payment_method": "cash",
    "total_votes": 4,
    "reviews": "good",
    "price": 1860,
    "Categories": "Sandwitch",
    "Image": "https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2020%2F10%2Fblackpink-jennie-kim-style-wardrobe-essentials-how-to-dress-like-k-pop-celebrity-singer-4.jpg?w=1600&cbr=1&q=90&fit=max"
  },
  {
    "id": 6,
    "payment_method": "jcb",
    "total_votes": 5,
    "price": 1569,
    "reviews": "awesome",
    "Categories": "Sausage",
    "Image": "https://media.vogue.co.uk/photos/60925da5743763a8bde688c2/3:4/w_951,h_1268,c_limit/162869988_3623898307736642_7261982386369968308_n.jpg"
  },
  {
    "id": 7,
    "payment_method": "cash",
    "total_votes": 2,
    "price": 2518,
    "reviews": "good",
    "Categories": "Hamburger",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_4GIsYhGi6DK-mR9-2u5qXih_lRMhjE9bFMRgiBbaF6oqKn7eFKs6BA4T-lEBR-uIXQ&usqp=CAU"
  },
  {
    "id": 8,
    "payment_method": "jcb",
    "total_votes": 3,
    "price": 1786,
    "reviews": "Great",
    "Categories": "Hotdog",
    "Image": "https://64.media.tumblr.com/6786cdda6a49aecab6e01563eba774dd/08f380c790d8f5c7-e4/s540x810/d127b464ee350a0369c8a9711f4f68c32cf0f27e.jpg"
  },
  {
    "id": 9,
    "payment_method": "mastercard",
    "total_votes": 4,
    "reviews": "great",
    "price": 2392,
    "Categories": "Pizza",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsK04_8pHtIyY7QiJiXiYfJUA8fr-Xeb3og&usqp=CAU"
  },
  {
    "id": 10,
    "payment_method": "mastercard",
    "total_votes": 1,
    "reviews": "awesome",
    "price": 1682,
    "Categories": "Chicken Roast",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjrd2ept3ZMZ7wLoVeZUGECJhIzizAiLIJg&usqp=CAU"
  },
  {
    "id": 11,
    "payment_method": "jcb",
    "total_votes": 3,
    "price": 1649,
    "reviews": "good",
    "Categories": "Sea Food",
    "Image": "https://qph.fs.quoracdn.net/main-qimg-2216b4e7f6f4a6c555f1ce8e0a79af6f-lq"
  },
  {
    "id": 12,
    "payment_method": "jcb",
    "total_votes": 5,
    "price": 1346,
    "reviews": "great",
    "Categories": "Kabab",
    "Image": "https://hbs-media.harpersbazaar.com.sg/2019/03/Jennie-Kim-Airport-Fashion-3.jpg"
  },
  {
    "id": 13,
    "payment_method": "laser",
    "total_votes": 2,
    "price": 2546,
    "reviews": "Great",
    "Categories": "Salad",
    "Image": "https://i.pinimg.com/236x/bc/65/ea/bc65ea4ff91c638a39c0f9f957025cee.jpg"
  },
  {
    "id": 14,
    "payment_method": "mastercard",
    "total_votes": 3,
    "price": 1963,
    "reviews": "good",
    "Categories": "Spaghetti",
    "Image": "https://cozyrebekah.files.wordpress.com/2021/04/jennie_outfit01.jpg?w=400"
  },
  {
    "id": 15,
    "payment_method": "jcb",
    "total_votes": 1,
    "price": 2300,
    "reviews": "awesome",
    "Categories": "Biryani",
    "Image": "https://preview.redd.it/uqyl5uki9o351.jpg?auto=webp&s=612b9e776a325339e1992c20d72a88f3cab5169a"
  },
  {
    "id": 16,
    "payment_method": "jcb",
    "total_votes": 4,
    "price": 1859,
    "reviews": "Great",
    "Categories": "Shrimp",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXJ7aAxfQc3IInhNcxML3xly-6tzoRzR6XQ&usqp=CAU"
  },
  {
    "id": 17,
    "payment_method": "jcb",
    "total_votes": 5,
    "price": 1308,
    "reviews": "Great",
    "Categories": "Cocktail",
    "Image": "https://qph.fs.quoracdn.net/main-qimg-78a45d99006ffba8ebfeffd08d97e826"
  },
  {
    "id": 18,
    "payment_method": "diners-club-enroute",
    "total_votes": 5,
    "reviews": "great",
    "price": 1750,
    "Categories": "Sushi",
    "Image": "https://fc-195d3.kxcdn.com/wp-content/uploads/2021/04/Jennie-BlackPink-Black-And-White-Checkered-Shirt-2.jpg"
  },
  {
    "id": 19,
    "payment_method": "maestro",
    "total_votes": 3,
    "price": 1193,
    "reviews": "awesome",
    "Categories": "Coffee",
    "Image": "https://qph.fs.quoracdn.net/main-qimg-3048809d2acea9c72848c7b1831a03a5-lq"
  },
  {
    "id": 20,
    "payment_method": "china-unionpay",
    "total_votes": 4,
    "price": 1282,
    "reviews": "good",
    "Categories": "IceCream",
    "Image": "https://fc-195d3.kxcdn.com/wp-content/uploads/2021/03/Jennie-Blackpink-Long-Sleeve-Plaid-Tweed-Dress-1-300x400.jpg"
  },
  {
    "payment_method": "mastercard",
    "total_votes": "3",
    "price": 2345,
    "reviews": "good",
    "Categories": "South Indian",
    "Image": "https://i.pinimg.com/236x/1e/9a/9f/1e9a9fb696c79beec44b9c6becc2ae53.jpg",
    "id": 21
  },
  {
    "payment_method": "cash",
    "total_votes": "2",
    "price": 1890,
    "reviews": "Pretty",
    "Categories": "White Sauce Pasta",
    "Image": "https://qph.fs.quoracdn.net/main-qimg-2f366d64fc8d40fe7a7e91767c33c1f7-lq",
    "id": 22
  },
  {
    "payment_method": "cash",
    "total_votes": "5",
    "price": 1670,
    "reviews": "great",
    "Categories": "Manchurian",
    "Image": "https://i.pinimg.com/originals/05/24/89/052489de370043dfe777b85d23758278.jpg",
    "id": 23
  },
  {
    "payment_method": "cash",
    "total_votes": "4",
    "price": 1320,
    "reviews": "Awesome",
    "Categories": "Maggie",
    "Image": "https://i.pinimg.com/originals/f4/3c/e7/f43ce73f7c39a87af3ebce02356b8e17.jpg",
    "id": 24
  },
  {
    "payment_method": "cash",
    "total_votes": "4",
    "price": 2320,
    "reviews": "Awesome",
    "Categories": "Maggie",
    "Image": "https://i.pinimg.com/736x/37/2d/82/372d826b1ec3dd19048bb4a7f32807e5.jpg",
    "id": 25
  }
]

export default function DressesCollection() {
 
 const {handleChange, isAuth} = useContext(DressnumberContext)
    var [meals, setMeals] = useState(dresses);
    const [costone, setCostone] = useState("")

  ///////array for dresses 
    useEffect(() => {
        setMeals(meals)
    }, [])

 
    if (!originalArr.length) {
        originalArr = [...meals]
    }

    // let newArr = meals.slice(0);
    // console.log(newArr)

    //for payemnet method
    const filterItem = (payment) => {
        const updatedItems = originalArr.filter((elem) => {
            return payment == elem.payment_method
        })
        setMeals(updatedItems);
        console.log(meals)
    }
    //for rating method
    const filterItemrating = (votes) => {
        const updatedItems = originalArr.filter((elem) => {
            return votes == elem.total_votes
        })
        setMeals(updatedItems);
    }
    //for sorting 
    let items;
    const priceSortinghl =() =>{
   
console.log("called h-l")
const updatedItems = originalArr.sort(function (a, b) { return b.price - a.price })
       setMeals(updatedItems)
       console.log(updatedItems)

      
    }
    const priceSortinglh =() =>{
      console.log("called l-h")
      const updatedItems2 = originalArr.sort(function (a, b) { return a.price - b.price })
      setMeals(updatedItems2)
      console.log(updatedItems2)
      console.log(meals)
      }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">DressDiv</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* //filtering by payment method */}
                            <li className="nav-item dropdown">

                                <select className="form-select form-select mx-2"

                                    onChange={(e) => {
                                        // setMeals(newArr);
                                        filterItem(e.target.value)

                                    }}
                                    aria-label=".form-select-lg example">
                                    <option selected>By Payment Method</option>
                                    <option value="cash">Cash</option>
                                    <option value="jcb">Jcb</option>
                                    <option value="mastercard">Mastercard</option>
                                </select>
                            </li>
                            {/* //sorting by rating */}

                            <li className="nav-item dropdown">
                                <select className="form-select form-select mx-2"
                                    onChange={(e) => {
                                        filterItemrating(e.target.value)

                                    }}


                                    aria-label=".form-select-lg example">
                                    <option selected>By Rating</option>
                                    <option value="1">One Star</option>
                                    <option value="2">Two Star</option>
                                    <option value="3">Three Star</option>
                                    <option value="4">Four Star</option>
                                    <option value="5">Five Star</option>
                                </select>
                            </li>

                            {/* //sorting by cost by one */}

                            <li className="nav-item dropdown">
                                <select className="form-select form-select mx-2" onChange={(e) => { 
                                //   if(e.target.value=="h-l")
                                //   priceSortinghl() 
                                //  else if(e.target.value=="l-h")
                                // priceSortinglh()




                                setCostone(e.target.value)
                                if (e.target.value == "h-l") {
                                    let highsort = meals;
                                    highsort = highsort.sort(function (a, b) { return b.price - a.price })
                                    console.log(e.target.value)
                                    highsort.map(e => (
                                        <div className="card mappedCard" style={{ width: "18rem" }}>
                                            <img src={e.Image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                                <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                                <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                                <h5 className="card-text">Reviews : {e.reviews}</h5>
                                                <h5 className="card-text">Categories : {e.Categories}</h5>

                                            </div>
                                        </div>
                                    ))
                                } else {
                                    let lowsort = meals;
                            
                                    lowsort = lowsort.sort(function (a, b) { return a.price - b.price })
                                    console.log(e.target.value)
                                    console.log(lowsort)
                                    lowsort.map(e => (
                                        <div className="card mappedCard" style={{ width: "18rem" }}>
                                            <img src={e.Image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                                <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                                <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                                <h5 className="card-text">Reviews : {e.reviews}</h5>
                                                <h5 className="card-text">Categories : {e.Categories}</h5>

                                            </div>
                                        </div>
                                    ))
                                }





                              }}
                                  
                               aria-label=".form-select-lg example">
                                    <option selected>By Price</option>
                                    <option value="h-l">High to Low</option>
                                    <option value="l-h">Low to High</option>

                                </select>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <Link to="/form">
                                <button className="btn btn-outline-success" type="submit">Go To Form Page</button>
                            </Link>

                        </form> */}
                    </div>
                </div>
            </nav>

            <div className=' row mappedData'>

                {


                    meals.map(e => (

                        <div className="card mappedCard" style={{ width: "18rem" }}>
                          <Link to={`/dressDetails/${e.id}`}>
                            <img src={e.Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text details">Payment Method : {e.payment_method}</h5>
                                <h5 className="card-text details">Rating : {e.total_votes}</h5>
                                <h5 className="card-text details">Price : {e.price} ₩</h5>
                                <h5 className="card-text details">Reviews : {e.reviews}</h5>
                                <button className='btn' onClick={()=>{
                                handleChange(e.id)
                                if(!isAuth){
return <Navigate to={"/login"} />
                                }else {
                                  return <Navigate to={`/dressDetails/${e.id}`} />
                                }
                                }}>View Details</button>
                                {/* <h5 className="card-text">Categories : {e.Categories}</h5> */}

                            </div>
                            </Link>
                        </div>
                       
                    ))



                }


            </div>
            <Copywrite/>
        </div>

    )
}
