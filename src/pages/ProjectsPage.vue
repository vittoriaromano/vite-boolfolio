<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default{
    name:'ProjectPage',
    components: {
        ProjectCard
    },
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
                    <ProjectCard :project="project"></ProjectCard>
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