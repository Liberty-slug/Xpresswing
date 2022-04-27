import styled from 'styled-components'

export const StaffContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`

export const StaffWrapper = styled.div`
z-index: 1;
height: 760px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
align-items: center;
`

export const Card = styled.div`
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%
    height: 380px;
    padding: 175px 35px;

    &:hover > .Front{
        transform: perspective(600px) rotateY(-180deg);
    }
    &:hover > .Back{
        transform: perspective(600px) rotateY(0deg);
    }
`

export const Front = styled.div`
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transform: perspective(600px) rotateY(0deg);
    transition: transform .6s linear;

`

export const Back = styled.div`
    height: 50%;
    padding: 35px;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    background: #f1f1f1;
    transform: perspective(600px) rotateY(180deg);
    transition: transform .6s linear;
    border-radius: 10px;
`

export const Img = styled.img`
    height: 50%;
    border-radius: 10px;
`

export const BackContent = styled.div`
    color: #2c3e50;
    text-align: center;
    width: 100%;
`

export const SmallLink = styled.div`
    margin: 20px 0;
`

export const Link = styled.a`
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
    font-size: 18px;
    transition: 0.4s;
    border-radius: 50%;

    &:hover{
        background: #2c3e50;
        color: #fff;
    }
`

export const Heading = styled.h2`

`

export const Subtitle = styled.span`

`