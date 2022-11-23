import create from "zustand";
import { devtools } from "zustand/middleware";

const useProfileStore = create(
  devtools((set) => ({
    _id: "",
    fullName: "",
    age: "",
    email: "",
    posts: [],
    comments: [],
    groups: [],
    following: [],
    followers: [],
    saved: [],
    liked: [],
    auth: (input) =>
      set((state) => ({
        _id: input._id,
        fullName: input.fullName,
        age: input.age,
        email: input.email,
        posts: input.posts,
        comments: input.comments,
        groups: input.groups,
        following: input.following,
        followers: input.followers,
        saved: input.saved,
        liked: input.liked,
      })),
    logout: () =>
      set(() => ({
        _id: "",
        fullName: "",
        age: "",
        email: "",
        posts: [],
        comments: [],
        groups: [],
        following: [],
        followers: [],
        saved: [],
        liked: [],
      })),
    addLike: (postID) =>
      set((state) => ({
        liked: [...state.liked, postID],
      })),
    removeLike: (postID) =>
      set((state) => ({
        liked: state.liked.filter((post) => post !== postID),
      })),
    addFollow: (userID) =>
      set((state) => ({
        following: [...state.following, userID],
      })),
    removeFollow: (userID) =>
      set((state) => ({
        following: state.following.filter((user) => user !== userID),
      })),
    addComment: (commentID) =>
      set((state) => ({
        comments: [...state.comments, commentID],
      })),
    removeComment: (commentID) =>
      set((state) => ({
        comments: state.comments.filter((user) => user !== commentID),
      })),
    addPost: (postID) =>
      set((state) => ({
        posts: [...state.posts, postID],
      })),
    removePost: (postID) =>
      set((state) => ({
        posts: state.posts.filter((user) => user !== postID),
      })),
  }))
);

export default useProfileStore;
