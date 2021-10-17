import React from 'react'
import styled from 'styled-components';
import Seaction from './Seaction';
const Home = () => {
    return (
        <Container>
            <Seaction
                titel='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg="model-s.jpg"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
               
            />
            <Seaction
                titel='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
               
            
            />
            <Seaction 
                titel='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                
            />
            <Seaction
                titel='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
             <Seaction
                titel='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='learn more'
                />
                 <Seaction
                titel='Solor for New Roofs'
                description='Solar Roof Coasts less Than a New Roof'
                backgroundImg='solar-roof.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
             <Seaction
                titel='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop now'
            />
        </Container>
    )
}

export default Home

const Container=styled.div`
    height:100vh;
`