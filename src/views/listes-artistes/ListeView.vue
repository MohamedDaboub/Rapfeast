<template>
   <div class=" text-white mx-4 py-5 text-text">
        <div class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth    ">
            <h1>Liste des Artistes</h1>
        </div>    
        <hr/>
        <div class="flex justify-between lg:mx-16 mx-6 my-10 items-center py-10">
          <h2 class="text-lg md:text-2xl text-center font-timmana">Creer un nouveau Artiste</h2>
          <RouterLink class="my-2" to="/Creat"><plus></plus></RouterLink>
        </div>
        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="" class="">
                          <div class="my-10 text-lg md:text-2xl py-10 font-timmana text-center">Liste des Artiste actuels</div>                          
                          <span class="">
                            <div class="flex gap-4 my-10" >
                                <div class="">
                                  <span class="text-lg md:text-lg py-10 font-poppins" >Filtrage</span>
                                </div>
                                <input type="text" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="filter"/>
                                <button class="" type="submit" title="Création">
                                  <Search class="fill-white" />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artiste in filterByName' :key='Artiste.id'>
                        <td>
                          <form>
                            <div class="grid grid-cols-4   ">    
                              <div class="flex flex-col">
                                <span class="font-poppins text-base ">Nom</span>
                              </div>
                              <input type="text" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="Artiste.nom" required />
                              <input type="date" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="Artiste.date" required />
                              <div>
                              <RouterLink :to="{ name:'updateArtistes', params: {id:Artiste.id}}">
                                <button class="" type="button"  title="Modification">
                                  <edit class="fill-white"/>
                                </button>
                              </RouterLink>
                              <RouterLink :to="{ name:'deleteArtistes', params: {id:Artiste.id}}">
                              <button class="" type="button" title="Suppression">
                                <trach class="fill-white"/>
                              </button>
                              </RouterLink>
                              </div>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 py-10 mx-10">
        <div v-for="artiste in listeArtistesSynchro" :key="artiste.id" >
            <card
                :image1="artiste.image1"
                :nomart="artiste.nom"
                :nbrJour="artiste.date"
                />
              
        </div>

    </div>
</template>
<script>

import modif from "../../components/icons/SaveView.vue"
import Search from "../../components/icons/SeachView.vue"
import trach from "../../components/icons/TrashView.vue"
import card from "../../components/CardproView.vue"
import plus from "../../components/icons/PlusView.vue"
import edit from "../../components/icons/EditView.vue"

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
    uploadString,
    deleteObject,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  name:'ListeView',
  props:{

    },
        
    components:{modif,Search,trach,card,plus,edit},
    data(){ // Données de la vue
            return{ 
                Artiste:null,
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
                filter:'',
                date:null
                
            }
        },
        computed:{
            orderByName:function(){
                return this.listeArtistesSynchro.sort(function(a, b){
                  if(a.nom < b.nom)  return -1;
                  if(a.nom > b.nom)  return 1;
                  return 0
                })
            },
            filterByName:function(){
                if(this.filter.length > 0){
                    let filter = this.filter.toLowerCase();
                    return this.orderByName.filter(function(Artiste){
                        return Artiste.nom.toLowerCase().includes(filter);
                    })
                }else{
                    return this.orderByName;
                }
            }
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
                    this.listeArtistesSynchro.forEach(function (Artiste) {
                        const storage = getStorage();
                        const spaceRef = ref(storage, "artiste/"+ Artiste.image1);
                        getDownloadURL(spaceRef)
                          .then((url) => {
                            Artiste.image1 = url;
                          })
                          .catch((error) => {
                            console.log("erreur de downloadURL", error);
                          });
                      });
                    });
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