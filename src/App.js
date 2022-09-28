// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

export default class App extends Component {
 
  state = {
    Person: {
      fullName: "Bouaziz Rahma",
      bio: "2015 – 2016 : Diplôme de baccalauréat, section science expérimentale lycée public hedi chaker. Sfax",
      imgSrc: "images/florida.jpg",
      profession: "2018 – 2019 : Diplôme en licence fondamentale en informatique de gestion de la Faculté des Sciences Économiques et de Gestion .Sfax",
    },
    count: 0,
    shows: false,
  };



  etatshows = () => {
    this.setState({ shows: !this.state.shows });
  };

  test = () => this.setState({ count: this.state.count + 1 });
  componentDidMount() {
    console.log("componentDidMount");

    setInterval(this.test, 1000);
  }

  render() {
    // setInterval(this.state.count, 1000);

    return (
      <div className="DivTotal">
        <Button variant="primary" onClick={this.etatshows}  className="buttoncenter">
        {this.state.shows ? "Hide" : "Show"}
        </Button>
        { this.state.shows &&
         ( <div  className="DivTotal2">
           <div>
            <img src={this.state.Person.imgSrc}className="imgVoiture  " alt="" />
          </div>
          <h1 className="data fullName1">{this.state.Person.fullName} </h1>
          <h1 className="data">{this.state.Person.bio} </h1>
          <h1 className="data"> {this.state.Person.profession}</h1>
          {/* <h1 className="data"> {this.state.Person.profession}</h1> */}
          <h1 className="data"> {this.state.count}</h1>
         
        </div>)
        }












        <div>
          <div className="row  d-flex justify-content-start">
            <div className="col-4"></div>

            <div className="col-4">
              {/* <input type="text" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
