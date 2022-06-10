import React from 'react'
import {Box} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchCart } from '../Redux/action'
import { store } from '../Redux/store'

export default function CartCounter() {
    const cart = useSelector(store => store.ecommerceData.cart)
    console.log("cart counter", cart)
    console.log(store.getState())
    const dispatch = useDispatch();
    if(cart?.length === 0){
        dispatch(fetchCart())
    }
    console.log(cart)
  return (
    <Box
    backgroundColor="black"
    textColor="white"
    borderRadius = "50%"
    width ="20px"
    height = "20px"
    textAlign="center"
    paddingBottom="15px"
    position ="absolute"
    right ="-2"
    top ="0"
>
      {
        cart?.length ? cart.length : 0
      }
    </Box>
  )
}
