import React , {Component} from 'react';
import './mAdd.css'

class mAdd extends Component{

constructor(props){
    super(props);
    this.state={
        mName:'',
        mRelease:'',
        mRating:'',
        chars_left: '',
        errors: {}
    }
    this.movieData = [];
    this.max_chars =150
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handlesubmit(e){
    e.preventDefault();
    
      //Handling form validations
    let fields = this.state;
    let errors = {};
    let formIsValid = true;
    //Name
    if(!fields["mName"]){
        formIsValid = false;
        errors["mName"] = "Cannot be empty";
      }
  
    //   if(typeof fields["mName"] !== "undefined"){
    //     if(!fields["mName"].match(/^[a-zA-Z]+$/)){
    //       formIsValid = false;
    //       errors["mName"] = "Only letters";
    //     }      	
    //   }

      // Release Date
    if(!fields["mRelease"]){
        formIsValid = false;
        errors["mRelease"] = "Cannot be empty";
      }

      // Ratings
        if(!fields["mRating"]){
        formIsValid = false;
        errors["mRating"] = "Cannot be empty";
      }
  
      if(typeof fields["mRating"] !== "undefined"){
        if(!fields["mRating"].match(/^[0-9]+$/)){
          formIsValid = false;
          errors["mRating"] = "Only Numbers";
        }      	
      }

      // Comments
      if(!fields["chars_left"] || fields["chars_left"] == this.max_chars){
        formIsValid = false;
        errors["chars_left"] = "Cannot be empty";
      }
  

      this.setState({errors: errors});
      if(formIsValid){   
          this.movieData.push(this.state);
          localStorage.setItem('data', JSON.stringify(this.movieData));  
          this.refs.myForm.reset();   //to reset the form
        }   
    return formIsValid;
}

handleName(e){
    this.setState({mName:e.target.value});
}
handleRelease(e){
    this.setState({mRelease:e.target.value});
}
handleRating(e){
    this.setState({mRating:e.target.value});
}

handleChange(e) {      //count characters 
    let input = e.target.value;
    this.setState({
        chars_left: this.max_chars - input.length
    });
}
render(){
    return(
        <div className='mAddContainer'>
                    <div className='mAddTitle'>Enter Your Movie Details Here!!</div>
                        <form  onSubmit= {this.handlesubmit} ref="myForm" id= 'myForm' className='formContainer'>
                        <div className="formElements clearfix">
                            <div className='titles'><b>Movie Name</b></div> 
                            <input type='text' id='mName' onChange={this.handleName}   placeholder='Enter text'></input>
                            <span className="error">{this.state.errors["mName"]}</span>
                        </div>
                        <div className="formElements clearfix">
                            <div className='titles'><b>Release Date</b></div>
                            <input type='date' id='mReleaseDAte' onChange={this.handleRelease}  placeholder='Enter Date'></input>
                            <span className="error">{this.state.errors["mRelease"]}</span>
                        </div>
                        <div className="formElements clearfix">
                            <div className='titles'><b>Ratings     </b></div><input type='text' id='mRating' onChange={this.handleRating}  placeholder='Enter Number'></input>
                            <span className="error">{this.state.errors["mRating"]}</span>
                        </div>
                        <div className="formElements clearfix">
                            <div className='titles'><b>Comments</b></div>
                            <input type='textarea' onChange={this.handleChange.bind(this)} maxLength='150' placeholder='Enter text'></input>
                            <span className="error">{this.state.errors["chars_left"]}</span> 
                        </div>
                        <div className="formElements clearfix">
                            <p className="charLeft">Characters Left: {this.state.chars_left}</p>    
                     </div>   
                        <button type='submit'className='submitClass'>Submit Data</button>
                         </form>
        </div>
    );
}


}

export default mAdd;