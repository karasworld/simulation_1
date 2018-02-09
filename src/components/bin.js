import React, {Component} from 'react';

export default class Bin extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }

        //binding
    }

    //event handlers


    render(){
        return(
            <div className="bin-main">
                <div className="bin-header">
                    <div className="head-img">    </div>
                    <div className="head-title">  </div>
                </div>
                <div className="bin-content-header">
                    <div className="bin-content">
                     <span>Bin</span>
                    </div>
                    <div className="bin-intentory">
                     <span>+ Add intentory to bin</span>
                    </div>
                    <div className="bin-intentory">
                     <span>+ Add intentory to bin</span>
                    </div>
                    <div className="bin-intentory">
                     <span>+ Add intentory to bin</span>
                    </div>
                    <div className="bin-intentory">
                     <span>+ Add intentory to bin</span>
                    </div>
                </div>
            </div>

        )
    }

}