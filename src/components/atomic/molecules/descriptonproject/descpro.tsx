import React from 'react'
import { DescProjStyle } from './styles'
import Typography from '../../atoms/typography'
import ImageIcon from '../../atoms/imageicon'
import Button from '../../atoms/button'

import reactlogo from '@/assets/iconsTech/reactjs.png'
import Anchor from '../../atoms/anchor'

export const DescriptionProject = () => {
  return (
    <DescProjStyle>
      <Typography variant="h1">Hotels Mart App</Typography>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Typography>

      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        omnis doloribus harum asperiores architecto nisi maxime Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Accusantium omnis doloribus
        harum asperiores architecto nisi maxime
      </Typography>

      <ImageIcon src={reactlogo} />
      <ImageIcon src={reactlogo} />
      <ImageIcon src={reactlogo} />
      <ImageIcon src={reactlogo} />

      <section className="buttonPlace">
        <div>
          <Anchor href='' variant='filled'>Ver mas</Anchor>
        </div>
      </section>
    </DescProjStyle>
  )
}
