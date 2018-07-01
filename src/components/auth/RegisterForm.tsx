import * as React from 'react'

interface IProps {
}

interface IState {
}

export default class RegisterForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <ul>
            <li><input type="text" placeholder="Username" /></li>
            <li><input type="password" placeholder="Password" /></li>
            <li><input type="text" placeholder="Password Confirmation" /></li>
            <li><button type="submit">Submit</button></li>
          </ul>
        </form>
      </div>
    )
  }
}
