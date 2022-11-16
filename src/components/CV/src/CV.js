import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { ImageBackground } from 'react-native';

// import reportWebVitals from './reportWebVitals';
// import Sidebar from './component/Sidebar/Sidebar'
import Card from './component/Card/Card'
import './css/index.css'
import './component/Card.css'

const Cv = () => {
      const localImage = require("../../../images/background.webp"); 
  return (
      <div>
       {/* <ImageBackground source={localImage} resizeMode='cover'/> */}
        <Card />
        </div>
      )
}

      export default Cv