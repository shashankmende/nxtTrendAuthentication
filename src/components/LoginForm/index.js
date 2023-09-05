// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', ErrorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
      ErrorMsg: '',
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
      ErrorMsg: '',
    })
  }

  render() {
    const {username, password, ErrorMsg} = this.state

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="website-login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="username-container">
            <label htmlFor="username" className="username-label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input-element"
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="username-container">
            <label htmlFor="password" className="username-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input-element"
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-classname">{ErrorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
