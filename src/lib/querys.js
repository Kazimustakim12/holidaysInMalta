import { gql } from "@apollo/client";

// Fetch all posts from the database
export const GET_ALL_POSTS = gql`
  query GetAllPost {
    posts {
      nodes {
        id
        content
        date
        databaseId
        content
        title
        slug
        tags {
          nodes {
            name
            id
          }
        }
        categories {
          nodes {
            id
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
  query getPostById($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      tags {
        nodes {
          name
          id
        }
      }
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
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
    }
  }
`;

// pagination
export const GET_POST_BY_PAGINATION = gql`
  query GET_PAGINATED_POSTS($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          content
          date
          databaseId
          content
          title
          slug
          tags {
            nodes {
              name
              id
            }
          }
          categories {
            nodes {
              id
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
  }
`;
