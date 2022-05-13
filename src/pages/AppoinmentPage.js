import { data } from 'autoprefixer';
import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment/AvailableAppoinment';

const AppoinmentPage = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
        </div>
    );
};

export default AppoinmentPage;