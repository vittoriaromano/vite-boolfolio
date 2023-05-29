<template>
    <header>
        <div class="container-fluid d-flex justify-content-between">
            <h1 class="display-5 fw-bold text-center"> Welcome </h1>
            <ul class="d-flex m-3">
                <li><router-link :to="{ name: 'home' }" class="nav-link">Home</router-link></li>
                <li><router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link></li>
            </ul>
        </div>

    </header>
</template>

<script>
export default{
    name:'AppHeader'
}
</script>

<style lang="scss" scoped>

</style>