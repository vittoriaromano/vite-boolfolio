<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow py-3 sticky-top" id="nav">
            <div class="container">
                <h1>Welcome</h1>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">Home</router-link></li>
                        <li class="nav-item"><router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name:'AppHeader'
}
</script>

<style scoped>
h1 {
    font-weight: 600;
    color: whitesmoke;
}
a {
    color: #6eb2cb;
    text-decoration: none;
    transition: all 0.4s;
}
a:hover {
    color: #FFFFD2;
}
#nav{
    background-color: #A8D8EA;
}
.navbar-nav .nav-link.active {
    color: #FFFFD2;
}

</style>