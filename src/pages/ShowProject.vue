<script>
import axios from 'axios';

export default {
    name: "ShowProject",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <section>
        <button type="button" class="btn btn-info">
            <!-- <router-link :to="{name: 'projects' }">
        Back to projects list
           </router-link> -->
        </button>
    <h1>{{ project.id  + ' ' + project.project_name}}</h1>
    <p class="card-text">{{ project.description }}</p>
    <p>{{ project.overview }}</p> -->
    </section>
    
</template>

<style scoped>
section{
  background: linear-gradient(rgb(168, 216, 234), rgb(255, 255, 210));
  height: 80vh;
}
</style>