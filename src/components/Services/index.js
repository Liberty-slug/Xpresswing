import React from 'react'

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServiceCard>
                <ServicesIcon src={icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We are fucking the best for now</ServicesP>
            </ServiceCard>
            <ServiceCard>
                <ServicesIcon src={icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We are fucking the best for now</ServicesP>
            </ServiceCard>
            <ServiceCard>
                <ServicesIcon src={icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We are fucking the best for now</ServicesP>
            </ServiceCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services