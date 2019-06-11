import React , {Component} from 'react';
import './mInfo.css';


class mInfo extends Component{

constructor(props){
    super(props);
}

render(){
    let data = JSON.parse(localStorage.data);
    return(
        <div>
           <table id='tableData' className='mInfoTableContainer'>
            <tbody>
        <tr>
            <th>Movie Name</th>
            <th>Details</th>   
        </tr>
        <tr>
           <td className='cellClass'><img src='./A.jpg' alt='demo alt' className='imageFix'></img></td>
           <td> <div><b>Directed by</b>     :<i>Guy Ritchie</i></div><br/>
            <div>    <b>Produced by</b>     :<i>Dan Lin</i></div><br/>
            <div>    <b>Screenplay by</b>   :<i>John August</i></div><br/>
            <div>    <b>Starring</b>	     :<i>Will Smith,Mena Massoud,Naomi Scott</i></div><br/>
            <div>    <b>Music by</b>	     :<i>Alan Menken</i></div><br/>
            <div>    <b>Cinematography</b>	 :<i>Alan Stewart</i></div><br/>
            <div>    <b>Edited by</b>	     :<i>James Herbert</i></div><br/>
            <div>    <b>Production</b>      :<i>Walt Disney Pictures</i></div><br/>
            </td> 
        </tr>
        <tr>
        <td className='cellClass'><img src='./B.jpg' alt='demo alt' className='imageFix'></img></td>
           <td> <div><b>Directed by</b>     :<i>Guy Ritchie</i></div><br/>
            <div>    <b>Produced by</b>     :<i>Dan Lin</i></div><br/>
            <div>    <b>Screenplay by</b>   :<i>John August</i></div><br/>
            <div>    <b>Starring</b>	     :<i>Will Smith,Mena Massoud,Naomi Scott</i></div><br/>
            <div>    <b>Music by</b>	     :<i>Alan Menken</i></div><br/>
            <div>    <b>Cinematography</b>	 :<i>Alan Stewart</i></div><br/>
            <div>    <b>Edited by</b>	     :<i>James Herbert</i></div><br/>
            <div>    <b>Production</b>      :<i>Walt Disney Pictures</i></div><br/>
            </td> 
        </tr>
        <tr>
        <td className='cellClass'><img src='./C.jpg' alt='demo alt' className='imageFix'></img></td>
           <td> <div><b>Directed by</b>     :<i>Guy Ritchie</i></div><br/>
            <div>    <b>Produced by</b>     :<i>Dan Lin</i></div><br/>
            <div>    <b>Screenplay by</b>   :<i>John August</i></div><br/>
            <div>    <b>Starring</b>	     :<i>Will Smith,Mena Massoud,Naomi Scott</i></div><br/>
            <div>    <b>Music by</b>	     :<i>Alan Menken</i></div><br/>
            <div>    <b>Cinematography</b>	 :<i>Alan Stewart</i></div><br/>
            <div>    <b>Edited by</b>	     :<i>James Herbert</i></div><br/>
            <div>    <b>Production</b>      :<i>Walt Disney Pictures</i></div><br/>
            </td> 
        </tr>
        <tr>
        <td className='cellClass'><img src='./D.jpg' alt='demo alt' className='imageFix'></img></td>
           <td> <div><b>Directed by</b>     :<i>Guy Ritchie</i></div><br/>
            <div>    <b>Produced by</b>     :<i>Dan Lin</i></div><br/>
            <div>    <b>Screenplay by</b>   :<i>John August</i></div><br/>
            <div>    <b>Starring</b>	     :<i>Will Smith,Mena Massoud,Naomi Scott</i></div><br/>
            <div>    <b>Music by</b>	     :<i>Alan Menken</i></div><br/>
            <div>    <b>Cinematography</b>	 :<i>Alan Stewart</i></div><br/>
            <div>    <b>Edited by</b>	     :<i>James Herbert</i></div><br/>
            <div>    <b>Production</b>      :<i>Walt Disney Pictures</i></div><br/>
            </td> 
        </tr>
        
        </tbody>
        </table>

        </div>
        

    );
}


}

export default mInfo;