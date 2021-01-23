import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createJob(
    $title: String!
    $locationNames: String!
    $applyUrl: String!
    $userEmail: String
  ) {
    createJob(
        title: $title
        locationNames: $locationNames
        applyUrl: $applyUrl
        userEmail: $userEmail
    ) 
  }
`;