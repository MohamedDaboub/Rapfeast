<template>
          <form>
          <h6>Nouveau Artistes</h6>
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
        
            <button class="" type="button" @click='createArtiste()' title="Création">
              <modif class="fill-white" />
            </button>
            </div>

        </form>
</template>
<script>
import modif from "../../components/icons/SaveView.vue"
import Search from "../../components/icons/SeachView.vue"
import trach from "../../components/icons/TrashView.vue"
import card from "../../components/CardproView.vue"
import plus from "../../components/icons/PlusView.vue"

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
        
    components:{modif,Search,trach,card,plus},
    data(){ // Données de la vue
            return{                
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