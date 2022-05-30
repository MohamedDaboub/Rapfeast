<template>
    <div class="mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-10 text-white text-center">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana underline-offset-2 underline">CONCERT DE RAP</h1>
        <img src="../../public/img/Image7.webp" class="m-auto rounded-sm my-10" alt="">
        <p class="text-lg md:text-xl my-10 text-left xl:mx-[25%] font-poppins">Le concert de <span class="text-red-700"> David Aupry</span> a l’honneur de vous accueillir,
        voici quelques détails sur le concert.</p>
    </div>
    <div class="text-center text-white font-poppins text-lg md:text-xl">
        <p class=" my-10">Le concert <span class="text-red-700"> débutera à
        20h30</span> le <span class="text-red-700"> 9 juillet2022</span></p>
        <img class="m-auto my-10" src="../../public/icon_svg/Time.svg" alt="">
        <flech class="fill-red-700 m-auto my-10"></flech>
        <p>Vous devez être présent 10 min avant le début du concert</p>
    </div>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"


export default {
  name: "App",
  components: { flech, },
};
</script>