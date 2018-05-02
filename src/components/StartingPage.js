import React from "react"
import PlayerSignUp from "./PlayerSignUp.js"
import EnterHorseNames from "./EnterHorseNames.js"

class StartingPage extends React.Component {
    render () {
        return (
            <div>
                <EnterHorseNames />
                <br/>
                <br/>
                <PlayerSignUp />
            </div>
        )
    }
}

export default StartingPage;