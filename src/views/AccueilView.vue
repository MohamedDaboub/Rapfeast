<template>
    <main class="text-white py-10">
        <div class="mx-4 md:mx-8 lg:mx-10">
            <h1 class="text-xl  md:text-3xl font-timmana text-center py-7  ">N'attendez plus et venez passer une
                agreable moment avec vos rappeurs preferes</h1>
            <div>
                <img class="flex m-auto text-center w-11/12" src="../../public/img/Image1.webp" alt="image d'un festival rap feast">
            </div>
            <flech class="flex text-center m-auto my-12 fill-white" />
            <h2 class="text-lg  md:text-2xl font-timmana text-center py-7  ">A propos de notre Festival</h2>
        </div>
        <div class=" relative">
            <img class="md:w-full md:h-full h-[410px] w-full  " src="../../public/img/Image2.webp" alt="">
            <h1 class=" absolute left-[40%] top-[10%] md:text-4xl text-xl font-timmana">RAP FEAST</h1>
            <p class="absolute text-base mr-6 left-[15%] top-1/3 md:mr-44 font-poppins md:text-xl leading-tight">Et un
                festival qui se passe chaque année à Besançon et dans lequel nous allons inviter les meilleurs rappeurs
                de France chaque année on a pu de 10000 visiteurs !</p>
            <h3 class=" md:text-4xl text-xl font-timmana text-red-700  absolute top-[60%] left-1/4">Juillet</h3>
            <h3 class=" md:text-4xl text-xl font-timmana  text-red-700 absolute top-[60%] right-1/4 ">2022</h3>
            <h4 class="text-lg md:text-2xl  font-timmana absolute bottom-[20%] left-[25%] md:left-[30%]">3 JOUR</h4>
            <h4 class="text-lg md:text-2xl  font-timmana absolute bottom-[20%] right-[25%] md:right-[30%]">9 GROUPE</h4>
            <div class="absolute bottom-[0%] left-[38%] md:left-[45%] md:bottom-[5%] ">
                <div class="relative">
                    <cirecle class="relative"></cirecle>
                    <TrendingUpIcon class="absolute top-1/4 md:right-[12%] w-1/4 right-[20%] "></TrendingUpIcon>
                    <p class="absolute top-1/4 left-[8%] ">Acheter <br> des billets</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"
import { TrendingUpIcon, } from "@heroicons/vue/solid";
import cirecle from "../components/icons/CircleView.vue"


export default {
    name: "App",
    components: { flech,cirecle,TrendingUpIcon },
};
</script>