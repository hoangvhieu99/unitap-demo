<template>
<div class="header-2">
  <nav class="py-5 md:pt-9">
    <div class="container px-4 mx-auto md:flex md:items-center md:justify-between">

      <div class="flex justify-between items-center">
         <router-link to="/">
            <img src="../images/icons/logo-header.svg" alt="">
          </router-link>
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
      </div>

      <div
        class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
          <a href="#" class="p-2 font-bold lg:px-5 text-primary-100 text-mn rounded hover:bg-gray-200 hover:text-primary-200 transition-colors duration-300">
              Giới thiệu
          </a>
          <a href="#" class="p-2 font-bold lg:px-5 text-primary-100 text-mn rounded hover:bg-gray-200 hover:text-primary-200 transition-colors duration-300">
              Hướng dẫn
          </a>
          <a href="#" class="p-2 font-bold lg:px-5 text-primary-100 text-mn rounded hover:bg-gray-200 hover:text-primary-200 transition-colors duration-300">
              Tính năng
          </a>
          <a href="#" class="p-2 font-bold lg:px-5 text-primary-100 text-mn rounded hover:bg-gray-200 hover:text-primary-200 transition-colors duration-300">
              Đặt mua
          </a>
      </div>
    </div>
  </nav>
</div>
    <!-- <div class="container font-body">
        <div class="grid grid-cols-3 items-center py-5">
            <div class="ml-3">
                <img src="../images/icons/logo-header.svg" alt="">
            </div>
            <div class="col-span-2 flex justify-end">
                <a href="#" class="font-bold px-5 hover:border hover:rounded hover:border-primary-200 hover:text-primary-200 hover:py-1.5 text-primary-100 text-mn ">
                    Giới thiệu
                </a>                   
                <a href="#" class="font-bold px-5 hover:border hover:rounded hover:border-primary-200 hover:text-primary-200 hover:px-4 hover:py-1.5 text-primary-100 text-mn ">
                    Hướng dẫn
                </a>                                  
                <a href="#" class="font-bold px-5 hover:border hover:rounded hover:border-primary-200 hover:text-primary-200 hover:px-4 hover:py-1.5 text-primary-100 text-mn ">
                    Tính năng
                </a>
                <a href="#" class="font-bold px-5 hover:border hover:rounded hover:border-primary-200 hover:text-primary-200 hover:px-4 hover:py-1.5 text-primary-100 text-mn ">
                    Đặt mua
                </a>
            </div>
        </div>
    </div>  -->
</template>

<script>
// import { ref } from '@vue/composition-api';
export default {
  //  setup() {
  //   const showMenu = ref(false);
  //   const toggleNav = () => (showMenu.value = !showMenu.value);
  //   return { showMenu, toggleNav };
  // },
  name: 'NuxtTutorial',
};  

</script>
