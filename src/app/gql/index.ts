import Mutations, {defaultValues as mutationDefaults } from './Mutations'

const Resolvers = {
  Mutation: Mutations
}
const ResolverDefaults = {
  ...mutationDefaults,
}

export {
  Mutations,
  Resolvers,
  ResolverDefaults,
}
