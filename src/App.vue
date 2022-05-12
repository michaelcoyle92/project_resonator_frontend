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
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/items/3">Guitars</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/Contact">Contact Us</router-link>
  </nav>
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
