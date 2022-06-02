<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <header class=" bg-header  sticky top-0 drop-shadow-lg z-10 ">
    <a href="#content" class="sr-only focus:not-sr-only text-lg text-text"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between items-center">
      <div class="flex justify-between items-center">
      <RouterLink to="/"><img src="./assets/icon_svg/logo-site.svg" class="w-32 p-4" alt="Logo du site"></RouterLink>
      <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mx-4  ">
        <MenuIcon class=" text-text"  aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        </MenuIcon>
        <span class="sr-only ">Menu</span>
      </span>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
      <ul id="menu" v-if="menuOuvert" class="lg:hidden text-text text-xl font-timmana mx-6 py-4 text-center" >
        <li class="my-3"> 
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/">Home</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black" to="/Programmation">Programmation</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Artistes">Artistes</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Festival">Festival</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Contact">Contact</RouterLink>
        </li>
        <li class=" ">
          <RouterLink class="px-8 bg-Default/me/Noir hover:bg-white hover:text-black  py-4 text-white font-poppins text-base my-6 lg:my-0 " to="/Artistes">ACHETER DES BILLETS</RouterLink>
        </li>
      </ul>
      </transition>
      <ul class="lg:flex  gap-6 lg:items-center text-text  text-xl font-timmana mx-6 py-4 hidden" >
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black" to="/">Home</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black" to="/Programmation">Programmation</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Artistes">Artistes</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Festival">Festival</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm hover:bg-white hover:text-black " to="/Contact">Contact</RouterLink>
        </li>
        <li class=" ">
          <RouterLink class="px-8 bg-Default/me/Noir hover:bg-white hover:text-black  py-4 text-white font-poppins text-base my-6 lg:my-0 " to="/Artistes">ACHETER DES BILLETS</RouterLink>
        </li>
      </ul>    
    </nav>
  </header>
  <main id="content" class=" bg-Default/me/Noir bg-fond ">
      <aside class=" relative flex flex-col z-10">
        <a href="https://www.facebook.com/"><Facebook  class=" fixed  hover:animate-[spin_1000ms_2]  right-1 top-[15%] md:top-[15%]"/></a>
        <span class="sr-only ">Facebook</span>
        <a href="http://instagram.com/"><Instagram class=" fixed hover:animate-[spin_1000ms_2] right-1 top-[20%] md:top-[25%]"/></a>
        <span class="sr-only ">Instagram</span>
        <a href="https://twitter.com/"><Twitter class=" fixed right-1 hover:animate-[spin_1000ms_2]  top-[25%] md:top-[35%]"/></a>
        <span class="sr-only ">Twitter</span>
        <a href="https://www.youtube.com/"><Youtube class=" fixed right-1 hover:animate-[spin_2000ms_2] top-[30%] md:top-[45%] "/></a>
        <span class="sr-only ">Youtube</span>
      </aside>
    <Router-View />
  </main>
  <footer class="bg-header pt-10 px-10 flex-wrap ">
    <div class="text-text flex flex-col md:flex   gap-7 items-center">
      <p class="font-timmana xl:text-2xl text-lg">Recevoir notre actualite par newsletter :</p>
      <div class="  sm:flex lg:gap-14 items-center"> 
        <label for="email" class="mx-5">
          <input type="text" id="email" name="email" value="" placeholder="exemple@Mail.com" class=" placeholder:text-center placeholder:text-lg border bg-white border-Default/me/Noir shadow-contact lg:w-[473px] h-9 text-black">
        </label>
        <button type="submit" class=" font-poppins  md:px-8 p-4 border-2 border-white light:border-Default/me/Gris my-5  mx-5 hover:bg-white hover:text-black focus:bg-blue-600 ">Je m'abonne</button>
        </div>
    </div>
    <div class=" grid text-center text-text text-xl font-timmana  lg:hidden">
      <RouterLink class="my-2" to="/">Home</RouterLink>
      <RouterLink class="my-2" to="/Programmation">Programmation</RouterLink>
      <RouterLink class="my-2" to="/Artistes">Artistes</RouterLink>
      <RouterLink class="my-2" to="/Festival">Festival</RouterLink>
      <RouterLink class="my-2" to="/Contact">Contact</RouterLink>
    </div>
    <div>
      <RouterLink to="/"><img src="./assets/icon_svg/logo-site.svg" class="flex m-auto text-center w-36" alt="logo du site"></RouterLink>
    </div>
    <div class="font-timmana text-text grid lg:grid-cols-2 text-center py-4 ">
      <p class=" text-lg md:text-2xl my-5 lg:my-0 ">© RAP FEAST-2022</p>
      <div class=" text-xl gap-7 mt-1 ">
        <RouterLink class=" " to="/Contact">Contact</RouterLink>
        &ndash;
        <RouterLink class=" " to="/Mentionslegales">Mentions legales</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
import { MenuIcon, } from "@heroicons/vue/solid";
import Facebook from "./components/icons/FacebookView.vue"
import Instagram from "./components/icons/InstagramView.vue"
import Twitter from "./components/icons/TwitterView.vue"
import Youtube from "./components/icons/YoutubeView.vue"



export default {
  name: "App",
  components: { MenuIcon,Facebook,Instagram,Twitter,Youtube,},
    data() {
    return {
      menuOuvert: false,
    };
    
    },
    beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  }

}




</script>


