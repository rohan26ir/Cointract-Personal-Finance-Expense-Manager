import Lottie from 'lottie-react';
import React from 'react';

import heroLottie from '../../../../public/lottie/Web Design.json';

const UnderConstruction = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col items-center justify-center gap-10 md:gap-10 lg:gap-2'>


                <div>
                    <Lottie 
                      animationData={heroLottie}
                      loop
                      autoplay
                      className='w-[100%] h-auto mx-auto '
                    />
                </div>
                
            </div>
        </div>
    );
};

export default UnderConstruction;