import React from 'react'
import logo1 from '../../images/logo-1.png'
import logo2 from '../../images/logo-2.png'
import logo3 from '../../images/logo-3.png'
import logo4 from '../../images/logo-4.png'
import logo6 from '../../images/logo-6.png'
import logo7 from '../../images/logo-7.png'
import {PartnerContainer, Imgwrap, Img } from './PartnersElements'

const partners = () => {
  return (  
    <PartnerContainer>
        <Imgwrap>
        <Img src={logo1} alt={"img"}/>
        </Imgwrap>
        <Imgwrap>
        <Img src={logo4} alt={"img"}/>
        </Imgwrap>
        <Imgwrap>
        <Img src={logo3} alt={"img"}/>
        </Imgwrap>
        <Imgwrap>
        <Img src={logo6} alt={"img"}/>
        </Imgwrap>
        <Imgwrap>
        <Img src={logo2} alt={"img"}/>
        </Imgwrap>
        <Imgwrap>
        <Img src={logo7} alt={"img"}/>
        </Imgwrap>
    
    </PartnerContainer>
  )
}

export default partners