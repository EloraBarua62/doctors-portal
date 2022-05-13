import React from 'react';
import Card from './Card';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

const ServiceCard = () => {

    const services = [
        { id: 1, title: 'aijewmcpjar', description: 'lorem10' ,img:fluoride},
        { id: 2, title: 'aiwr3jpolcpodfa', description: 'lorem10' ,img:cavity},
        { id: 3, title: 'far9uxcm09wkr', description: 'lorem10' ,img:whitening}
    ];

    return (
        <div className='px-12 py-12'>
            <h1 className='text-2xl text-primary text-center uppercase font-bold'>Our service</h1>
            <h1 className='text-4xl text-accent text-center capitalize font-bold'>Services we provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Card
                    key={service.id}
                    service={service}
                    ></Card>)
                }

                {/* <Card img={fluoride} title='aijewmcpjar' color='bg-gradient-to-r from-primary to-secondary'></Card>
                <Card img={cavity} title='aiwr3jpolcpodfa' color='bg-accent'></Card>
                <Card img={whitening} title='far9uxcm09wkr' color='bg-gradient-to-r from-primary to-secondary'></Card> */}
            </div>


            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ServiceCard;