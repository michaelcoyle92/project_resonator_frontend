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
  <section id="hero">
    <div class="hero-container">
      <div data-aos="fade-in">
        <div class="hero-logo">
          <img class="" src="assets/img/logo3.png" alt="Logo">
        </div>

        <h1>Welcome to Project Resonator</h1>
        <h2>We lie about <span class="typed"
            data-typed-items="random text, until I figure out, what to put here, lol bottom text"></span></h2>
        <div class="actions">
          <a href="/signup" class="btn-signup">Sign Up</a>
          <a href='/login' class="btn-login">Log In</a>
        </div>
      </div>
    </div>
  </section><!-- End Hero -->

  <div v-for="item in items" v-bind:key="item.name">
    {{ item.id }}: {{ item.name }}
  </div>

</template>


<style>
</style>