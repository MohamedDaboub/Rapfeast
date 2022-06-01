<template>
   <div class=" text-white mx-4 py-5">
        <div class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth    ">
            <h5>Liste des Artistes</h5>
        </div>    
        <hr/>
        <form>
          <h6>Nouveau pays</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="" v-model="nom" required />
            <button class="" type="button" @click='createArtistes()' title="Création">
              <Modifier />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="">Liste des Pays actuels</div>                          
                          <span class="">
                            <div class="" >
                                <div class="">
                                  <span class="" >Filtrage</span>
                                </div>
                                <input type="text" class="" />
                                <button class="" type="submit" title="Création">
                                  <Search />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artistes in orderByName' :key='Artistes.id'>
                        <td>
                          <form>
                            <div class="">
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="" v-model="Artistes.nom" required />
                              <button class="" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
                                <Modifier />
                              </button>
                              <button class="" type="button" @click.prevent="deleteArtistes(Artistes)" title="Suppression">
                                <Delete />
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


export default {
  name:'ListeView',
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[] // Liste des pays synchronisée - collection pays de Firebase
            }
        },
        computed:{
            orderByName:function(){
                return this.listeArtistesSynchro.sort(function(a, b){
                  if(a.nom < b.nom)  return -1;
                  if(a.nom > b.nom)  return 1;
                  return 0
                })
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
                const dbArtistes= collection(firestore, "Artistes");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbArtistes, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                })
            },
            async createArtistes(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "Artistes");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbArtistes,{
                    nom: this.nom
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: Artistes.nom
                }) 
             },
            async deleteArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
        },

}
</script>