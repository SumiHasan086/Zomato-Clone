import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import TabOptions from '../../components/common/TabOptions'
import Delivery from '../../components/Delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState('Delivery')



  return (
    <div>
      <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
      </div>
    </div>
  )
};


const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <Delivery />;
    case 'Dining Out':
      return <DiningOut />;
    case 'Nightlife':
      return <NightLife />;
    default:
      return <Delivery />;
  }
};


export default HomePage