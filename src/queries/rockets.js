import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GET_ROCKETS = () => useQuery(gql`
query getRockets {
  rockets {
  id,
  name
  }
}
`)

export const GET_ROCKET = (id) => useQuery(gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      id,
      name,
      description
    }
  }
`, { id }
)