<template>
    <div class="mx-4 md:mx-8 lg:mx-10 text-text">
        <h1 class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth">NOS PROGRAMMATION</h1>   
        <h2 class="text-lg md:text-2xl text-center py-10 font-timmana">Nos differents concerts</h2>
        <p class=" font-poppins text-base md:text-lg text-center  ">Vous pouvez retrouver toutes les dates des concerts et leurs horaires au cours de ces 3 jours</p>
    </div>
    <section class="text-text">
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10 ">
            <h3 class="text-xl md:text-3xl  text-center py-10 font-timmana">9 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/img/Image7.webp"
                nomart="David Aupry"
                nbrJour="9 "></cardpro>
            <cardpro
                image1="/img/Image8.webp"
                nomart="Leal Briard"
                nbrJour="9 "></cardpro>
            <cardpro
                image1="/img/Image9.webp"
                nomart="Mohamed Hakar"
                nbrJour="9 "></cardpro>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <h3 class="text-xl md:text-3xl  text-center py-10 font-timmana">10 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/img/Image10.webp"
                nomart="Lucas Leroux "
                nbrJour="10 "></cardpro>
            <cardpro
                image1="/img/Image11.webp"
                nomart="Ranger Corbin"
                nbrJour="10 "></cardpro>
            <cardpro
                image1="/img/Image12.webp"
                nomart="Jacques Verreau"
                nbrJour="10 "></cardpro>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <h3 class="text-xl md:text-3xl text-center py-10 font-timmana">11 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/img/Image13.webp"
                nomart="Gerard Cadieux"
                nbrJour="11 "></cardpro>
            <cardpro
                image1="/img/Image3.webp"
                nomart="Byron L'Anglais"
                nbrJour="11 "></cardpro>
            <cardpro
                image1="/img/Image14.webp"
                nomart="Donat Roy"
                nbrJour="11 "></cardpro>
            </div>
        </div>
    </section>
</template>
<script>
import cardpro from "../components/CardproView.vue"
export default {
    props:{

    },
        
    components:{cardpro}
}
</script>