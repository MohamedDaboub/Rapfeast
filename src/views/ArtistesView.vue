<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10 text-center text-text ">
        <h1 class="text-xl md:text-3xl py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth">NOS DIFFERENTS ARTISTES</h1>
        <h2 class="text-lg md:text-2xl py-10 font-timmana ">Les artistes des concerts </h2>
        <p class=" font-poppins text-base md:text-lg   ">Vous pouvez ici trouver tous nos différents artistes et réserver votre ticket depuis cette page</p>
    </div>
    <section>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
                <cardach
                    Artiste="David Aupry"
                    image2="/img/Image7.webp" 
                    prix="44.50"
                    prixto="72"
                    Jour="Samedi 9"
                    Heure="20h30"></cardach>
                <cardach
                    Artiste="Leal Briard"
                    image2="/img/Image8.webp" 
                    prix="44.50"
                    prixto="72"
                    Jour="Samedi 9"
                    Heure="15h30"></cardach>
                <cardach
                    Artiste="Mohamed Hakar"
                    image2="/img/Image9.webp" 
                    prix="34.5"
                    prixto="62"
                    Jour="Samedi 9"
                    Heure="17h30"></cardach>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
                <cardach
                    Artiste="Lucas Leroux"
                    image2="/img/Image10.webp" 
                    prix="34.5"
                    prixto="82"
                    Jour="Dimanche 10"
                    Heure="20h30"></cardach>
                <cardach
                    Artiste="Ranger Corbin"
                    image2="/img/Image11.webp" 
                    prix="34.5"
                    prixto="72"
                    Jour="Dimanche 10"
                    Heure="15h30"></cardach>
                <cardach
                    Artiste="Jacques Verreau"
                    image2="/img/Image12.webp" 
                    prix="34.5"
                    prixto="82"
                    Jour="Dimanche 10"
                    Heure="17h30"></cardach>
            </div>
        </div>
        <div class="mx-4 md:mx-8 lg:mx-10 xl:mx-12 py-10">
            <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-8"  >
                <cardach
                    Artiste="Gerard Cadieux"
                    image2="/img/Image13.webp" 
                    prix="34.5"
                    prixto="92"
                    Jour="Lundi 11"
                    Heure="20h30"></cardach>
                <cardach
                    Artiste="Byron L'Anglais"
                    image2="/img/Image3.webp" 
                    prix="34.5"
                    prixto="100"
                    Jour="Lundi 11"
                    Heure="15h30"></cardach>
                <cardach
                    Artiste="Donat Roy"
                    image2="/img/Image14.webp" 
                    prix="34.5"
                    prixto="52"
                    Jour="Lundi 11"
                    Heure="17h30"></cardach>
            </div>
        </div>
    </section>
</template>
<script>
import cardach from "../components/CardachView.vue"
export default {
    props:{

    },
       
    
    components:{cardach,}
}
</script>