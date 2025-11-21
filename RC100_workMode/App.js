import React from 'react';
import ReactDOM from 'react-dom';


const shopName='';

import answersArr from './answers.json';
import Main from './components/VotesBlock';

ReactDOM.render(
  <Main 
    sname={shopName}
    shoplist={answersArr}
  />
  , document.getElementById('container') 
);
