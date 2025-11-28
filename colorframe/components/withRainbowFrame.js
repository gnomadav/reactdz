import React from 'react';

function withRainbowFrame (colors){
    return function(WithRainb){
        return class extends React.Component{
            render(){
                let content = <WithRainb {...this.props}/>;
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
    }
}

export default withRainbowFrame;