import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'

export default function Technology() {
  return (
    <div>
        <div style={{margin:"auto",paddingLeft:"0%",fontWeight:"900",width:"800px", marginBottom:"20px"}}>
        <h1 style={{fontSize:"40px"}}>  Technology Jobs </h1>

        <SimpleGrid columns={1} spacing={10}>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>Full-Stack JavaScript Developer (Node.js / React.js / Express.js)</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  
 
</SimpleGrid>
        </div>

    </div>
  )
}
