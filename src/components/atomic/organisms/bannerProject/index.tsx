import React from 'react'
import Card from '../../layouts/card'
import Carousel from '../../molecules/carrusel/Carrusel'
import { DescriptionProject } from '../../molecules/descriptonproject/descpro'
import { BannerProjectStyled } from './bannerproject.style'

const images = [
  'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1677&q=80',
  'https://images.unsplash.com/11/sky-rose.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/12/till-the-cows-come-home.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
]

const index = () => {
  return (
    <BannerProjectStyled>
      <Card className='micardso'>
        <div className="contentCarousel">
          <Carousel images={images} />
        </div>

        <div className="contentDescription">
          <DescriptionProject />
        </div>
      </Card>
    </BannerProjectStyled>
  )
}

export default index
