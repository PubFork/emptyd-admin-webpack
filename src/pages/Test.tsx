import React,{ Component } from 'react';
import { hot } from "react-hot-loader";
import { test } from './qq';


class Test extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
            <div className="test-font">
                <div onClick={test}>1111a2113dmin</div>
                <div>1111a2113dmin</div>
                <div>1113dmin</div>
                <div>1111a2113dmin</div>
                <div>2113dmin</div>
                <div>1111a2113dmin</div>
                <div>1111a2113dmin</div>
            </div>
		)
	}
}

export default hot(module)(Test)