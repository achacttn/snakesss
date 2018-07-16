import React, { PureComponent } from 'react';
import './style/Board.css';

class Board extends PureComponent {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        setInterval( this.movement, 500 )
    }


    movement = () => {
        var pos = this.props.stateObj.snakebody;
        var direction = this.props.stateObj.direction;
        switch (direction) {
            case 'ArrowLeft':
                this.props.snakePos( pos[0], (pos[1]-1 + this.props.stateObj.boardX)%this.props.stateObj.boardX );
                break;
            case 'ArrowRight':
                this.props.snakePos( pos[0], (pos[1]+1 + this.props.stateObj.boardX)%this.props.stateObj.boardX );
                break;
            case 'ArrowUp':
                this.props.snakePos( (pos[0]-1 + this.props.stateObj.boardY)%this.props.stateObj.boardY, pos[1] );
                break;
            case 'ArrowDown':
                this.props.snakePos( (pos[0]+1 + this.props.stateObj.boardY)%this.props.stateObj.boardY, pos[1] );
                break;
            default:
                break;
        }
        console.log('body square: ', pos, 'direction: ', direction);
    }

    render(){
        this.boardGenerator = () => {
            let dimArray = [];
            for ( let i=0; i<this.props.stateObj.boardX; i++ ){
                dimArray.push([])
                for ( let j=0; j<this.props.stateObj.boardY; j++ ){
                    dimArray[i].push(j);
                }
            }
            return dimArray;
        }

        this.generateSnake = (r, c) => {
            var pos = this.props.stateObj.snakebody;
            var classToggle = 'boardColumn'
            if( r === pos[0] && c === pos[1] ){
                return classToggle + ' snakeBody'
            } else {
                return classToggle;
            }
        }

        return (
            <div className="Board" tabIndex='0' onKeyDown={this.props.control}>
                {
                    this.boardGenerator().map( (row, rowIndex) => {
                        return (
                            <div key={rowIndex} className={'boardRow'}>
                                {
                                    row.map( (col, colIndex) => {
                                        return <div key={colIndex} className=
                                        {
                                            this.generateSnake(rowIndex, colIndex)
                                        }
                                        ></div>
                                    } )
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Board;