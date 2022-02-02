<template>
  <div id="app">
    <nav
      class="bg-white lg:relative fixed p-5 shadow-lg lg:w-auto w-full top-0 left-0 right-0"
    >
      <div
        class="lg:container lg:mx-auto justify-between lg:flex lg:items-center lg:flex-wrap"
      >
        <NuxtLink to="/" class="text-2xl font-bold font-poppins"
          >DegoTeam.</NuxtLink
        >
        <div class="block lg:hidden float-right lg:float-none">
          <button
            @click="menu = !menu"
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="text-sm lg:flex-grow lg:mt-0 lg:ml-10 lg:block hidden ml-0 mt-10"
        >
          <NuxtLink
            to="/"
            class="btn font-poppins font-normal text-gray-900 block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/"
            class="btn font-poppins font-normal text-gray-900 block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
            >About</NuxtLink
          >
          <NuxtLink
            to="/"
            class="btn font-poppins font-normal text-gray-900 block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
            >Contact</NuxtLink
          >
        </div>
        <div class="lg:mt-0 mt-10 lg:block hidden">
          <button
            class="bg-black text-white font-medium px-3 py-2 rounded-md text-sm font-poppins block lg:inline-block lg:w-auto w-full"
          >
            Join Team
          </button>
          <button
            class="lg:w-auto w-full bg-transparent text-grey font-medium lg:ml-6 ml-0 lg:mt-0 mt-5 border border-black hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-poppins block lg:inline-block"
          >
            Term & Service
          </button>
        </div>
        <div class="mobile-menu lg:hidden" v-show="menu">
          <div class="text-sm lg:flex-grow lg:mt-0 lg:ml-1 ml-0 mt-10">
            <NuxtLink
              to="/"
              class="btn font-poppins font-normal text-gray-900 block mt-8 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/"
              class="btn font-poppins font-normal text-gray-900 block mt-8 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
              >About</NuxtLink
            >
            <NuxtLink
              to="/"
              class="btn font-poppins font-normal text-gray-900 block mt-8 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
              >Contact</NuxtLink
            >
          </div>
          <div class="lg:mt-0 mt-10">
            <button
              class="bg-black text-white font-medium px-3 py-2 rounded-md text-sm font-poppins block lg:inline-block lg:w-auto w-full"
            >
              Join Team
            </button>
            <button
              class="lg:w-auto w-full bg-transparent text-grey font-medium lg:ml-6 ml-0 lg:mt-0 mt-5 border border-black hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-poppins block lg:inline-block"
            >
              Term & Service
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="lg:container mx-auto">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";

export default {
  components: { Home },
  name: "IndexPage",
  data() {
    return {
      menu: false,
    };
  },
};
</script>
