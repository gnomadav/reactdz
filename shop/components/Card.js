import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {


  static propTypes = {
      name: PropTypes.string.isRequired,
      text: PropTypes.string,
      count: PropTypes.number,
      url: PropTypes.string
    };

  render() {

      return (
        <div className='CardCont'>
          <div className='cardName'>{this.props.sname}</div>
          <div className='cardDesc' onClick= {() => this.props.CbSelected(this.props.code)} style={{backgroundColor:this.props.isSelected?"yellow":"white"}}>
            <img src={this.props.url}  className="cardImage" />
            <span className='Text'>{this.props.text}</span>
            <span className='Price'>{this.props.count} rub</span>
          </div>
        </div>
      );

  }

}

export default Card;
