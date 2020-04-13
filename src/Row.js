import React from 'react'
//import Cell from './Cell'
//import './Row.css'
import { Fragment } from 'react'
//import './Cell.css'


//export default function Row(props)
//class Row extends React.Component 
export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            button: [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, '/', '*', '-', '+']
            // mark: this.props.player1MovesCell.includes(cellVal) ? 'X' : player2MovesCell.includes(cellVal) ? 'O' : ''
        }
    }
    /*
        const { rowVal, // = 1, 2, 3
            clickMoveRow, // f handleOnClcik
            player1MovesRow,
            player2MovesRow } = props
            */

    //let cellArr = ['a', 'b', 'c'];

    Cell(idk) {

        return (
            <Fragment>
                <button type="button">{idk}</button>
            </Fragment>
        )
    } 


    //const setMark = (idk) => {console.log(idk)}

    render() {
        //console.log(this.state.xOrO);
        return (
            <div className='row-wrap'>
                {this.state.button.map((item, key) => (
                    <button type='button'>{item}</button>
                ))}
            </div>
        )
    }
}