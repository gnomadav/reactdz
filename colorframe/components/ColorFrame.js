import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
    
  render() {

    const colors = this.props.colors;
    const children = this.props.children;
    
    let content = children;//тут это работает как снежный ком(сначала у нас только пропс тут,а потом в процессе итерации )

    colors.forEach(color => {
      content = (
        <div style={{ padding: "10px",border: "solid 5px " + color,}}>
          {content}
        </div>
      );
    });

    return content;
  }
}

export default ColorFrame;

