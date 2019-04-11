import React from "react";
import "./Generator.scss";
import SVG from "./SVG";

class Generator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      parola: '',
      value: '',
      letters: [],
    }
    // this.myInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    let lettera = event.currentTarget.value.split("");
    // console.log(lettera);

    this.setState({
      value: event.currentTarget.value,
      parola: event.currentTarget.parola,
      letters: lettera
    });
    // console.log(this.state.parola)
    
  }

  render() {
    return (
      <div className="container">
        <div className="gruppo-svg">
          <SVG value={this.state.value[this.state.value.length - 1]} length={this.state.value.length}/>
          {/* <SVG value={this.state.value[this.state.value.length - 1]} lenght={this.state.value.length + 1} /> */}
        </div>
        <input
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
      </div>
    );
  }
}
export default Generator;