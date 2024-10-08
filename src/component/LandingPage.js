import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Offers from './Offers'
import DomasticAirlines from './DomasticAirlines'
import InternationalAirline from './InternationalAirline'
import Carousel from './Carousel'
import AppDownload from './AppDownload'
import PopularPack from './PopularPack'
import MyAirDealRecom from './MyAirDealRecom'
import Fotter from './Fotter'
import EnquiryPopUp from '../component/EnquiryPopup'
import Test, { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo'
import ImageGrid from './ImageGrid'
import PopularDomestic from './PopularDomestic'

function LandingPage({ temp, setTemp }) {
    return (
        <div>
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>
            <HeroSection />
            <Offers />
            <PopularDomestic />
            <DomasticAirlines />
            <InternationalAirline />
            <Carousel />
            <PopularPack />
            <MyAirDealRecom />
        </div>
    )
}

export default LandingPage