<template>
    <div>
        <figure class="bg-Default/me/Gris p-5 text-white font-poppins">
            <div class="flex gap-2">
                <img :src="image2" class="w-3/5" alt="">
                <div class="flex flex-col mx-1 justify-center items-center">
                    <RouterLink class="px-4 py-4 xl-px-8  bg-Default/me/Noir my-4 text-center w-full hover:bg-white hover:text-black " to="/Artistes">Réserver</RouterLink>
                    <h4 class="mx-2">De {{prix.toLocaleString("fr-FR")}}€ à  {{prixto.toLocaleString("fr-FR")}}€</h4>
                </div>
            </div>
            <figcaption class="mx-2 my-5">
                <p class="my-3">Le concert de {{Artiste}} aura lieu le <span class="text-red-500">{{Jour}} Juillet 2022</span> à {{Heure}}.</p>
                <p class="my-3">Vous pouvez réserver dès maintenant sur notre site.</p>
                <div class="flex justify-end m-auto ">
                <RouterLink class="px-8 py-4 border-2 border-white  my-2 rounded-lg hover:bg-white hover:text-black " to="/Artiste">Savoir plus</RouterLink>
                </div>
            </figcaption>
        </figure>
    </div>
</template>
<script>

export default {
    props:{
        Artiste: String,
        image2: String, 
        prix: Number,
        prixto: Number,
        Jour:String,
        Heure:String,
    },
       
    
    components:{}
}
</script>