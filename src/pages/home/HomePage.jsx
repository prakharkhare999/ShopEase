import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

const homepage = () => {
  return (
  
    <Layout>
      <HeroSection></HeroSection>
      <Category></Category>
      <HomePageProductCard></HomePageProductCard>
      <Track></Track>
      <Testimonial></Testimonial>
    </Layout>
  
  )
}

export default homepage