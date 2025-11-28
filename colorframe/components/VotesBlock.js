import React from 'react';
import PropTypes from 'prop-types';

import ColorFrame from './ColorFrame';
import DoubleBt from './DoubleBt';
import withRainbowFrame from './withRainbowFrame';

class VotesBlock extends React.Component {


  state = {
    colors:['red','orange','yellow','green','#00BFFF','blue','purple']
  };
  

  render() {
    let text="первый<br>второй<br/>третий<br />последний";
    let FramedDoubleButton=withRainbowFrame(this.state.colors)(DoubleBt);

    return (
      <div className='VotesBlock'>
          <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>в студёную зимнюю</FramedDoubleButton>
      </div>
    );

  }

}

export default VotesBlock;
