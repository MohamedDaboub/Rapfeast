<template>
    <div>
        <h1 class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth text-white">Supprimer un artiste</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:py-14">
            <form enctype="multipart/form-data"
                @submit.prevent="deleteArtistes">
                <div class=" rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end ">
                        <div class="m-auto">
                            <img class="" :src="photoActuelle"/>
                        </div>
                        <label class=" text-center text-white" for="file" required>
                            <input type="file" class="hidden" ref="file" id="file"
                            @change="previewImage" >
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col ">
                            <span class="text-white" >Nom :  </span>
                            <input class="" type="text" placeholder="Nom de la personne" required
                                v-model="Artiste.nom" />  
                        </label>
                        <input type="date" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="Artiste.date" required />
                        <div class=" ">
                            <div class="">
                                <h3 class="text-white ">
                                    Attention vous allez supprimer ce participant, cette action est irréversible !!
                                </h3>
                            </div>

                        </div>
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit" @click.prevent="deleteArtistes(Artiste)" class="bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black">
                            Supprimer
                            </button>

                            <RouterLink to="/liste" >
                                <button type="submit" class="bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black">
                                    Cancel
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
    uploadString,
    deleteObject,
    listAll
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
// import { preview } from "vite";
export default {
    data (){
        return {
            imageData:null,
            Artiste: {
                nom:null,
                date:null,
                image1:null,
            },
            refArtistes:null,
            imgModifiee:false,
            photoActuelle:null,
        }
    },
    name: "DeleteView.",
    components: {  },
    mounted (){
        this.getArtistes(this.$route.params.id);
    },
    methods :{
        async getArtistes(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "Artiste", id);
            // Référence du participant concerné
            this.refArtiste = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtiste.exists()){
                // Si oui on récupère ses données
                this.Artiste = this.refArtiste.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.Artiste.image1;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Artiste inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'artiste/'+this.Artiste.image1);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },
        async deleteArtistes(){
            const firestore = getFirestore();
            // Suppresion du Artistes
            await deleteDoc(doc(firestore, "artiste", this.$route.params.id));
            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'artiste/'+this.Artiste.image1);
            // Suppression du fichier
            deleteObject(docRef);
            // redirection sur la liste des Artistes
            this.$router.push('/liste');       
        }
    }
};
</script>