<template>
    <main class="text-black dark:text-white py-10">
        <div class="mx-4 md:mx-8 lg:mx-10">
            <h1 class="text-xl  md:text-3xl font-timmana text-center py-7  ">N'attendez plus et venez passer une
                agreable moment avec vos rappeurs preferes</h1>
            <div>
                <img class="flex m-auto text-center w-11/12" src="../../public/img/Image1.webp" alt="image de festival rap feast">
            </div>
            <flech class="flex text-center m-auto my-12 fill-white light:fill-black  motion-safe:animate-bounce" />
            <span class="sr-only ">flech</span>
            <h2 class="text-lg  md:text-2xl font-timmana text-center py-7  ">A propos de notre Festival</h2>
        </div>
        <div class=" relative light:text-white">
            <img class="md:w-full md:h-full h-[410px] w-full  " src="../../public/img/Image2.webp" alt="image festival rap feast">
            <h1 class=" absolute left-[40%] top-[10%] md:text-4xl text-xl font-timmana">RAP FEAST</h1>
            <p class="absolute text-base mr-6 left-[15%] top-[30%] md:mr-44 font-poppins md:text-xl leading-tight">Et un
                festival qui se passe chaque année à Besançon et dans lequel nous allons inviter les meilleurs rappeurs
                de France chaque année on a pu de 10000 visiteurs !</p>
            <h3 class=" md:text-4xl text-xl font-timmana text-transparent  absolute top-[60%] left-1/4 effet-text">Juillet</h3>
            <h3 class="md:text-4xl text-xl font-timmana  text-transparent  absolute top-[60%] right-1/4 effet-text ">2022</h3>
            <h4 class="text-lg md:text-2xl  font-timmana absolute bottom-[20%] md:bottom-[18%] left-[25%] md:left-[30%]">3 JOUR</h4>
            <h4 class="text-lg md:text-2xl  font-timmana absolute bottom-[20%] md:bottom-[18%] right-[25%] md:right-[30%]">9 GROUPE</h4>
            <div class="absolute bottom-[0%] left-[40%] md:left-[45%] md:bottom-[5%] ">
                <div class="relative">
                    <RouterLink to="/Artistes">
                        <cirecle class="relative fill-Default/me/red hover:fill-blue-700"></cirecle>
                        <span class="sr-only ">cirecle</span>
                        <TrendingUpIcon class="absolute md:top-1/4 md:right-[10%] md:w-1/4 top-[28%] right-[25%] w-1/6 "></TrendingUpIcon>
                        <span class="sr-only ">TrendingUpIcon</span>
                        <p class="absolute top-1/4 left-[10%] text-sm ">Acheter <br> des billets</p>
                    </RouterLink>        
                </div>
            </div>
        </div>
        <div class="mx-6 md:mx-8 lg:mx-10">
            <div>
                <h2 class="text-lg  md:text-2xl font-timmana text-center py-7">Rencontrez vos artistes preferes !
                </h2>
                <p class="text-base mx-7 md:mx-10 my-10 text-center md:text-lg font-poppins ">Découvrez la liste
                    de tous nos artistes qui se produiront lors des prochains événements et choisissez le meilleur
                    concert pour vous en fonction de
                    cette liste !</p>
                <div>
                    <card class="w-full" image="/img/Image3.webp"
                        nom="Plus de 9 rappeurs dans un le meilleur rappeur De France !" 
                        router="/Programmation"></card>
                </div>
            </div>
            <div>
                <h2 class="text-lg  md:text-2xl font-timmana text-center py-7">Retrouvez le planning de notre concert
                </h2>
                <p class="text-base mx-7 md:mx-10 my-10 text-center md:text-lg font-poppins ">Retrouvez tous nos
                    concerts disponibles en juillet de cette année</p>
                <div>
                    <card class="w-full" image="/img/Image4.webp"
                        nom="Cet été, il y a plus de 9 spectacles disponibles à besançon !"
                        router="/Artistes"></card>
                </div>
            </div>
            <div>
                <h2 class="text-lg  md:text-2xl font-timmana text-center py-7">Plus d’information sur notre Festival
                </h2>
                <p class="text-base mx-7 md:mx-10 my-10 text-center md:text-lg font-poppins ">Retrouvez tous les
                    informations disponibles sur notre festival de cette année</p>
                <div>
                    <card class="w-full" image="/img/Image5.webp"
                        nom="Pour avoir plus Information sur notre festival RAP FEAST "
                        router="/Concert"></card>
                </div>
            </div>
            <div>
                <h2 class="text-lg  md:text-2xl font-timmana text-center py-7">Pour nous contacter</h2>
                <p class=":text-base mx-7 md:mx-10 my-10 text-center md:text-lg font-poppins ">Si vous voulais nous
                    contact pour avoir plus d’information sur notre festival</p>
            </div>
            <div>
                <card class="w-full" image="/img/Image6.webp"
                    nom="Si vous avez la moindre question n’hésitez pas à nous contacter"
                    router="/Contact"></card>
            </div>
        </div>
    </main>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"
import { TrendingUpIcon, } from "@heroicons/vue/solid";
import cirecle from "../components/icons/CircleView.vue"
import card from "../components/CardView.vue"


export default {
    name: "App",
    components: { flech,cirecle,TrendingUpIcon,card },
};
</script>