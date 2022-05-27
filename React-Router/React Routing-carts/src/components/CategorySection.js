import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function CategorySection() {
    return (
        <div>
            <section id="services-container">
                <h1 className="h-primary-center">Our Services</h1>
                <div id="services">

                    <div className="box">
                        <img src="https://i.pinimg.com/736x/4b/61/93/4b6193158c4238db13322ffd59be65c3.jpg"
                            alt="designing" />
                        <h2 className="h-secondary-center">Dress Designing</h2>
                        <p className="center">"Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes."</p>
                        <Link to="/dressDesigning">

                            <button style={{ marginLeft: "150px" }} className='btn'>See More</button>
                        </Link>

                    </div>
                    <div className="box">
                        <img src="https://images.squarespace-cdn.com/content/v1/5688b4ce40667a3869194d52/1548514285458-SUAFRIP0VRJZVB4YCLRV/women-tailoring-alteration-service.jpg?format=2500w"
                            alt="dish" />
                        <h2 className="h-secondary-center">Dresses Alteration</h2>
                        <p className="center">"You gotta have style. It helps you get down the stairs. It helps you get up in the morning. It’s a way of life. Without it, you’re nobody. I’m not talking about lots of clothes.”</p>
                        <Link to="/dressAlteration">

                            <button style={{ marginLeft: "150px" }} className='btn'>See More</button>
                        </Link>
                    </div>

                    <div className="box">
                        <img src="https://i.ytimg.com/vi/d9xb41A9lDw/hqdefault.jpg"
                            alt="Delivery Man" />
                        <h2 className="h-secondary-center">Home Delivery</h2>
                        <p className="center">"You can never take too much care over the choice of your shoes. Too many women think that they are unimportant, but the real proof of an elegant woman is what is on her feet."</p>
                        <Link to="/dressDelivery">

                            <button style={{ marginLeft: "150px" }} className='btn'>See More</button>
                        </Link>
                    </div>


                </div>

            </section>
        </div>
    )
}
