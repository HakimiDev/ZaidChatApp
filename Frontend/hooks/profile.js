import { defineStore } from "pinia";

export default defineStore("profile", () => {
  const username = ref(null);
  const avatar = ref(null);

  const getUsername = () => username.value;

  const setUsername = (name) => {
    username.value = name;
  };

  const getAvatar = () => avatar.value;

  const setAvatar = (newAvatar) => {
    avatar.value = newAvatar;
  };

  return { username, avatar, getUsername, setUsername, getAvatar, setAvatar };
});
