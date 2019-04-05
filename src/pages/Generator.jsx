import React from "react";
import "./Generator.scss";
import SVG from "./SVG";

class Generator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      letters: [],
    }
    // this.myInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.myInput.current.focus()
    // console.log(this.state.value);
  }

  // handleChange(event) {
  //   console.log(event.currentTarget);
  //   this.setState({
  //     value: event.currentTarget.value,
  //     letters: {
  //       ...this.state.letters,
  //       [event.currentTarget.value]: {
  //         visibility: ![event.currentTarget.value].visibility
  //       }
  //     }

  //   });
  // }
  handleChange(event) {
    // console.log(event);
    let lettera = event.currentTarget.value.split("");
    // console.log(lettera);

    this.setState({
      value: event.currentTarget.value,
      letters: lettera
    });
    // console.log(this.state.letters)
    
  }

  render() {
    return (
      <div className="container">
        <div className="gruppo-svg">
          <SVG value={this.state.value} length={this.state.value.length} />
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