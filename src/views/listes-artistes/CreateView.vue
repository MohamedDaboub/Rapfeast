<template>
          <form enctype="multipart/form-data" 
            @submit.prevent="createParticipant">
          <h6 class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth text-text">Nouveau Artistes</h6>
          <div class="grid grid-cols-2">
            <div>
              <div class="justify-center flex mx-auto text-center ">
                    <div>
                      <img class="w-1/2" :src="imageData"/>
                  </div>
              </div>
            </div>
          <div>
            <div class="flex gap-5 my-10">
              <div class="">
                <span class="text-white">Nom</span>
              </div>
              <input type="text" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="Artiste.nom" required />
            </div>
              <div class="flex gap-5">
                  <div class="">
                      <span class="text-white" >Date de concert</span>
                  </div>
                  <input type="date" class=" text-black h-8 border-2 border-Default/me/Gris rounded " v-model="Artiste.date"  format="dd/mm/yyyy"  required />
              </div>
            <div class="my-10">
              <div class="">
                  <span class="text-white ">Photo</span>
              </div>
              <div class="">
                  <input type="file" class="text-white" ref="file" id="file" 
                    @change="previewImage">
                  <label class="text-white" for="file">Sélectionner l'image</label>
              </div>
            </div>
          </div>
          </div>
          </form>
            <div class="flex justify-center mx-auto text-white gap-10 font-poppins">   
                <button type="submit" @click='createArtiste()' title="Création" class="bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black">
                  Créer
                </button>
                <button class="bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black" >
                  <router-link to="/Liste" >Cancel</router-link>
                </button>
            </div>
        
</template>
<script>

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Cloud Storage : import des fonctions
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  name:'ListeView',
  props:{

    },
        
    components:{},
    data(){ // Données de la vue
            return{  
                imageData:null,                 
                listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase 
                date:null,
                Artiste:{
                  nom:null,
                  image1:null,
                  date:null,
                }
            }
        },
        computed:{

        },
        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getArtistesSynchro();
        },
        methods: {
            async getArtistesSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtiste= collection(firestore, "Artiste");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbArtiste, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                })
            },
            previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.Artiste.image1 = this.file.name;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
            },
            async createArtiste(){
            const storage = getStorage();
            const refStorage = ref(storage, 'artiste/'+this.Artiste.image1);
            console.log('Artiste',this.Artiste)
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artiste'), this.Artiste);
            });
            this.$router.push('/Liste')
        },
            async updateArtiste(Artiste){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Artiste", Artiste.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: Artiste.nom,

                }) 
             },
            async deleteArtiste(Artiste){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Artiste", Artiste.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
            dateFr(d){
              let date = d.split('-');
              return date[2]+'/'+date[1]+'/'+date[0];
        }
        },

}

</script>
