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
  Search: <input type="text" v-model="search">
  <button v-on:click="newSearch()">New Search</button>

  <div v-for="item in items" v-bind:key="item.name">
    {{ item.id }}: {{ item.name }}
  </div>

</template>


<style>
</style>