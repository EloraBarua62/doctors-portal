import { format } from 'date-fns';
import React from 'react';
import AppoinmentCard from './AppoinmentCard';

const AvailableAppoinment = ({date}) => {
    const appoinments = [
        { id: 1, title: 'Teeth Orthodontics', description: '10 Space available', time: '8.00 AM - 9.00 AM' },
        { id: 2, title: 'Cosmetic Dentistry', description: '10 Space available', time: '10.05 AM - 11.30 AM' },
        { id: 3, title: 'Teeth Cleaning', description: '10 Space available',     time: '8.00 AM - 9.00 AM' },
        { id: 4, title: 'Teeth Orthodontics', description: '10 Space available', time: '8.00 AM - 9.00 AM' },
        { id: 5, title: 'Cosmetic Dentistry', description: '10 Space available', time: '8.00 AM - 9.00 AM' },
        { id: 6, title: 'Teeth Cleaning', description: '10 Space available',     time: '8.00 AM - 9.00 AM' },
    ];


    return (
        <div>
            <h1 className='text-center text-primary font-bold pb-5'>You selected : {format(date, 'PP')}.</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>
                {
                    appoinments.map(appoinment => <AppoinmentCard
                        key={appoinment.id}
                        appoinment={appoinment}
                    ></AppoinmentCard>)
                }
            </div>
            
        </div>
    );
};

export default AvailableAppoinment;