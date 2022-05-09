<script>
import axios from "axios"
export default {
  data: function () {
    return {
      message: "All Guitars Page",
      items: [],
    };
  },
  created: function () {
    this.indexItems();
  },
  methods: {
    indexItem: function () {
      axios.get("/items.json").then((response) => {
        console.log(response.data);
        this.item = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="items-index">
    <h1>All Guitars</h1>
    <div v-for="item in items" v-bind:key="item.id">
      <h2>{{ item.name }}</h2>
      <img v-bind:src="item.images" v-bind:alt="item.name" />
      <p>Manufacturer: {{ item.manufacturer }}</p>
      <p>Year Produced: {{ item.year }}</p>

      <router-link v-bind:to="`/items/${item.id}`">More details</router-link>
    </div>
  </div>
</template>

<style>
/* css selector */
body {
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/old_mathematics.png')
}

img {
  width: 150px;
  height: 200px;
}

/* css property */
</style>