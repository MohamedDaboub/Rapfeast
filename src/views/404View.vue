<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10 text-text text-center">
        <h1 class="text-xl md:text-3xl py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth">ERREUR 404</h1>
        <p class="text-lg md:text-xl">LA PAGE N'A PAS ÉTÉ TROUVÉE...</p>
        <img src="../../public/img/Image19.webp" class="m-auto my-10" alt="errore pas non trouver">
    </div>
    <div class="flex justify-center text-text font-poppins md:text-xl text-lg  ">
        <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-6 my-10   "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:mmimontbeliard.com'">
            <label for="q" class="text-center my-4">Text à chercher :</label>
            <input type="text" class="border bg-white border-Default/me/Noir shadow-contact" placeholder="Rechercher" id="q" name="q" x-model="q">
            <button type="submit" class="bg-Default/me/Noir px-8 py-4 my-5">Rechercher</button>
        </form>
    </div>
    <input type="text" id="chanrecher" @keyup="FunctionRecherche()" class="flex justify-center m-auto w-1/2 rounded-md h-10 border-2 border-Default/me/Gris shadow-contact font-poppins" placeholder="Saisissez le nom de la page que vous recherchez" title="recherchez" />
    <div class="py-10">
        <ul class="flex flex-col text-text text-base font-poppins" id="meslien">
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
<script>
export default {
name:"Page404",
methods:{
FunctionRecherche() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('chanrecher');
    filter = input.value.toUpperCase();
    ul = document.getElementById("meslien");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
  }
}
};
</script>