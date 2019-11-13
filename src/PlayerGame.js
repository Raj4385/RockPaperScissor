import React, {Component} from 'react';
import Rock from '../src/assets/rock.png';
import Paper from '../src/assets/paper.png';
import Scissor from '../src/assets/scissor.png';
import Timer from '../src/Timer';

export default class PlayerGame extends Component {

    OptionSelection(PlayerSelectedOption)
    {
        if(PlayerSelectedOption == undefined && this.props.Mode != 'Player')
            PlayerSelectedOption = this.getRandomInt(0,2);
        var ComputerSelectedOption = this.getRandomInt(0,2);
        var callParent = this.props.onModeChange;
        callParent('Result', PlayerSelectedOption, ComputerSelectedOption,this.props.Mode);
    }

    getRandomInt(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

render()
{
    var ChangeMode = this.props.onModeChange;
    return(
        <div className="center">
        <table style={{width: '100%'}}>
            <tr>
            <td colSpan='3' style={{paddingTop: '100px'}}><Timer foul={() => {this.OptionSelection()}} /></td>
            </tr>
            <tr>
            <td colSpan='3'><label>{this.props.Mode == 'Player' ? 'Computer' : 'Computer 1'}</label><br /></td>
            </tr>
            <tr><td colSpan='3'><hr/></td></tr>
            <tr>
            <td colSpan='3'><label>{this.props.Mode == 'Player' ? 'Player' : 'Computer 2'}</label><br /></td>
            </tr>
            {this.props.Mode == 'Player' ?
            <tr>
            <td colSpan='3' style={{paddingTop: '100px'}}><label>Choose your move</label><br /></td>
            </tr> : ""}
            {this.props.Mode == 'Player' ?
            <tr>
            <td style={{paddingTop: '10px'}}><img src={Rock} onClick={() => {this.OptionSelection(0)} } style={{width: '75px', height: '75px'}} /></td>
            <td style={{paddingTop: '10px'}}><img src={Paper} onClick={() => {this.OptionSelection(1)}}  style={{width: '75px', height: '75px'}} /></td>
            <td style={{paddingTop: '10px'}}><img src={Scissor} onClick={() => {this.OptionSelection(2)} } style={{width: '75px', height: '75px'}} /></td>
            </tr> : ""
            }
        </table>
        </div>
    );
}
}
