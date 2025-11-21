import React from 'react';
import PropTypes from 'prop-types';

import ColorFrame from './ColorFrame';
import BR2 from './BR2';

class VotesBlock extends React.Component {

  static propTypes = {
    
  };

  state = {
    colors:['red','orange','yellow','green','#00BFFF','blue','purple']
  };

  render() {
    let text="первый<br>второй<br/>третий<br />последний";

    return (
      <div className='VotesBlock'>
        <ColorFrame colors= {this.state.colors}>
          <BR2 text={text} />
        </ColorFrame>
      </div>
    );

  }

}

export default VotesBlock;
