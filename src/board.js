import React, { Component } from 'react'
import Row from './Row.js'
//import './src/components/board/row.js'
//import VictoryModal from '../victoryModal/VictoryModal'
//import CatModal from '../catModal/CatModal'
//import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: '',
            buttons: ['/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0],
            equals: '=',
            clear: "C"
        }
    }

    onClickV2 = (e) => {
        this.setState({ screen: this.state.screen + `${e.target.id}` })
    }

    fixBugs = () => {
        if (isNaN(this.state.screen[0])) {
            const takeAwayFirstOfString = this.state.screen;
            const newBeginning = takeAwayFirstOfString.substring(1);

            this.setState({
                screen: newBeginning
            });
        } else if (isNaN(this.state.screen[this.state.screen.length - 1])) {
            const takeAwayLastString = this.state.screen;
            const newEnding = takeAwayLastString.substring(0, takeAwayLastString.length - 1);

            this.setState({
                screen: newEnding
            });
        }
    }

    evaluate = () => {

        this.fixBugs()

        const currentScreen = this.state.screen;

        const evaluated = eval(currentScreen);

        this.setState({screen: `${evaluated}`
        })
    }

    clear = () => {
        this.setState({
            screen: ''
        })
    }

    render() {
        return (
            <div className='board-wrap'>
                <h1>Calculator</h1>
                <h2>{this.state.screen}</h2>

                <div class="theButtons">{this.state.buttons.map((item, key) => (
                    <div class="individualButtons" id={item} onClick={this.onClickV2}>{item}</div>
                ))}

                    <div class="individualButtons" onClick={this.evaluate }>{this.state.equals}</div>

                    <div class="individualButtons" onClick={this.clear}>{this.state.clear}</div>
                </div>
            </div>
        )
    }
}

/*
this.setState({
            screen: evaluated
        })
*/