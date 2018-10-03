import React, { Component } from 'react';

class Content extends Component {
  constructor() {
    super()

     this.state = {
      tiempo: new Date().toLocaleTimeString()
    

    
    }


// setInterval(this.state.tiempo, 1000);
     
  }


  

  render() {

    return (
      
      
      <div>
          <h1>Hola colega</h1>
          <h2>la hora es   {this.state.tiempo}.</h2>
        </div>  
        
        
    
    );

  }



componentDidMount() {

  

 // function tick() {

 //      this.setState({
 //        tiempo: 
 //      })
 //     }
     // setInterval(tick, 1000);
  }
}

export default Content;


  //Contador
  // constructor(){
  //   super()
    
  //   this.state = {
  //     contador: 0
  //     }
  //     this.handleInc = this.handleInc.bind(this);
  //     this.handleDec = this.handleDec.bind(this);
  // }

  //   handleInc() {
  //     this.setState({
  //       contador: this.state.contador + 1
  //     });
  //   }

  //   handleDec() {
  //     this.setState({
  //       contador: this.state.contador - 1
  //     });
  //   }

  // render() {
  //   return (
  //     <div className="Content">
  //     <h1>Cuenta: {this.state.contador}</h1>
  //     <button onClick={this.handleInc}>+</button>
  //     <button onClick={this.handleDec}>-</button>
  //     </div>
  //   );
  // }



