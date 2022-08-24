import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1, HeroBtnWrapper,
HeroP, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay="autoplay" loop="loop" muted="muted" playsinline="playsinline" src={Video} type="video/mp4" />
        </HeroBg>
      <HeroContent>
        <HeroH1>Accrescent Networks Inc.</HeroH1>
        <HeroP>We fullfill your cabling needs!!</HeroP>
            <HeroBtnWrapper>
                <Button to="contactus" onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true} duration={500} spy={true} exact='true'
                     offset={-80}
                > 
                Get a Quote {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection