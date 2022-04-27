import React from 'react'
import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import imgr from '../../images/pexels-1.jpg'
import { StaffContainer, StaffWrapper, Card, Front, Img, Back, BackContent, Heading, Subtitle, SmallLink, Link} from './StaffElements';
const StaffSection = () => {
  return (
    <>
        <StaffContainer>
            <StaffWrapper>
               <div className="row">
                   <div className="col-4">
                    <Card>
                        <Front className='Front'>
                            <Img src={imgr} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>Xpresswing</Heading>
                                <Subtitle>Driving made Easy</Subtitle>
                                <SmallLink>
                                    <Link>
                                        <BsYoutube />
                                    </Link>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                    <Link>
                                        <BsInstagram />
                                    </Link>
                                    <Link>
                                        <BsTwitter />
                                    </Link>
                                </SmallLink>
                            </BackContent>
                        </Back>
                    </Card>
                   </div>
                   <div className="col-4">
                    <Card>
                        <Front className='Front'>
                            <Img src={imgr} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>Xpresswing</Heading>
                                <Subtitle>Driving made Easy</Subtitle>
                                <SmallLink>
                                    <Link>
                                        <BsYoutube />
                                    </Link>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                    <Link>
                                        <BsInstagram />
                                    </Link>
                                    <Link>
                                        <BsTwitter />
                                    </Link>
                                </SmallLink>
                            </BackContent>
                        </Back>
                    </Card>
                   </div>
                   <div className="col-4">
                    <Card>
                        <Front className='Front'>
                            <Img src={imgr} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>Xpresswing</Heading>
                                <Subtitle>Driving made Easy</Subtitle>
                                <SmallLink>
                                    <Link>
                                        <BsYoutube />
                                    </Link>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                    <Link>
                                        <BsInstagram />
                                    </Link>
                                    <Link>
                                        <BsTwitter />
                                    </Link>
                                </SmallLink>
                            </BackContent>
                        </Back>
                    </Card>
                   </div>
               </div>
            </StaffWrapper>
        </StaffContainer>
    </>
  )
}

export default StaffSection