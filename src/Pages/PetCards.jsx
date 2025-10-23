import React from 'react';
import PetsServiceCard from '../Components/PetsServiceCard';

const PetCards = ({petsData}) => {
    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    petsData.map(service => (
                        <PetsServiceCard
                         key={service.serviceId}
                         service={service}
                        >
                           

                        </PetsServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default PetCards;