<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/solid";

defineProps({
  start: Boolean,
  username: String,
  avatar: String,
  time: String,
  msg: String,
});
</script>

<template>
  <li class="chat" :class="start ? 'chat-start' : 'chat-end'">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img v-if="avatar" alt="" :src="avatar" />
        <UserCircleIcon class="w-full h-full" v-else />
      </div>
    </div>
    <div class="chat-header">
      {{ username }}
    </div>
    <div class="chat-bubble">{{ msg }}</div>
    <time class="chat-footer opacity-50">{{ time }}</time>
  </li>
</template>
