import React from 'react';

import './VotesBlock.css';

import Card from './Card';

class Main extends React.Component {
  state = {
    selectedItemCode: null
  }

  selectItem = (code) => {
    this.setState({selectedItemCode:code})
  }

  render() {

    const cardlist=this.props.shoplist.map( v =>
      <Card url={v.url}
        name = "card"
        key={v.code}
        text={v.name} 
        count={v.price} 
        code={v.code}
        isSelected = {this.state.selectedItemCode === v.code}
        CbSelected = {this.selectItem}
      />
    );

    return (
      <div className='cardM'>{cardlist}</div>
    );

  }

}

export default Main;
