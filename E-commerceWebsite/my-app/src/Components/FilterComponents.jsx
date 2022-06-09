import React, { useEffect } from 'react'
import { Box, Text, Checkbox, CheckboxGroup, VStack,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, Button} from '@chakra-ui/react'
import { useState } from 'react'
import {useSearchParams} from "react-router-dom"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { fetchData } from '../Redux/action'


export default function FilterComponents() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryValues, setCategoryValues] = useState(searchParams.getAll("category") || []);
// console.log(searchParams.getAll("category"))
  const categoryHandler = (value) => {
    console.log(value)
setCategoryValues(value)
  }

  useEffect(() => {
    if(categoryValues){
      setSearchParams({category :categoryValues})
     let params = {
        category : searchParams.getAll("category")
      }
      dispatch(fetchData(params))
    }else {
      searchParams.delete("category")
    }
  }, [categoryValues, setSearchParams, searchParams, dispatch])
  return (
  <Box>
    <Box display = {{base : "none", md : "block"}} p = "1rem 2rem">
      <Text fonstsize = "2xl">Filters</Text>
      <Text>Category</Text>
      {/* <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']} onChange={categoryHandler}> */}
      <CheckboxGroup  defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"} >
    <Checkbox value="men's clothing">Men's Clothing</Checkbox>
    <Checkbox value="women's clothing">Women's Clothing</Checkbox>
    <Checkbox value='jewelery'>Jwelery</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
    <Checkbox value='bags'>Bags</Checkbox>
  </VStack>
</CheckboxGroup>
    </Box>
    <Box display={{base : "block", md : "none"}} p = "0rem 2rem">
    <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
    </Box>
  </Box>
  )
}
