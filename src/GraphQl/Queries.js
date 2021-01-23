import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
  {
    jobs {
      title
      locationNames
      applyUrl
      description
      userEmail
      postedAt
    }
  }
`;
