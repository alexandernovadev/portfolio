import React from 'react'
import { DescProjStyle } from './styles'
import Typography from '../../atoms/typography'
import ImageIcon from '../../atoms/imageicon'

import reactlogo from '@/assets/iconsTech/reactjs.png'

export const DescriptionProject = () => {
  return (
    <DescProjStyle>
      <Typography variant="h1">Hotels Mart App</Typography>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        omnis doloribus harum asperiores architecto nisi maxime rem sint eius,
        excepturi ab alias, inventore possimus eos facere sunt. Atque, a ipsa!
      </Typography>

      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        omnis doloribus harum asperiores architecto nisi maxime rem sint eius,
        excepturi ab alias, inventore possimus eos facere sunt. Atque, a ipsa!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        omnis doloribus harum asperiores architecto nisi maxime rem sint eius,
        excepturi ab alias, inventore possimus eos facere sunt. Atque, a ipsa!
      </Typography>


      <ImageIcon src={reactlogo}/>
      <ImageIcon src={reactlogo}/>
      <ImageIcon src={reactlogo}/>
      <ImageIcon src={reactlogo}/>

    </DescProjStyle>
  )
}
