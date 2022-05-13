import React from 'react';
import Info from './Info';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const cardGroup = [
    { id: 1, title: 'aijewmcpjar', description: 'lorem10'},
    { id: 2, title: 'aiwr3jpolcpodfa', description: 'lorem10'},
    { id: 3, title: 'far9uxcm09wkr', description: 'lorem10'},
];


const InfoCart = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <Info img={clock} title='aijewmcpjar' color='bg-gradient-to-r from-primary to-secondary'></Info>
            <Info img={marker} title='aiwr3jpolcpodfa' color='bg-accent'></Info>
            <Info img={phone} title='far9uxcm09wkr' color='bg-gradient-to-r from-primary to-secondary'></Info>
            {/* {
                cardGroup.map(card => 
                    <Info
                    key={card.id}
                    card={card}
                    
                    ></Info>
                    )
            } */}
            
        </div>
    );
};

export default InfoCart;