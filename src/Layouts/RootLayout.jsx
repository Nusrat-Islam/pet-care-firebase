import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import HeroSlider from '../Components/HeroSlider';
import PetCards from '../Pages/PetCards';
import WinterCareTips from '../Components/WinterCareTips';
import ExpertVets from '../Components/ExpertVets';
import Loading from '../Components/Loading';

const RootLayout = () => {
    const { state } = useNavigation();
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <main className='flex-1 w-11/12 mx-auto'>
                {state == "loading" ? <Loading /> : <Outlet />}
            </main>
                <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;