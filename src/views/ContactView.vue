<template>
    <div class="mx-4 md:mx-8 lg:mx-10 py-10  text-white">
        <h1 class="text-xl md:text-3xl   py-10 font-timmana text-center underline-offset-2 underline ">ENVOYER UN MESSAGE</h1>
        <section class="md:mx-[25%] mx-4 my-10 font-poppins text-lg md:text-xl ">
            <div class="text-left flex gap-3 my-5 items-center  ">
                <phone></phone>
                <a href="tel:+03 81 41 08 09">Tél. 03 81 41 08 09</a>
            </div>
            <div class="text-left flex gap-3 my-5 items-center ">
                <mail></mail>
                <p>Adresse mail : <a href="mailto:Contact@rapfeast.com"></a>contact@rapfeast.com</p>
            </div>
            <h2 class="font-timmana text-lg md:text-2xl my-10">NOUS CONTACTER</h2>
            <div>
                <form action="#" method="post" class=""> 
                    <p>
                    <label for="name"  class="flex flex-col my-5">Votre nom (obligatoire)
                        <input type="text" id="name" name="name" value="" placeholder="   Camille Lauzier "  class="my-3 border-2 border-Default/me/Gris shadow-contact placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black " >
                    </label>
                    </p>
                    <p >
                        <label for="email" class="flex flex-col my-5">Votre Email (obligatoire)
                        <input type="email" id="email" name="email" value="" placeholder="   exemple@Mail.com" required  class="my-3 border-2 border-Default/me/Gris shadow-contact placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black "  >
                        </label>
                    </p>
                    <p>
                    <label for="sujet" class="flex flex-col my-5">Sujet
                        <input type="text" id="sujet" name="sujet" value="" placeholder="   sujet" required  class="my-3 border-2 border-Default/me/Gris shadow-contact placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black " >
                    </label>
                    </p>
                    <p>
                    <label for="message" class="flex flex-col my-5">Votre message
                        <textarea id="message" name="message"  placeholder="   Message" rows="7" required class="my-3 border-2 border-Default/me/Gris shadow-contact placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400  text-black " ></textarea>
                    </label>
                    </p>
                    <input type="checkbox" id="j'accepte" name="j'accepte"
                            class="mr-5 h-6 w-6 border-2 border-Default/me/Gris" required>
                    <label for="j'accepte" class="check">J’accepte et j’ai  lu les conditions générales d’utilisations.</label>
                    <div class="flex justify-center m-auto">
                        <button type="submit"  class="bg-Default/me/Gris px-8 py-4 my-7 text-base">Envoyer votre message</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>