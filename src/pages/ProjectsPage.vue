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
        apiBaseUrl: 'http://127.0.0.1:8000/api',
        apiUrls: {
            projects: '/projects'
        },
        projects: []
        }
  },
  methods: {
    getProjects(){
      axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response)=>{
        this.projects = response.data.results;
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row p-4 gy-4">
                <div class="col col-md-4" v-for="project in projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>     
            </div>
       </div>
    </main>
</template>



<style lang="scss" scoped>
main{
  background: linear-gradient(rgb(168, 216, 234), rgb(255, 255, 210));
}
#card{
    height: 300px;
}

</style>