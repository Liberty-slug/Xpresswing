import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg src={Video} type='video/mp4' autoPlay={"autoplay"} loop muted  />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Driving Made Easy</HeroH1>
            <HeroP>Create a free account today to get access to hiring a car or a driver for any occasion</HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Get Started {hover ? <ArrowForward /> : <ArrowRight />} </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection