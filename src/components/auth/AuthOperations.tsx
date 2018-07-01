import { graphql } from 'react-apollo'
import { getAuth } from './AuthQueries.gql'

// tslint:disable-next-line no-any
export const connectIsAuthed = (Component: any) => graphql(getAuth, {
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
})(Component)
