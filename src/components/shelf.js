import React, {Component} from 'react';

export default class Shelf extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }

        //binding
    }

    //event handlers


    render(){
        return(
            <div className="shelf-main">
                <div className="shelf-header">
                    <div className="shelf-title">
                    <img/>
                    <span> SHELFIE </span>
                    </div>
                </div>
                <div className="shelf-content-header">

                </div>
            </div>
        )
    }
}