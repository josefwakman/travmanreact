import React from "react";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerID: props.playerInfo.playerID,
            name: props.playerInfo.name,
            horse: props.playerInfo.horse,
            sips: props.playerInfo.sips,
        }; // I don't really need the state, do I?

        this.removeThisComponent = this.removeThisComponent.bind(this);
    }

    removeThisComponent() {
        this.props.playerRemove(this.state.playerID);
    }

    render() {
        return (
            <div>
                <label>
                    Name: <input type='text' name='name' defaultValue={this.state.name}/>
                </label>

                <select defaultValue={this.state.horse}>
                    <option value="stallfrukt_1">Stallfrukt 1</option>
                    <option value="stallfrukt_2">Stallfrukt 2</option>
                    <option value="stallfrukt_3">Stallfrukt 3</option>
                    <option value="stallfrukt_4">Stallfrukt 4</option>
                </select>

                <label>
                    Amount of sips: <input type="number" name="sipAmount"/>
                </label>
                <button onClick={this.removeThisComponent}>Remove player</button>

            </div>
        )
    }
}


export default PlayerForm;
