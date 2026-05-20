import { Home, MessageCircle, Search, UserIcon, Users } from "lucide-react";

import rahul from "./rahul.jpeg";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";
import profile3 from "./profile3.jpg";

export const dummyUserData = [
  {
    _id: "68833d466e4b42b685068861",
    username: "rahul_dev",
    full_name: "Rahul Rajak",
    profile_picture: rahul,
    bio: "MERN Stack Developer 🚀 || Minimal UI + #smarty smooth animations = perfect combination 🎨",
    posts: ["post_001", "post_002", "post_003", "post_004", "post_005"],
    location: "india",
    followers: 120,
    following: 85,
    createdAt: "2026-05-17T08:30:00Z",
  },

  {
    _id: "68833d466e4b42b685068862",
    username: "codewithaman",
    full_name: "Aman Verma",
    profile_picture: profile1,
    bio: "Frontend Developer ⚡",
    followers: 540,
    following: 210,
  },

  {
    _id: "68833d466e4b42b685068863",
    username: "priya.codes",
    full_name: "Priya Sharma",
    profile_picture: profile2,
    bio: "UI/UX Designer 🎨",
    followers: 760,
    following: 180,
  },

  {
    _id: "68833d466e4b42b685068864",
    username: "dev_ninja",
    full_name: "Rohit Kumar",
    profile_picture: profile3,
    bio: "Backend Engineer 🔥",
    followers: 430,
    following: 150,
  },
];

export const menuItemsData = [
  { to: "/", label: "Feed", Icon: Home },
  { to: "/messages", label: "Messages", Icon: MessageCircle },
  { to: "/connections", label: "Connections", Icon: Users },
  { to: "/discover", label: "Discover", Icon: Search },
  { to: "/profile", label: "Profile", Icon: UserIcon },
];

export const dummyPostsData = [
  {
    _id: "post_001",
    user: dummyUserData[0],
    content: "Just completed the frontend of my social media app 🚀",
    image_urls: [profile2],
    likes: 128,
    location: "India",
    followers: 320,
    comments: 24,
    createdAt: "2026-05-17T08:30:00Z",
  },

  {
    _id: "post_002",
    user: dummyUserData[1],
    content: "Late night coding sessions with React and Tailwind 🌙",
    image_urls: [profile2],
    likes: 342,
    location: "India",
    followers: 320,
    comments: 41,
    createdAt: "2026-05-16T11:10:00Z",
  },

  {
    _id: "post_003",
    user: dummyUserData[2],
    content: "Responsive UI design using Tailwind CSS 💻✨",
    image_urls: [rahul],
    likes: 540,
    location: "India",
    followers: 320,
    comments: 62,
    createdAt: "2026-05-15T06:45:00Z",
  },

  {
    _id: "post_004",
    user: dummyUserData[3],
    content: "Backend APIs are finally working perfectly with MongoDB 🔥",
    image_urls: [rahul],
    likes: 276,
    location: "India",
    followers: 320,
    comments: 19,
    createdAt: "2026-05-14T04:20:00Z",
  },

  {
    _id: "post_005",
    user: dummyUserData[0],
    content: "Minimal UI + #smarty smooth animations = perfect combination 🎨",
    image_urls: [rahul],
    likes: 731,
    followers: 320,
    location: "India",
    comments: 88,
    createdAt: "2026-05-13T09:15:00Z",
  },
];
export const dummyStoriesData = [
  {
    _id: "story_001",
    user: dummyUserData[0],
    content: "this is content",
    location: "India",
    story_image: profile1,
    createdAt: "2026-05-17T08:30:00Z",
  },

  {
    _id: "story_002",
    user: dummyUserData[1],
    content: "this is content",
    location: "India",
    story_image: profile2,
    createdAt: "2026-05-17T09:10:00Z",
  },

  {
    _id: "story_003",
    user: dummyUserData[2],
    content: "this is content",
    location: "India",
    story_image: profile3,
    createdAt: "2026-05-17T10:20:00Z",
  },

  {
    _id: "story_004",
    user: dummyUserData[3],
    content: "this is content",
    location: "India",
    story_image: rahul,
    createdAt: "2026-05-17T11:00:00Z",
  },

  {
    _id: "story_005",
    user: dummyUserData[0],
    location: "India",
    content: "this is content",

    story_image: profile1,
    createdAt: "2026-05-17T12:15:00Z",
  },
];

export const dummyRecentMessagesData = [
  {
    _id: "msg_001",
    sender: dummyUserData[1],
    lastMessage: "Hey! Did you finish the UI design?",
    location: "India",
    unread: true,
    createdAt: "2026-05-18T08:20:00Z",
  },
  {
    _id: "msg_002",
    sender: dummyUserData[2],
    lastMessage: "Let’s collaborate on a new project 🚀",
    location: "India",
    unread: false,
    createdAt: "2026-05-18T07:45:00Z",
  },
  {
    _id: "msg_003",
    sender: dummyUserData[3],
    lastMessage: "Backend API is ready for testing 🔥",
    location: "India",
    unread: true,
    createdAt: "2026-05-18T06:30:00Z",
  },
  {
    _id: "msg_004",
    sender: dummyUserData[0],
    lastMessage: "I just pushed the latest changes to GitHub",
    location: "India",
    unread: false,
    createdAt: "2026-05-17T22:10:00Z",
  },
  {
    _id: "msg_005",
    sender: dummyUserData[1],
    location: "India",
    lastMessage: "Can you review my pull request?",
    unread: true,
    createdAt: "2026-05-17T18:55:00Z",
  },
  {
    _id: "msg_006",
    sender: dummyUserData[2],
    location: "India",
    lastMessage: "UI looks clean now 👍",
    unread: false,
    createdAt: "2026-05-17T14:40:00Z",
  },
];
export const dummyConnectionData = [
  {
    _id: "680f50aaf10f3cd28382ecf2",
    email: "test1@greatstack.dev",
    fullName: "Alison Martin",
    username: "rahulkhushi",
    location: "India",
    followers: 320,

    profilePic: rahul,
    bio: "Hi Everyone, I am Using QuickChat",
  },
  {
    _id: "680f50bbf10f3cd28382ecf3",
    email: "johnsmith@gmail.com",
    fullName: "John Smith",
    followers: 320,
    location: "India",
    username: "rahulkhushi",
    profilePic: rahul,
    bio: "Love coding and coffee ☕",
  },
  {
    _id: "680f50ccf10f3cd28382ecf4",
    email: "emmawatson@gmail.com",
    username: "rahulkhushi",
    followers: 320,
    location: "India",
    fullName: "Emma Watson",
    profilePic: rahul,
    bio: "Frontend Developer | React Lover",
  },
  {
    _id: "680f50ddf10f3cd28382ecf5",
    email: "michael@gmail.com",
    followers: 320,
    fullName: "Michael Brown",
    location: "India",
    username: "rahulkhushi",

    profilePic: rahul,
    bio: "Always building something new 🚀",
  },
  {
    _id: "680f50eef10f3cd28382ecf6",
    email: "sophia@gmail.com",
    followers: 320,
    fullName: "Sophia Taylor",
    location: "India",
    username: "rahulkhushi",

    profilePic: rahul,
    bio: "UI/UX Designer 🎨",
  },
];

export const dummyFollowersData = [
  {
    _id: "follower_001",
    email: "priya@gmail.com",
    fullName: "Priya Sharma",
    location: "India",
    username: "priya.codes",
    followers: 320,
    profilePic: profile2,
    bio: "UI/UX Designer 🎨",
  },

  {
    _id: "follower_002",
    email: "aman@gmail.com",
    fullName: "Aman Verma",
    location: "India",
    username: "codewithaman",
    profilePic: profile1,
    followers: 320,
    bio: "Frontend Developer ⚡",
  },

  {
    _id: "follower_003",
    email: "rohit@gmail.com",
    fullName: "Rohit Kumar",
    location: "India",
    username: "dev_ninja",
    followers: 320,
    profilePic: profile3,
    bio: "Backend Engineer 🔥",
  },
];

export const dummyFollowingData = [
  {
    _id: "following_001",
    email: "sophia@gmail.com",
    fullName: "Sophia Taylor",
    location: "India",
    username: "sophia_ui",
    profilePic: profile1,
    followers: 320,
    bio: "UI/UX Designer 🎨",
  },

  {
    _id: "following_002",
    email: "john@gmail.com",
    fullName: "John Smith",
    location: "India",
    username: "john_codes",
    profilePic: profile2,
    followers: 320,
    bio: "JavaScript Enthusiast 🚀",
  },

  {
    _id: "following_003",
    email: "emma@gmail.com",
    fullName: "Emma Watson",
    location: "India",
    username: "emma.dev",
    profilePic: profile3,
    followers: 320,
    bio: "React Developer 💻",
  },
];

export const dummyPendingConnection = [
  {
    _id: "pending_001",
    email: "alex@gmail.com",
    fullName: "Alex Johnson",
    location: "India",
    username: "alex_dev",
    followers: 320,
    profilePic: rahul,
    bio: "Building cool MERN projects 🔥",
  },

  {
    _id: "pending_002",
    email: "maria@gmail.com",
    fullName: "Maria Lopez",
    username: "maria.codes",
    location: "India",

    followers: 320,
    profilePic: profile2,
    bio: "Full Stack Developer ⚡",
  },

  {
    _id: "pending_003",
    email: "daniel@gmail.com",
    fullName: "Daniel Lee",
    username: "daniel_ui",
    location: "India",
    followers: 320,
    profilePic: profile1,
    bio: "Creative Frontend Designer 🎨",
  },
];
export const dummyMessagesData = [
  {
    _id: "msg_001",
    from_user_id: "68833d466e4b42b685068861",
    to_user_id: "68833d466e4b42b685068862",
    text: "Hey bro 👋",
    message_type: "text",
    createdAt: "2026-05-19T08:30:00Z",
  },

  {
    _id: "msg_002",
    from_user_id: "68833d466e4b42b685068862",
    to_user_id: "68833d466e4b42b685068861",
    text: "Hello Rahul 🚀",
    message_type: "text",
    createdAt: "2026-05-19T08:31:00Z",
  },

  {
    _id: "msg_003",
    from_user_id: "68833d466e4b42b685068861",
    to_user_id: "68833d466e4b42b685068862",
    text: "Did you finish the frontend?",
    message_type: "text",
    createdAt: "2026-05-19T08:32:00Z",
  },

  {
    _id: "msg_004",
    from_user_id: "68833d466e4b42b685068862",
    to_user_id: "68833d466e4b42b685068861",
    text: "Yes 🔥 just fixing responsiveness now.",
    message_type: "text",
    createdAt: "2026-05-19T08:33:00Z",
  },

  {
    _id: "msg_005",
    from_user_id: "68833d466e4b42b685068861",
    to_user_id: "68833d466e4b42b685068862",
    text: "Great work bro 👍",
    message_type: "text",
    createdAt: "2026-05-19T08:34:00Z",
  },
];
