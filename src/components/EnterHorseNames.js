import React from "react";

export default class EnterHorseNames extends  React.Component {
    render() {
        return (
            <label>
                Stallfrukt 1: <input type='text' name='stallfrukt_1' />
                Stallfrukt 2: <input type='text' name='stallfrukt_2' />
                Stallfrukt 3: <input type='text' name='stallfrukt_3' />
                Stallfrukt 4: <input type='text' name='stallfrukt_4' />
            </label>
        )
    }
}