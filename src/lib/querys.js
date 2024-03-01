import { gql } from "@apollo/client";

// Fetch all posts from the database
export const GET_ALL_POSTS = gql`
  query GetAllPost {
    posts {
      nodes {
        id
        date
        databaseId
        content
        title
        slug
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

// Fetch post by id or slug
export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    post(id: $id) {
      id
      authorId
      content
      featuredImage {
        node {
          uri
          altText
        }
      }
    }
  }
`;
