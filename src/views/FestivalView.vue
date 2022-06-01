<template>
    <div class="mx-4 md:mx-8 lg:mx-12 py-10 text-text text-center ">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth ">L'HISTOIRE DE NOTRE FESTIVAL</h1>
        <h2 class="text-lg md:text-2xl   py-10 font-timmana">Festival</h2>
        <p class=" font-poppins text-base md:text-lg ">Ici vous pourrez trouver l'histoire de notre festival qui va devenir une grande événement dans le futur</p>
    </div>
    <section class="font-timmana text-text text-lg md:text-2xl mx-4 md:mx-8 lg:mx-12 xl:mx-16 text-center">
        <flech class="flex  m-auto my-10 fill-white light:fill-black"></flech>
        <span class="sr-only ">flech</span>
        <h3 class="my-10" >Notre festival est un festival de <span class="text-red-900"> Rap</span> auquel nous invitons de grands <span class="text-red-900"> noms du Rap francais.</span> </h3>
        <fight  class="flex text-center m-auto my-10 w-52 h-52"></fight>
        <span class="sr-only ">fight</span>
        <h3 class="my-10">Pouvez acheter votre ticket a partir de <span class="text-red-900"> 30€</span></h3>
        <ticket class="my-10" ></ticket>
        <span class="sr-only ">ticket</span>
        <h3 class="my-10">Ou nous trouver ?</h3>
        <address class="text-base md:text-lg font-poppins">3 Boulevard O, 25000 Besançon</address>
        <div>
            <iframe class="w-4/5 flex text-center m-auto py-10 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.7036977257835!2d5.977912615560326!3d47.22237967916118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d638eef0d7625%3A0xd85a2e4d7709f4d4!2sMicropolis%20Besan%C3%A7on!5e0!3m2!1sfr!2sfr!4v1653595741553!5m2!1sfr!2sfr" height="500" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"
import fight from "../components/icons/FightView.vue"
import ticket  from "../components/icons/TicketView.vue"
export default {
    name: "App",
    components: { flech,fight,ticket  },
}
</script>