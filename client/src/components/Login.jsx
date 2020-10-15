import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
        [name] : value
    });
  }


  handleSubmit(){

  }



  render() {
    return (
      <div className=" LoginForm ">
        <form onSubmit={this.handleSubmit}>
          {
            //handle error condition
          }
          <label>User Name</label>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
