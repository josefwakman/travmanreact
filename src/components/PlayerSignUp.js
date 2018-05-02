import React from "react";
import PlayerForm from "./PlayerForm.js"

export default class PlayerSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextPlayerID: 1,
            playerInfoArr: [{
                playerID: 0,
                name: "Josef",
                horse: "",
                sips: "",

            }]
        };

        this.addPlayerForm = this.addPlayerForm.bind(this);
        this.playerRemove = this.playerRemove.bind(this);
        this.renderPlayerForms = this.renderPlayerForms.bind(this)
    }

    addPlayerForm(event) {
        // this.setState({nextPlayerID: this.state.nextPlayerID + 1});
        const playerInfoToAdd = {
                playerID: this.state.nextPlayerID,
                name: "",
                horse: "",
                sips: "",
            };
        const playerInfoArr = this.state.playerInfoArr.slice();
        playerInfoArr.push(playerInfoToAdd);
        this.setState({
            playerInfoArr: playerInfoArr,
            nextPlayerID: this.state.nextPlayerID + 1
        });
        console.log("state:", this.state);
    }

    renderPlayerForms() {
        const playerFormArr = [];
        for (let i = 0; i < this.state.playerInfoArr.length; i++) {
            playerFormArr.push(<PlayerForm
                key={this.state.playerInfoArr[i].playerID}
                playerRemove={this.playerRemove}
                playerInfo={this.state.playerInfoArr[i]}
            />);
        }
        return playerFormArr;
    }

    playerRemove(id) {
        const indexToRemove = this.state.playerInfoArr.findIndex(
                (playerInfoArr) => playerInfoArr.playerID === id);
        console.log("index to remove: ", indexToRemove);
        let playerInfoArr = this.state.playerInfoArr.slice();
        console.log(playerInfoArr);
        playerInfoArr.splice(indexToRemove, 1);
        console.log(playerInfoArr);
        this.setState(
            {playerInfoArr}
        )
    }



    render() {
        return (
            <div>
                <div className="PlayerForm-div">
                    {this.renderPlayerForms()}
                </div>

                <button onClick={this.addPlayerForm}>Add Player</button>
            </div>


        )
    }
}

