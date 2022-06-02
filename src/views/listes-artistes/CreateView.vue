<template>
          <form enctype="multipart/form-data" 
            @submit.prevent="createParticipant">
          <h6>Nouveau Artistes</h6>
          <div class="grid grid-cols-2">
            <div>
              <div class="">
                    <div>
                      <img class="w-1/2" :src="image1"/>
                  </div>
              </div>
            </div>
          <div>
            <div class="flex gap-5 my-10">
              <div class="">
                <span class="">Nom</span>
              </div>
              <input type="text" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="nom" required />
            </div>
              <div class="flex gap-5">
                  <div class="">
                      <span class="" >Date de concert</span>
                  </div>
                  <input type="date" class=" text-black h-8 border-2 border-Default/me/Gris rounded " v-model="date"  format="dd/mm/yyyy"  required />
              </div>
            <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
              </div>
              <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" 
                    @change="previewImage">
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
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
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase 
                date:null,
                Artiste:{
                  nom:null,
                  photo:null,
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
            async createArtiste(){
                console.log('createArtiste')
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtiste= collection(firestore, "Artiste");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbArtiste,{
                    nom: this.nom,
                    date: this.date
                })
                console.log('document créé avec le id : ', docRef.id);
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
<!-- <template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Créer les artistes</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
            <form enctype="multipart/form-data"
                @submit.prevent="createArtistes">
                <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end mb-10">
                        <div class="m-auto">
                            <img class="" :src="imageData"/>
                        </div>
                        <label class="bg-jaune hover:text-jaune hover:bg-marron+ rounded-xl p-3 font-bold text-center" for="file">
                            <input type="file" class="hidden" ref="file" id="file" required
                            @change="previewImage">
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1" >Nom :  </span>
                            <input class="bg-jaune rounded-xl border-none w-80" type="text" placeholder="Nom de la personne"
                                v-model="Artistes.Nom" required />  
                        </label>
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit">
                                <Bouton2 class="w-32" Nom="Créer"/>
                            </button>

                            <RouterLink to="/Artistes" >
                                <button type="submit">
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
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
// import { preview } from "vite";
export default {
    data (){
        return {
            imageData:null,
            Artistes: {
                Nom:null,
                Role:null,
                Bio:null,
                Jour:null,
                photo:null,
            }
        }
    },
    name: "CréationView",
    components: { Bouton2 },
    mounted (){
        this.getArtistes();
    },
    methods : {
        async getArtistes (){
            const firestore = getFirestore();
            const dbArtistes = collection(firestore, "Artistes");
            const q = query(dbArtistes, orderBy('Nom','asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
        console.log("Liste des Artiste", this.listeArtiste)
            })
        },
        previewImage: function(event) {
            //debugger
            this.file = this.$refs.file.files[0];
            this.Artiste.photo = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'Artiste/'+this.Artiste.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artiste'), this.Artiste);
            });
            this.$router.push('/Artiste')
        },
    },
};
</script> -->