<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>CPS 831 Term Project</h1>
  <h3>By: Alton Dulinen, Aayush Thapa, Cindy Fang</h3>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Add</router-link> |
    <router-link to="/query">Query</router-link> |
    <router-link to="/change">Change</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
