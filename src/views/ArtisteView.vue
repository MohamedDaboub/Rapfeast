<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10 text-white text-center">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana underline-offset-2 underline">Leal Briard</h1>
        <img class="m-auto rounded-full md:w-1/3 w-4/5 my-10" src="../../public/img/Image8.webp" alt="">
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 md:mx-[25%] mx-3 text-white md:text-2xl text-lg font-timmana my-10">
        <div class="my-10">
            <h3>Age</h3>
            <div class="flex gap-2 md:mx-8 mx-2 my-5">
                <person class="mt-1"></person>
                <p>25 ans</p>
            </div>
        </div>
        <div class="my-10">
            <h3>Domaine musical</h3>
            <div class="flex gap-2 md:mx-8 mx-2 my-3">
                <fight class="w-6 h-8"></fight>
                <p>RAP</p>
            </div>
        </div>
        <div class="my-10">
            <h3>Reseaux sociaux</h3>
            <div class="flex gap-5 md:mx-8 mx-2 my-3">
                <a href="https://www.facebook.com/"><Facebook class=" w-1/2 md:w-full "/></a>
                <a href="http://instagram.com/"><Instagram class=" w-1/2 md:w-full"/></a>
                <a href="https://twitter.com/"><Twitter class=" w-1/2 md:w-full "/></a>
                <a href="https://www.youtube.com/"><Youtube class=" w-1/2 md:w-full "/></a>
            </div>
        </div>
    </div>
    <div >
        <h2 class="font-timmana md:text-2xl text-lg my-10 text-center text-white">Galerie d’images de cette artiste </h2>
        <div class="justify-center text-white mx-4 md:mx-8 lg:mx-12 xl:mx-16">
            <img class="py-10 m-auto" src="../../public/img-squirrel/Image17.webp" alt="">
            <img class="py-10 m-auto" src="../../public/img-squirrel/Image18.webp" alt="">
        </div>
    </div>
</template>
<script>
import person from "../components/icons/PersonView.vue"
import fight from "../components/icons/FightView.vue"
import Facebook from "../components/icons/FacebookView.vue"
import Instagram from "../components/icons/InstagramView.vue"
import Twitter from "../components/icons/TwitterView.vue"
import Youtube from "../components/icons/YoutubeView.vue"
export default {
    name: "App",
    components: { fight,person,Facebook,Instagram,Twitter,Youtube,  },
}
</script>
