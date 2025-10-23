import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import HeroSlider from '../Components/HeroSlider';
import PetCards from '../Pages/PetCards';
import WinterCareTips from '../Components/WinterCareTips';
import ExpertVets from '../Components/ExpertVets';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
              
<main className='flex-1 w-11/12 mx-auto'>
    <Outlet>
     
    </Outlet>
</main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;