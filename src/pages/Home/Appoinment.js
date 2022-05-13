import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctorSmall from '../../assets/images/doctor-small.png'

const Appoinment = () => {
    return (
        <section className='flex items-center' style={{ background: `url(${appointment})`}}>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' src={doctorSmall} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-xl text-primary'>Appoinment</h1>
                    <h1 className='text-4xl text-white'>Make an appointment</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam velit nisi ipsa eius ea dolore esse, molestias consequatur repudiandae eveniet ut minus distinctio omnis aliquam blanditiis architecto mollitia ratione.</p>
                </div>
            </section>



        // <div class="hero min-h-screen" style={{ background: `url(${appointment})`}}>
        //     <div class="hero-overlay bg-opacity-60"></div>
        //     <div class="hero-content text-center text-neutral-content">
        //         <div class="max-w-md">
        //             <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button class="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Appoinment;