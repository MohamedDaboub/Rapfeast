<template>
    <div class="mx-4 md:mx-8 lg:mx-10">
        <h1 class="text-xl md:text-3xl text-white text-center py-10 font-timmana underline-offset-2 underline ">NOS PROGRAMMATION</h1>   
        <h2 class="text-lg md:text-2xl text-white text-center py-10 font-timmana">Nos differents concerts</h2>
        <p class=" font-poppins text-base md:text-lg text-center text-white ">Vous pouvez retrouver toutes les dates des concerts et leurs horaires au cours de ces 3 jours</p>
    </div>
    <section>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <h3 class="text-xl md:text-3xl text-white text-center py-10 font-timmana">9 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/public/img-squirrel/Image7.webp"
                nomart="David Aupry"
                nbrJour="9 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image8.webp"
                nomart="Leal Briard"
                nbrJour="9 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image9.webp"
                nomart="Mohamed Hakar"
                nbrJour="9 "></cardpro>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <h3 class="text-xl md:text-3xl text-white text-center py-10 font-timmana">10 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/public/img-squirrel/Image10.webp"
                nomart="Lucas Leroux "
                nbrJour="10 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image11.webp"
                nomart="Ranger Corbin"
                nbrJour="10 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image12.webp"
                nomart="Jacques Verreau"
                nbrJour="10 "></cardpro>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <h3 class="text-xl md:text-3xl text-white text-center py-10 font-timmana">11 juillet 2022</h3>
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
            <cardpro
                image1="/public/img-squirrel/Image13.webp"
                nomart="Gerard Cadieux"
                nbrJour="11 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image3.webp"
                nomart="Byron L'Anglais"
                nbrJour="11 "></cardpro>
            <cardpro
                image1="/public/img-squirrel/Image14.webp"
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