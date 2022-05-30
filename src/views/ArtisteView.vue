<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10 text-white text-center">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana underline-offset-2 underline">Leal Briard</h1>
        <img class="m-auto rounded-full md:w-1/3 w-4/5 my-10" src="../../public/img/Image8.webp" alt="">
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
