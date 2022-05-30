<template>
    <figure class="bg-Default/me/Gris">
        <img class="my-4 text-center flex m-auto w-11/12" :src="image1" alt="image de l'artiste">
        <figcaption>
            <div class=" relative flex flex-col text-white text-3xl font-timmana mx-6 my-6">
                <h3 class="   ">{{ nomart }}</h3>
                <h4 class="   ">{{ nbrJour }}juillet 2022</h4>
                <div class="w-12 grid place-items-center absolute  right-2 h-12  bg-Default/me/Noir rounded-full">
                    <heart  />
                </div>
            </div>
            <div class="flex justify-center">
            <RouterLink class="px-8 py-4 bg-Default/me/Noir text-white my-5 font-poppins hover:bg-white hover:text-black " to="/Concert">Plus d’information </RouterLink>
            </div>
        </figcaption>
    </figure>
</template>
<script>
import heart from "../components/icons/HeartView.vue"
export default {
    props:{
        nomart: String,
        nbrJour: Number,
        image1: String, 
    },
       
    components:{heart}
}
</script>