import { ApolloQueryResult } from 'apollo-client'
import * as React from 'react'
import { compose, graphql } from 'react-apollo'
import { getAuth, login } from './AuthQueries.gql'

interface IProps {
  isAuthed: boolean,
  login: (username: string, password: string) => Promise<ApolloQueryResult<{}>>, // tslint:disable-line no-any
}

interface IState {
  password: string,
  username: string,
}

class LoginForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      password: '',
      username: '',
    }
  }

  handleInput = (event: React.FormEvent<HTMLInputElement>, key: string) => {
    const {value} = event.currentTarget
    this.setState(ps => {
      ps[key] = value
    })
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <h2>{this.props.isAuthed ? 'LogIn Again' : 'Login'}</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Username"
                onInput={e => this.handleInput(e, 'username')}
              />
            </li>
            <li>
              <input
                type="password"
                placeholder="Password"
                onInput={e => this.handleInput(e, 'password')}
              />
            </li>
            <li>
              <button
                type="submit"
              >
                Submit
              </button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(login, {
    props: ({ mutate }) => ({
      login: (username, password) => mutate({ variables: { username, password } })
    }),
  }),
  graphql(getAuth, {
    props: ({ data: { authorization, loading, error } }) => {
      if (loading) {
        return { loading }
      }

      if (error) {
        return { error }
      }

      return {
        isAuthed: authorization.isAuthed,
        isLoading: loading,
      }
    },
  }),
)(LoginForm)
