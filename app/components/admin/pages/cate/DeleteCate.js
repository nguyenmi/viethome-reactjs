import React from 'react';
import axios from 'axios';
import ListCate from 'ListCate';

class DeleteCate extends React.Component{
    constructor(props, context) {
        super(props, context);
            
        }
    
    
    render(){
        return (
            <div>
                <ListCate handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

module.exports = DeleteCate;
