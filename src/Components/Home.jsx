import React, { use } from 'react';
import PetCards from '../Pages/PetCards';
import { useLoaderData } from 'react-router';
import HeroSlider from './HeroSlider';

import WinterCareTips from './WinterCareTips';
import ExpertVets from './ExpertVets';
import StatsSection from './StatsSection';



const Home = () => {
  
    const petsData = useLoaderData();
    // console.log(petsData);
    return (
  
   <div>
       <div>
         <HeroSlider></HeroSlider>
      </div>

        <PetCards petsData={petsData}></PetCards>
      <div>
        <WinterCareTips></WinterCareTips>
      </div>
      <div>
         <ExpertVets></ExpertVets>
      </div>
      <div>
        <StatsSection></StatsSection>
      </div>
   </div>

    );
};

export default Home;