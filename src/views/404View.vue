<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10 text-white text-center">
        <h1 class="text-xl md:text-3xl py-10 font-timmana underline-offset-2 underline effet-shawdow">ERREUR 404</h1>
        <p class="text-lg md:text-xl">LA PAGE N'A PAS ÉTÉ TROUVÉE...</p>
        <img src="../../public/img/Image19.webp" class="m-auto my-10" alt="">
    </div>
    <div class="flex justify-center text-white font-poppins md:text-xl text-lg  ">
        <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-6 my-10   "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:mmimontbeliard.com'">
            <label for="q" class="text-center my-4">Text à chercher :</label>
            <input type="text" class="border bg-white border-Default/me/Noir shadow-contact" placeholder="Rechercher" id="q" name="q" x-model="q">
            <button type="submit" class="bg-Default/me/Noir px-8 py-4 my-5">Rechercher</button>
        </form>
    </div>
    <div class="py-10">
        <ul class="flex flex-col text-white text-base font-poppins">
        <li class=" mx-auto text-center flex  ">
          <RouterLink class="bg-Default/me/Gris my-5 px-8 py-4 " to="/">Home</RouterLink>
        </li>
        <li class=" mx-auto text-center flex ">
          <RouterLink class="bg-Default/me/Gris my-5 px-8 py-4 " to="/Programmation">Programmation</RouterLink>
        </li>
        <li class=" mx-auto text-center flex ">
          <RouterLink class="bg-Default/me/Gris my-5 px-8 py-4 " to="/Artistes">Artistes</RouterLink>
        </li>
        <li class=" mx-auto text-center flex ">
          <RouterLink class="bg-Default/me/Gris my-5 px-8 py-4 " to="/Festival">Festival</RouterLink>
        </li>
        <li class="  mx-auto text-center flex ">
          <RouterLink class="bg-Default/me/Gris my-5 px-8 py-4" to="/Contact">Contact</RouterLink>
        </li>
        </ul>
    </div>
</template>