import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Problem3() {
  return (
    <div>
      <Grid
  h='300px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={4}
>
  <GridItem rowSpan={[1,2]} colSpan={[5,3]} bg='yellow' />
  <GridItem rowSpan={[1,2]} colSpan={[5,3]} bg='yellow' />
  
  <GridItem rowSpan={[1,2]} colSpan={[5,6]} bg='tomato' />
  <GridItem rowSpan={[1,2]} colSpan={[5,2]} bg='green' />
  <GridItem rowSpan={[1,2]} colSpan={[5,2]} bg='green' />
  <GridItem rowSpan={[1,2]} colSpan={[5,2]} bg='green' />

 
  
</Grid>
    </div>
  )
}
