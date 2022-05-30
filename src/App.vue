<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <header class=" bg-Default/me/Gris sticky top-0 drop-shadow-lg z-10 ">
    <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between items-center">
      <div class="flex justify-between items-center">
      <RouterLink to="/"><img src="../public/icon_svg/logo-site.svg" class="w-32 p-4" alt="Logo du site"></RouterLink>
      <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mx-4  ">
        <MenuIcon class=" text-white"></MenuIcon>
      </span>
      </div>
      <ul class="lg:flex  gap-6 lg:items-center text-white text-xl font-timmana mx-6 py-4" >
        <li>
          <RouterLink class="my-6 lg:my-0 " to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="my-6 lg:my-0 " to="/Programmation">Programmation</RouterLink>
        </li>
        <li>
          <RouterLink class="my-6 lg:my-0 " to="/Artistes">Artistes</RouterLink>
        </li>
        <li>
          <RouterLink class="my-6 lg:my-0 " to="/Festival">Festival</RouterLink>
        </li>
        <li>
          <RouterLink class="my-6 lg:my-0 " to="/Contact">Contact</RouterLink>
        </li>
        <div class=" ">
          <RouterLink class="px-8 bg-Default/me/Noir py-4 text-white font-poppins text-base my-6 lg:my-0 " to="/Artistes">ACHETER DES BILLETS</RouterLink>
        </div>
      </ul>
    </nav>
  </header>
  <main id="content">
    <Router-View />
  </main>
</template>

<script>
import { MenuIcon, } from "@heroicons/vue/solid";


export default {
  name: "App",
  components: { MenuIcon,},
};

</script>


