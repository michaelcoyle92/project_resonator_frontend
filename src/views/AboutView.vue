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
  <section id="about">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-12">
          <h3 class="section-title">About Project Resonator</h3>
          <div class="section-title-divider"></div>
          <p class="section-description">Yes, those metal things</p>
        </div>
      </div>
    </div>
    <div class="container about-container" data-aos="fade-up" data-aos-delay="200">
      <div class="row">

        <div class="col-lg-6 about-img">
          <img src="assets/img/johnnybrown.jpg" alt="Blind Johnny Brown">
        </div>

        <div class="col-md-6 about-content">
          <h2 class="about-title">We like Resonators</h2>
          <p class="about-text">
            We post lots of things
          </p>
          <p class="about-text">
            In many ways
          </p>
          <p class="about-text">
            Check it out
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
