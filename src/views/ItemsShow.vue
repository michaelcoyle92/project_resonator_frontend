<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      isLoggedIn: false,
      getUserId: 0,
      item: {}
    };
  },
  created: function () {
    this.showItem();
  },
  watch: {
    $route: function () {
      console.log('in route')
      this.isLoggedIn = !!localStorage.jwt;
      this.getUserId = localStorage.user_id;
    }
  },
  methods: {
    showItem: function () {
      console.log('showing item...')
      // get data from rails show action
      console.log(this.$route.params.id);
      axios.get(`/items/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.item = response.data;
      })
    },
    deleteItem: function () {
      console.log('deleting item...')
      axios.delete(`/items/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/items")
      })
    }
  },
};
</script>

<template>
  <div class="items-show">
    <h1>{{ message }}</h1>
    <p>id: {{ item.id }} </p>
    <p>name: {{ item.name }} </p>
    <p>manufacturer: {{ item.manufacturer }} </p>
    <p>year: {{ item.year }} </p>
    <p>description: {{ item.description }} </p>
    <p>category_id: {{ item.category_id }} </p>
    <p>images: {{ item.images.url }} </p>
    <img v-bind:src="item.images">
    <p>user_id: {{ item.user_id }} </p>
    <a href="/items">All items</a>
    <hr />


  </div>
</template>

<style>
</style>