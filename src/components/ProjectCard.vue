<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card" id="card">
        <img v-if="project.project_image" :src="project.image" class="card-img-top" :alt="project.project_name"> 
        <div class="card-body">
            <h5 class="card-title">{{ project.id  + ' ' + project.project_name}}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">VERSION:{{ project.version }}</p>
            <p class="card-text">START DATE:{{ project.start_date }}</p>
            <p class="card-text">UPLOAD DATE:{{ project.upload_date }}</p>
            <p class="card-text">VALUE:{{ project.value + '$'}}</p>
            <router-link :to="{ name: 'project', params: { slug: project.slug }}" class="btn btn-info">
                    Show More
            </router-link> 
        </div>
        
    </div>
</template>

<style scoped>
#card{
    min-height: 400px;
}
</style>