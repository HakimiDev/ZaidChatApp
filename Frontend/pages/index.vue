<script setup>
import useProfile from "@/hooks/profile.js";
import { UserCircleIcon } from "@heroicons/vue/24/solid";

const fileInput = ref(null);
const { setUsername, getUsername, setAvatar, getAvatar } = useProfile();

const name = ref("");

const handleChnageAvatar = () => {
  const file = fileInput.value.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    const imageData = reader.result;
    setAvatar(imageData);
  };
  reader.readAsDataURL(file);
};

watch(name, () => {
  setUsername(name.value);
});
</script>

<template>
  <div class="flex justify-center items-center pt-16 p-3">
    <div
      class="p-8 border-[1px] border-dashed border-primary m-2 rounded-xl w-full"
    >
      <h1 class="text-center text-2xl font-bold p-2">Login</h1>
      <form
        class="flex flex-col justify-center items-center"
        onsubmit="return false"
        @submit="navigateTo('/chat')"
      >
        <input
          @change="handleChnageAvatar"
          ref="fileInput"
          type="file"
          class="hidden"
        />
        <span
          @click="fileInput.click()"
          class="w-48 h-48 cursor-pointer rounded-full border-[1px] border-white mb-4"
        >
          <UserCircleIcon
            v-if="!getAvatar()"
            class="w-full h-full transition duration-200 hover:fill-gray-500 rounded-full"
          />
          <img
            v-else
            :src="getAvatar()"
            alt=""
            class="w-full h-full rounded-full"
          />
        </span>
        <input
          type="text"
          placeholder="username"
          class="input input-bordered input-info w-full max-w-xs"
          required
          v-model="name"
        />
        <button type="submit" class="btn btn-primary px-8 m-4 text-white">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
