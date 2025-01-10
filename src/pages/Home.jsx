import React from 'react'
import Hero from '../components/Hero'
import LetestCollection from '../components/LetestCollection'
import ProductsItems from '../components/ProductsItems'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />
      <ProductsItems />
      <BestSeller />
      <OurPolicy />
      <NewLetterBox />
    </div>
  )
}

export default Home