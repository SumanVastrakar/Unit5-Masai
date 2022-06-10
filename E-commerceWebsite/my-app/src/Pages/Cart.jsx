import React from 'react'
import {DeleteIcon} from "@chakra-ui/icons"
import {Box, Heading, Stack, Text, Image, useColorModeValue, Button} from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux';
import { delteProductCart } from '../Redux/action';

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.ecommerceData.cart)
  console.log("cart Products", cart)
  const removeProduct = (id) => {
    console.log(`going to remove product ${id}`)
    dispatch(delteProductCart(id))
  }
  return (
<Box>
  <Heading as = "h2" size = "xl" textAlign ="center">Cart</Heading>
  {cart.length && cart.map(product => {
    return( 
    <CartItem key ={product.id} 
    id={product.id} 
     title={product.title} 
     price = {product.price} 
     description = {product.description}
      image ={product.image}
       removeProduct={removeProduct}/>)
  }) }

  
  <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
        >
            CHECKOUT
          </Button>
</Box>


  );
};

function CartItem({id, title, image, description, price, removeProduct}) {
  return (
    <Box border={"1px solid red"} rounded="lg" width = "fit-content" margin = "auto">


      <Stack direction ={{base : "column", md : "row"}} justifyContent="center" alignItems="center"> 
      <Box width="300px" height="300px"
      position = "relative"
      padding = "0 1rem"
       _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',           
              left: "50%",
              pos : "absolute",
              top : "50%",
              transform : "translate(-50%, -50%)",  
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}>
      <Image
              rounded={'lg'}
              height={200}
              width={300}
              objectFit={'contain'}
              src={image}
            />
      </Box>
<Box  width="300px"  height="300px">
  <Stack p ={4}>
  <Heading as = "h3" size ="lg"> {title} </Heading>
  <Box overflow = {"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>
  <Text textOverflow={"ellipsis"}>{description.substring(0, 12)}</Text>  
  </Box>

  <Text   color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}> ${price}    
  </Text>
  <Button onClick={ () => removeProduct(id)} variant = {"outline"} ><DeleteIcon></DeleteIcon>Remove </Button>

  </Stack>

</Box>
      </Stack>

      </Box>
  )
}
