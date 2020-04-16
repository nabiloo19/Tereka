import gql from 'graphql-tag';

/**
 * token : {userID, Image, userType, selectedTheme}
 *
 */

// LOGIN
const SIGNIN_USERMUTATION = gql`
  mutation SIGNIN_USERMUTATION($email: String!, $password: String!) {
    signInUser(email: {email: $email, password: $password}) {
      Auth {
        token
        user {
          id
          theme
        }
      }
    }
  }
`;

// SIGNUP
const SIGNUP_USERMUTATION = gql`
  mutation SIGNUP_USERMUTATION(
    $name: String!
    $email: String!
    $password: String!
    $theme: String
  ) {
    signUpUser(
      values: {name: $name, email: $email, password: $password, theme: $theme}
    ) {
      Auth {
        token
        user {
          id
          theme
        }
      }
    }
  }
`;

// Like
const LIKE = gql`
  mutation LIKE($uid: String, $audioId: String!) {
    like(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// Follow
const FOLLOW = gql`
  mutation FOLLOW($uid: String, $follow: String, $audioId: String!) {
    follow(uid: $uid, follow: $follow) {
      User {
        id
      }
    }
  }
`;

// ADDTO FAVORITES
const ADDTO_FAVORITES = gql`
  mutation ADDTO_FAVORITES($uid: String, $audioId: String!) {
    addTo_Favorites(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// ADDS AUDIO TO PLAYLIST
const ADDTO_PLAYLIST = gql`
  mutation ADDTO_PLAYLIST($uid: String, $audioId: String!) {
    addTo_Playlist(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// REMOVEFROM PLAYLIST
const REMOVE_PLAYLIST = gql`
  mutation REMOVE_PLAYLIST($uid: String, $audioId: String!) {
    removeAudio(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// NEW PLAYLIST
const NEW_PLAYLIST = gql`
  mutation NEW_PLAYLIST($uid: String, $name: String!) {
    newPlaylist(uid: $uid, name: $name) {
      id
      name
    }
  }
`;

export {
  NEW_PLAYLIST,
  REMOVE_PLAYLIST,
  ADDTO_PLAYLIST,
  ADDTO_FAVORITES,
  SIGNIN_USERMUTATION,
  SIGNUP_USERMUTATION,
  LIKE,
  FOLLOW,
};