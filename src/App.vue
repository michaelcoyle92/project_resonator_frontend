<script>
import axios from "axios";
export default {
  data: function () {
    return {
      items: [],
      search: "",
    };
  },
  methods: {
    newSearch: function () {
      console.log('new search...')
      axios.get(`/items.json?search_term=${this.search}`).then(response => {
        console.log(response.data)
        this.items = response.data;
      })
    }
  },
};


</script>

<template>

  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo mr-auto"><img src="assets/img/logo3.png" alt=""></a>
      <!-- Uncomment below if you prefer to use a text logo -->
      <!-- <h1 class="logo mr-auto"><a href="index.html">Project Resonator</a></h1> -->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Guitars</a></li>
          <li><a class="nav-link scrollto" href="#testimonials">Blog</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <router-view />
  Search: <input type="text" v-model="search">
  <button v-on:click="newSearch()">New Search</button>

  <div v-for="item in items" v-bind:key="item.name">
    {{ item.id }}: {{ item.name }}
  </div>
  <form action="https://reverb.com">
    <input type="hidden" name="gs_partner" value="[your affiliate id]">
    <input type="hidden" name="utm_source" value="js_embed">
    <input type="hidden" name="utm_campaign" value="affiliate_embed">
    <input name="query"
      style="font-size: 1.10em; border: 1px solid #d2d2d2; background-color: #f2f2f0; padding: 0.42857rem 0.85714rem; -webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px; width: 400px;"
      placeholder="Find Gear on Reverb">
    <input type="image" alt="Submit Search" src="http://i.imgur.com/Xqd1zPL.png?1"
      style="height: 32px; margin-bottom: -10px">
  </form>

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
