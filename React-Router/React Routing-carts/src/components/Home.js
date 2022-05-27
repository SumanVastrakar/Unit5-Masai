import React from 'react'
import Navbar from './Navbar';
import Section from './Section';
import CategorySection from './CategorySection';
import ClientSection from './ClientSection';
import Contact from './Contact';
import CopyWrite from './CopyWrite';


export default function Home() {
  return (
    <div>
         {/* <Navbar /> */}
      <Section />
      <CategorySection />
      <ClientSection />
      <Contact />
      <CopyWrite />
    </div>
  )
}
