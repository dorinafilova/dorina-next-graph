import { gql } from "@apollo/client";

export const ADD_NOVEL = gql`
  mutation Mutation($image: String, $title: String) {
    addNovel(image: $image, title: $title) {
      createdAt
      updatedAt
      id
      title
      image
      author {
        id
        name
        novelID
      }
    }
  }
`;
