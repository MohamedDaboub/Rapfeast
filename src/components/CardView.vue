<template>
    <div >
        <figure class=" flex flex-col justify-center items-center mx-auto my-10 rounded-lg  sm:w-[38%]  w-full    ">
            <img class=" rounded-t-lg lg:w-full" :src="image" alt="image donne des information">
            <figcaption class=" flex px-5 py-4 bg-Default/me/Gris  ">
                <div class="  flex flex-col w-full  ">
                    <h3 class="text-lg text-white text-center py-4 font-poppins ">{{ nom }}</h3>
                    <RouterLink class="px-8 py-4 bg-Default/me/Noir text-white  flex justify-end items-end m-auto text-base font-poppins hover:bg-white hover:text-black" :to="router">Découvrez</RouterLink>
                </div>
            </figcaption>
        </figure>
    </div>
</template>
<script>
export default {
    props:{
        nom: String,
        image: String, 
        router:String,
    },

    components:{}
}
</script>