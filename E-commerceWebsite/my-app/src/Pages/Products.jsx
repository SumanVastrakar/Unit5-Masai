import React, { useEffect } from 'react'
import {Box, Stack} from "@chakra-ui/react"
import FilterComponents from '../Components/FilterComponents'
import { store } from '../Redux/store'
import { useSelector, useDispatch} from 'react-redux/es/exports'
import { fetchData } from '../Redux/action'
import {useSearchParams} from "react-router-dom"
import {
  
    Center,
    useColorModeValue,
    Heading,
    Text,
    Flex,

    Image,
  } from '@chakra-ui/react';



export default function Products() {

    const products = useSelector(state => state.ecommerceData.products)
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(products);

    useEffect(() => {
        if(products?.length === 0){
            let params = {
category : searchParams.getAll("category")
            }
            dispatch(fetchData(params))
        }
    },[])

    console.log(products)
  return (
  <Box>
    <Stack display ={{md :"flex"}} flexDirection={{md : "row"}}>
    <Box>
<FilterComponents/>
    </Box>
    <Box>
        <Heading as = "h3">Products</Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">
            {
                products.map( elem =>{
                    return <ProductSimple key={elem.id} 
                    image={elem.image}
                    title={elem.title}
                    price ={elem.price}
                    />
                } )
            }
        </Flex>
       <ProductSimple/>
    </Box>
    </Stack>

  </Box>
  );
};

function ProductSimple({image, title, price}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'container'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
          
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹ {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }