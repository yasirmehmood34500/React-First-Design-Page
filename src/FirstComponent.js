import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './FirstComponent.css';


class FirstComponent extends Component{
    render(){
        return <h1 className="first_class"> hello {this.props.name} </h1>
    }
}
export default FirstComponent;