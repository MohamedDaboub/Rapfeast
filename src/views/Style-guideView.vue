<template>
    <h1 class="text-xl md:text-3xl text-white text-center py-10 font-timmana underline-offset-8 underline effet-shawdow light:effet-shawdowinligth">Style guide du site RAP FEAST</h1>
    <div>
        <h2 class="text-lg md:text-2xl text-white text-center py-5 font-timmana">Couleurs</h2>
        <div class="flex justify-center gap-5 py-10 mx-4">
            <div class="h-20 w-20 rounded-xl border-2 border-gray-200 bg-Default/me/Noir"></div>
            <div class="h-20 w-20 rounded-xl border-2 border-gray-200 bg-Default/me/Gris"></div>
            <div class="h-20 w-20 rounded-xl border-2 border-gray-200 bg-Default/me/red"></div>
            <div class="h-20 w-20 rounded-xl border-2 border-gray-200 bg-white"></div>
        </div>
    </div>
    <div>
        <h2 class="text-lg md:text-2xl text-white text-center py-5 font-timmana">Polices</h2>
        <div class="grid grid-cols-1 text-white mx-4 md:mx-8 lg:mx-12">
            <div class="my-10 flex gap-10 lg:gap-40 ">
                <div class="">
                <p class="text-base">big text</p>
                <p class="text-base">Timmana (regular)</p>
                <p class="text-base">80px font size</p>
                </div>
                <h1 class="lg:text-6xl text-xl  text-white">
                    RAP FEAST / Juillet
                </h1>
            </div>
            <div class="my-10 flex gap-10 lg:gap-40">
                <div class="">
                    <p class="text-base">Header1</p>
                    <p class="text-base">Timmana (regular)</p>
                    <p class="text-base">35px font size</p>
                </div>
                <h1 class="lg:text-3xl text-xl text-white">
                    RAP FEAST
                </h1>
            </div>
            <div class="my-10 flex gap-10 lg:gap-40">
                <div class="">
                    <p class="text-base">Header2</p>
                    <p class="text-base">Timmana (regular)</p>
                    <p class="text-base">30px font size</p>
                </div>
        
                <h2 class="pt-8 lg:text-2xl text-xl  text-white">
                    Recevoir notre actualite par newsletter :
                </h2>
            </div>
            <div class="my-10 flex gap-10 lg:gap-40">
                <div>
                    <p class="text-base">Body 1</p>
                    <p class="text-base">Poppins (regular)</p>
                    <p class="text-base">25px font size</p>
                </div>
                <p class="pt-5 lg:text-xl text-lg  text-white">
                        une festival de rap qui dure 3 jour est dans le quel il aura 
                </p>
            </div>
            <div class="my-10 flex gap-10 lg:gap-40">
                <div>
                    <p class="text-base">Body 2</p>
                    <p class="text-base">Poppins (regular)</p>
                    <p class="text-base">20px font size</p>
                </div>
                <h4 class="pt-5 lg:text-lg text-base  text-white">
                        Le concert de David Aupry aura lieu le Samedi 9 Juillet 2022 à 20h30.   
                </h4>
            </div>
        </div>
    </div>
    <div>
        <h2 class="text-lg md:text-2xl text-white text-center py-5 font-timmana">Icones</h2>
        <div class="flex flex-wrap justify-center gap-5 py-20">
            <MenuIcon class="w-10 text-white"/>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Youtube/>
            <flech class="fill-white w-10 h-10"/>
            <fight class="w-10 h-10" />
            <ticket class="w-10 h-10"/>
            <phone class="w-10 h-10"/>
            <mail class="w-10 h-10"/>
        </div>
    </div>
    <div>
        <h2 class="text-lg md:text-2xl text-white text-center py-10 font-timmana">Composants</h2>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-6 py-10 lg:mx-40 md:mx-10 mx-5">
            <cardpro
                image1="/img/Image11.webp"
                nomart="Ranger Corbin"
                nbrJour="10 "></cardpro>
            <cardach
                Artiste="Lucas Leroux"
                image2="/img/Image10.webp" 
                prix="34.5"
                prixto="82"
                Jour="Dimanche 10"
                Heure="20h30"></cardach>
        </div>
    </div>
</template>
<script>
import { MenuIcon, } from "@heroicons/vue/solid";
import Facebook from "../components/icons/FacebookView.vue"
import Instagram from "../components/icons/InstagramView.vue"
import Twitter from "../components/icons/TwitterView.vue"
import Youtube from "../components/icons/YoutubeView.vue"
import flech from "../components/icons/FlechbasView.vue"
import fight from "../components/icons/FightView.vue"
import ticket  from "../components/icons/TicketView.vue"
import phone from "../components/icons/PhoneView.vue"
import mail from "../components/icons/MailView.vue"
import cardpro from "..//components/CardproView.vue"
import cardach from "..//components/CardachView.vue"
export default {
    name: "App",
  components: {MenuIcon,Facebook,Instagram,Twitter,Youtube,flech,fight,ticket,phone,mail, cardpro, cardach },
}
</script>
<!-- <template>

    <h2 class="mt-5 mb-10 text-2xl font-medium">Composants</h2>
    <div class="my-10 flex justify-center gap-10">
      <bouton> bouton</bouton>
      <bouton-2> search</bouton-2>
      <bouton-3></bouton-3>
    </div>
  </div>
</template>
<script>
import Bouton from "./components/Bouton.vue";
import Bouton2 from "./components/Bouton2.vue";
import Bouton3 from "./components/Bouton3.vue";
import {
  AdjustmentsIcon,
  FolderAddIcon,
  LightBulbIcon,
  MapIcon,
} from "@heroicons/vue/solid";

export default {
  name: "App",
  components: {
    AdjustmentsIcon,
    FolderAddIcon,
    LightBulbIcon,
    MapIcon,
    Bouton,
    Bouton2,
    Bouton3,
  },
};
</script> -->
