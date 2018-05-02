import React from "react";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.startGame = this.startGame.bind(this);
    }

    startGame() {

    }


    render() {
        return (
            <button onClick={this.startGame}>Start the game!</button>
        )
    }
}

export default Game;