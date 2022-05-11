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
          <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam</p>
        </div>
      </div>
    </div>
    <div class="container about-container" data-aos="fade-up" data-aos-delay="200">
      <div class="row">

        <div class="col-lg-6 about-img">
          <img src="assets/img/johnnybrown.jpg" alt="Blind Johnny Brown">
        </div>

        <div class="col-md-6 about-content">
          <h2 class="about-title">We provide great services and ideass</h2>
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate
          </p>
          <p class="about-text">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum
          </p>
          <p class="about-text">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt molli.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
