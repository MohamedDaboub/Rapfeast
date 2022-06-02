<template>
   <div class=" text-white mx-4 py-5 text-text">
        <div class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth    ">
            <h5>Liste des Artistes</h5>
        </div>    
        <hr/>
        <form>
          <h6>Nouveau Artistes</h6>
          <div class="flex  my-10">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="text-black" v-model="nom" required />
            <button class="" type="button" @click='createArtiste()' title="Création">
              <modif class="fill-white" />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="">
                          <div class="">Liste des Artiste actuels</div>                          
                          <span class="">
                            <div class="flex gap-4 my-10" >
                                <div class="">
                                  <span class="" >Filtrage</span>
                                </div>
                                <input type="text" class="text-black" v-model="filter"/>
                                <button class="bg-black" type="submit" title="Création">
                                  <Search class="fill-white" />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artiste in orderByName' :key='Artiste.id'>
                        <td>
                          <form>
                            <div class="  ">    
                              <div class="flex flex-col">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="text-black" v-model="Artiste.nom" required />
                              <button class="" type="button" @click.prevent="updateArtiste(Artiste)" title="Modification">
                                <modif class="fill-white"/>
                              </button>
                              <button class="" type="button" @click.prevent="deleteArtiste(Artiste)" title="Suppression">
                                <trach class="fill-white"/>
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 py-10 mx-10">
        <div v-for="artiste in listeArtistesSynchro" :key="artiste.id">
            <card
                :nomart="artiste.nom"
                :nbrJour="artiste.date"
                image1="/public/img/Image7.webp"/>
        </div>

    </div>
</template>
<script>
import modif from "../../components/icons/SaveView.vue"
import Search from "../../components/icons/SeachView.vue"
import trach from "../../components/icons/TrashView.vue"
import card from "../../components/CardproView.vue"

// Bibliothèque Firestore : import des fonctions
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
    orderBy,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


export default {
  name:'ListeView',
  props:{

    },
        
    components:{modif,Search,trach,card},
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
                filter:'',
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
                    nom: this.nom
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
                    nom: Artiste.nom
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
        },

}

</script>