import React, { Component } from 'react';

class CodeBox extends Component {

    state={
        rows : 1
    }
    ReadEnter =(e)=>{
        if(e.key==='Enter'){alert('what is this?')}
        this.setState({
            rows: this.rows+=10
        })
    }

    render() { 
        return (

<textarea className="form-control" name="code" rows="10" cols="50" style={{}}></textarea>                
            );
    }
}
 
export default CodeBox;