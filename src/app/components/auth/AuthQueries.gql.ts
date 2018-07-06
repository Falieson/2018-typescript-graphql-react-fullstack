import gql from 'graphql-tag'

export const getAuth = gql`
query {
  authorization @client {
    isAuthed
  }
}
`

export const login = gql`
mutation ($username: String, $password: String) {
  authLogin(username: $username, password: $password) @client
}
`
