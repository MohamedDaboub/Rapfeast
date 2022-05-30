<template>
    <main class="text-white py-10">
        <div class="sm:mx-6 md:mx-8 lg:mx-10">
            <h1 class="text-xl  md:text-3xl font-timmana text-center py-7  ">N'attendez plus et venez passer une
                agreable moment avec vos rappeurs preferes</h1>
            <div>
                <img class="flex m-auto text-center w-11/12" src="../../public/img/Image1.webp" alt="image d'un festival rap feast">
            </div>
            <flech class="flex text-center m-auto my-12 fill-white" />
            <h2 class="sm:text-lg  md:text-2xl font-timmana text-center py-7  ">A propos de notre Festival</h2>
        </div>
    </main>
</template>
<script>
import flech from "../components/icons/FlechbasView.vue"

export default {
    name: "App",
    components: { flech, },
};
</script>