<template>
    <main>
        <div class="container">
            <div class="row m-4 gy-4">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card" id="card">
                        <!-- <img src="{{ project.image }}" class="card-img-top" alt="..."> -->
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

<script>
export default{
    name:'AppMain',
    props:{
        data: Object
    }
}
</script>

<style lang="scss" scoped>

#card{
    height: 300px;
}

</style>