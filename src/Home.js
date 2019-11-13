import React, {Component} from 'react';

export default class Home extends Component {
render()
{
    var ChangeMode = this.props.onModeChange;
    return(
        <div className="center">
        <table style={{width: '100%'}}>
            <tr>
            <td style={{paddingTop: '100px'}}><label>Select play mode</label><br /></td>
            </tr>
            <tr>
            <td style={{paddingTop: '100px'}}><button className="bigbutton" onClick={()=>{ChangeMode('Player',0,0,'Home')}}>Player VS Computer</button><br /></td>
            </tr>
            <tr>
            <td style={{paddingTop: '100px'}}><button className="bigbutton" onClick={()=>{ChangeMode('Computer',0,0,'Home')}}>Computer VS Computer</button></td>
            </tr>
        </table>
        </div>
    );
}
}