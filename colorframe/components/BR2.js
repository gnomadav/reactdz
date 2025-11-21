import React from "react";
import PropTypes from "prop-types";

class BR2 extends React.Component{
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render(){
        let clearLine = this.props.text.split(/\<br\s*\/?>/i);
        console.log(clearLine);
        const res=[];
        clearLine.forEach((line,index) => {
            res.push(line);
            if(index !== clearLine.length - 1){ //тут смотрим чтобы последний не получил бр
                res.push(<br key={index}/>)
            }
        });
        console.log(res);
        return <div style={{ backgroundColor: "grey", textAlign: "center"}}>{res}</div>
    }
}

export default BR2;