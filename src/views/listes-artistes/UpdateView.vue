<template>
    <div>
        <h1 class="text-xl md:text-3xl text-center py-10 font-timmana underline-offset-2 underline effet-shawdow light:effet-shawdowinligth text-white">Modifier les artistes</h1>

        <section class="">
            <form enctype="multipart/form-data"
                @submit.prevent="updateArtiste">
                <div class="rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end">
                        <div class="m-auto">
                            <img class="" :src="imageData"/>
                        </div>
                        <label class=" rounded-xl p-3 font-bold text-center text-white" for="file" required>
                            <input type="file" class="hidden text-white" ref="file" id="file"
                            @change="previewImage">
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col mb-3">
                            <span class="text-white" >Nom :  </span>
                            <input class="" type="text" placeholder="Nom " required
                                v-model="Artiste.nom" />  
                        </label>
                        <input type="date" class="text-black h-8 border-2 border-Default/me/Gris rounded" v-model="Artiste.date" required />
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit" class="bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black" @click.prevent="updateArtiste(Artiste)"> modifier
                            </button>
                            <RouterLink to="/liste" class=" bg-Default/me/Gris px-8 py-4 my-7 text-base hover:bg-white hover:text-black" >
                                <button type="submit">Cancel
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
    addDoc,
    updateDoc, 
    deleteDoc,
    onSnapshot, 
    query,
    orderBy
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadString,
    deleteObject,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
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
    name: "CréationView",
    components: {  },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods : {
        async getArtiste(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "Artiste", id);
            this.refArtiste = await getDoc(docRef);
            if(this.refArtiste.exists()){
                this.Artiste = this.refArtiste.data();
                this.photoActuelle = this.Artiste.image1;
            }else{
                this.console.log("Artistes inexistant");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'artiste/'+this.Artiste.image1);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.imageData = url;
            })
            .catch((error) =>{
                // console.log('erreur downloadUrl', error);
            })
        },
        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            this.Artiste.image1 = this.file.name;
            this.imgModifiee = true;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        async updateArtiste(){
            if(this.imgModifiee){
                const storage = getStorage();
                let docRef = ref(storage, 'artiste/'+this.photoActuelle);
                console.log(docRef);
                deleteObject(docRef);
                docRef = ref(storage, 'artiste/'+this.Artiste.image1);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.Artiste.image1);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "Artiste", this.$route.params.id), this.Artiste);
            this.$router.push('/liste');       
        }
    }
}
</script>