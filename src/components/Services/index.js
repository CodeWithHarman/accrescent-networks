import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesConatiner, ServicesH1, ServicesCard, ServicesH2,
ServicesP, ServicesIcon, ServicesWrapper} from './ServicesElements'

const Services = () => {
  return (
    <ServicesConatiner id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Data Center Services</ServicesH2>
            <ServicesP>Data center cabling, audits, and moves.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Telecom Services </ServicesH2>
            <ServicesP>Structured Cabling, Integration, and Testing.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Security Services</ServicesH2>
            <ServicesP>Camera, senser, and Security devices Installation, .</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesConatiner>
  )
}

export default Services