import React from "react";
import Players from "./components/Players";
import Navigation from "./components/Navigation";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(res => {
        console.log("Master we got it", res);
        this.setState({
          players: res
        });
      })
      .catch(err => {
        console.log("You gotta be faster than", err);
      });
  }

  render() {
    return (
      <Container className="Container">
        <Navigation />
        <h1>Soccer Players</h1>
        <Players players={this.state.players} />
      </Container>
    );
  }
}

export default App;
