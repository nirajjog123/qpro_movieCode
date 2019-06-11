import React , {Component} from 'react';
import './mList.css';

class mList extends Component{

constructor(props){
    super(props);
}

render(){
    let data = JSON.parse(localStorage.data);

    let movieData =   data.map((element, index) => {   //render rows dynamically
      
        return (
           <tr key={index}>
              <td>{element.mName}</td>
              <td>{element.mRelease}</td>
              <td>{element.mRating}</td>
           </tr>
        )
     })
  
    return(
    <div className='listContainer'>
        <div className='mAddTitle'>Your Movie List Is Here!!</div>
        <table id='tableData' align="center" className='center'>
            <tbody>
        <tr>
            <th>Movie Name</th>
            <th>Relese Date</th>
            <th>Ratings</th>
        
        </tr>
        {movieData}
        </tbody>
        </table>
         </div>
    );
}
}

export default mList;