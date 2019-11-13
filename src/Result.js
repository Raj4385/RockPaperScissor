import React, {Component} from 'react';
import Rock from '../src/assets/rock.png';
import Paper from '../src/assets/paper.png';
import Scissor from '../src/assets/scissor.png';

export default class Home extends Component {

    getSelectedImage(value)
    {
        if(value == 0)
        return <img src={Rock} style={{width: '75px', height: '75px'}}/>
        else if(value == 1)
        return <img src={Paper} style={{width: '75px', height: '75px'}}/>
        else if(value == 2)
        return <img src={Scissor} style={{width: '75px', height: '75px'}}/>
    }

render()
{
    console.log("user: "+ this.props.value1 +", "+ "computer :" + this.props.value2)
    console.log(this.props.preMode)
    var a = this.props.value1;
    var b = this.props.value2;
    var ChangeMode = this.props.onModeChange;
    if(a != undefined)
    var valueImage1 = this.getSelectedImage(a);
    var valueImage2 = this.getSelectedImage(b);
    var gameResult = '';

    if(a != undefined)
    {
    if (a == b) gameResult = 'Game Tie!';
    else if ((a - b + 3) % 3 == 1) gameResult = this.props.preMode == 'Player' ? 'You Won!' : 'Computer 2 Won';
    else gameResult = this.props.preMode == 'Player' ? 'You Loss!' : 'Computer 1 Won';
    }
    else
    gameResult = 'You Foul!';


    return(
        <div className="center">
        <table style={{width: '100%'}}>
            <tr>
            <td colSpan="2" style={{paddingTop: '100px'}}>{valueImage2}</td>
            </tr>
            <tr>
            <td colSpan="2" style={{paddingTop: '25px'}}>{gameResult}</td>
            </tr>
            <tr>
            {this.props.preMode == 'Player' ?
            <td style={{paddingTop: '100px', width: '100px !important'}}><button className="smallbutton" onClick={()=>{ChangeMode('Player',0,0,'Home')}}>Play again!</button><br /></td> :
            <td style={{paddingTop: '100px', width: '100px !important'}}><button className="smallbutton" onClick={()=>{ChangeMode('Computer',0,0,'Home')}}>Play again!</button><br /></td>
            }
            <td style={{paddingTop: '100px', width: '100px !important'}}><button className="smallbutton" onClick={()=>{ChangeMode('Home',0,0,'Home')}}>Change Mode</button></td>
            </tr>
            <tr>
            <td colSpan="2" style={{paddingTop: '100px'}}>{valueImage1}</td>
            </tr>
        </table>
        </div>
    );
}
}