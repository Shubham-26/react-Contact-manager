import React from "react";

class AddContact extends React.Component {

     render(){
      return(
       <div className="ui main">
        <h2>AddContact</h2>
        <form className="ui form">
            <div className="ui container field">
                <label >Name</label>
                <input type="text" name="name" placeholder="Enter you Full Name"></input>
              
                </div>
                <div className="ui container field">
                      <label >Contanct</label>
                <input type="text" name="contact" placeholder="Enter Mobile Number"></input>
                </div>
                <div className=" ui container field">
                <label > Email</label>
                <input type="email" name="email" placeholder="Enter Email address "></input>
                </div>
                <div className=" ui container field">
                <button className="ui   button blue  ">
                    Add
                </button>
            </div>
        </form>
       </div>
      )
     }
}

export default AddContact