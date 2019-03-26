import React from "react";

// import Generator from "./Generator";
import { Player } from "video-react";
// import video from '../img/main_xbacco_conv.mov';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero">
          <Player>
            <source src="../img/main_xbacco_conv.mov" />
          </Player>
        </div>
      </>
    );
  }
}
export default Home;
