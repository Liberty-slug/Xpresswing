import React from 'react'
import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import img1 from '../../images/pexels-1.jpg'
import img2 from '../../images/pexels-2.jpg'
import { StaffContainer, StaffWrapper, Card, Front, Img, Back, BackContent, Heading, Subtitle, SmallLink, Link} from './StaffElements';
const StaffSection = () => {
  return (
    <>
        <StaffContainer>
            <StaffWrapper>
                <h2 className='text-center pt-5'>Our Services</h2>
               <div className="row">
                   <div className="col-4">
                    <Card>
                        <Front className='Front'>
                            <Img src={img1} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>CEO</Heading>
                                <Subtitle>Gbadamosi Lateef</Subtitle>
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
                            <Img src={img2} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>Manager</Heading>
                                <Subtitle>Lawal Abisola</Subtitle>
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
                            <Img src={img1} />
                        </Front>
                        <Back className='Back'>
                            <BackContent>
                                <Heading>Director</Heading>
                                <Subtitle>Ajadi Zainab</Subtitle>
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