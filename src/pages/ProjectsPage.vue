<script>
import axios from 'axios';

export default{
    name:'ProjectPage',
    data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api/',
      apiUrls: {
        projects: 'projects'
      },
      projects: []
    }
  },
  methods: {
    getProject(){
      axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response)=>{
        this.projects = response.data.results;
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row m-4 gy-4">
                <div class="col col-md-4" v-for="project in projects">
                    <div class="card" id="card">
                        <img v-if="project.project_image" :src="project.image" class="card-img-top" :alt="project.project_name"> 
                        <div class="card-body">
                        <h5 class="card-title">{{ project.id  + ' ' + project.project_name}}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text">VERSION:{{ project.version }}</p>
                        <p class="card-text">START DATE:{{ project.start_date }}</p>
                        <p class="card-text">UPLOAD DATE:{{ project.upload_date }}</p>
                        <p class="card-text">VALUE:{{ project.value + '$'}}</p>
                        </div>
                    </div>
                </div>     
            </div>
       </div>
    </main>
</template>



<style lang="scss" scoped>

#card{
    height: 300px;
}

</style>