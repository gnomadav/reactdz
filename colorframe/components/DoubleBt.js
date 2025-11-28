import React from "react";

class DoubleBt extends React.Component{

    render(){
        const { caption1, caption2, cbPressed, children } = this.props;
        return (
            <div>
                <button
                    onClick = {() => cbPressed(1)}
                >
                    {caption1}
                </button>
                <span>{children}</span>
                <button
                    onClick={() => cbPressed(2)}
                >
                    {caption2}
                </button>
            </div>
        );
    }
}

export default DoubleBt;