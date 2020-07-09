import React, { Component } from 'react';
import './App.css';
import CodeBox from './components/codeField';
import InputBox from './components/input';
import Footer from "./components/footer";

class HomePage extends Component {

    constructor(props){
      super(props);
      this.state = {apiResponse : ""}
}

callAPI(){
    fetch("http://localhost:3001/send")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))
    .catch(err => err)
}

componentDidMount(){
    this.callAPI();
}

    render() { 
        return ( 
            <div>

<div>
   
</div>      

<div>
    <h2 className="header">Online Compiler</h2>
</div>

<div style={{paddingLeft:"180px" , paddingRight:"360px" , paddingTop:'40px'}}> 
    <h5 style={{}}>Choose a language<br></br></h5>
<select className="form-control" name="language" style={{ }}>
  <option value="C">C</option>
  <option value="C++">C++</option>
  <option value="C++11">C++11</option>
  <option value="Java">Java</option>
</select>
</div>

<div style={{paddingLeft:"180px" , paddingRight:"360px" , paddingTop:'40px'}}>
    <h5 style={{ }}>Write your code<br></br></h5><p>{this.state.apiResponse}</p>
    <CodeBox/>

</div>
<div style={{paddingLeft:"180px" , paddingRight:"360px" , paddingTop:'40px'}}>
    <h5 style={{ }}>Input<br></br></h5>
    <InputBox/>
    <button className="btn btn-success footer-item rel-tooltip" style={{marginTop:"40px" }}><i class="fa fa-cogs" aria-hidden="true"></i>
 Run</button>
</div>
<br></br><br></br><br></br><br></br>

</div>
         );
    }
}
 
export default HomePage;