import {gql} from '@apollo/client';

export const GET_NOVELS = gql`
query Novels {
  novels {
    id
    title
    createdAt
    updatedAt
    image
    author {
      id
      name
      novelID
    }
  }
}
`