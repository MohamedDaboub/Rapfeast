<template>
    <div class="mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-10 text-white text-center">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana underline-offset-2 underline effet-shawdow">CONCERT DE RAP</h1>
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
    <div class="text-center text-white my-10 text-lg md:text-xl">
        <p>À l'adresse ci-dessous </p>
        <address>3 Boulevard O, 25000 Besançon</address>
        <div>
            <iframe class="w-4/5 flex text-center m-auto py-10 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.7036977257835!2d5.977912615560326!3d47.22237967916118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d638eef0d7625%3A0xd85a2e4d7709f4d4!2sMicropolis%20Besan%C3%A7on!5e0!3m2!1sfr!2sfr!4v1653595741553!5m2!1sfr!2sfr" height="500" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class=" text-center text-white mx-4 md:mx-8 lg:mx-12 xl:mx-16 ">
        <h2 class="text-xl md:text-3xl   py-10 font-timmana">Quelques images de notre concert !</h2>
        <img src="../../public/img/Image15.webp" class="m-auto py-10" alt="">
        <img src="../../public/img/Image16.webp" class="m-auto py-10" alt="">
    </div>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"


export default {
  name: "App",
  components: { flech, },
};
</script>