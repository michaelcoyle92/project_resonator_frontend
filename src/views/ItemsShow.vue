
<script type="text/javascript">
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
    },
  },
};


function _RRR() { var e = document.createElement("script"); e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", e.onload = function () { var e = document.createElement("script"); e.src = "https://static.reverb-assets.com/assets/webpack/reverb-embed.js", document.body.appendChild(e) }, document.body.appendChild(e) } window.addEventListener ? window.addEventListener("load", _RRR, !1) : window.attachEvent ? window.attachEvent("onload", _RRR) : window.onload = _RRR;


</script>

<template>

  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>{{ item.name }}</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->
    <meta property="og:title" content="">
    <meta property="og:image" content="">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="">
    <meta property="og:description" content="">

    <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
      rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="/assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
  * Template Name: Imperial - v5.7.0
  * Template URL: https://bootstrapmade.com/imperial-free-onepage-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
  </head>
  <!-- <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a> -->

  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <br>
      <br>
      <br>

      <div class="d-flex justify-content-between align-items-center">
        <h2>Guitars</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Guitars</li>
        </ol>
      </div>

    </div>
  </section><!-- End Breadcrumbs -->

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-6">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">



              <div class="swiper-slide"><img v-bind:src="item.images1.url"></div>
              <div class="swiper-slide"><img v-bind:src="item.images2.url"></div>
              <!-- <div class="swiper-slide"><img v-bind:src="item.images3.url"></div> -->

            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
            <h3>{{ item.manufacturer }} {{ item.name }} </h3>
            <ul>
              <li><strong>Category</strong>: Roundneck </li>
              <li><strong>Manfactuer</strong>: {{ item.manufacturer }}</li>
              <li><strong>Year</strong>: {{ item.year }}</li>
            </ul>
          </div>
          <div class="portfolio-description">
            <h2>{{ item.year }} {{ item.manufacturer }} {{ item.name }}</h2>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>

      </div>

    </div>

    <div data-reverb-embed-listings data-reverb-currency="USD" data-reverb-search-query=""
      data-reverb-search-product-type="resonators" data-reverb-search-price-max="35000"
      data-reverb-search-price-min="100" data-reverb-search-year-max="" data-reverb-search-year-min=""
      data-reverb-search-make="National" data-reverb-search-model="" data-reverb-search-per-page="6">
    </div>



    <!-- <div id="preloader">
      <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
    </div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a> -->

  </section>
  <!-- End Portfolio Details Section -->

  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus />
  </section>






  <!-- <div class="items-show">
    <h1>{{ message }}</h1>
    <p>id: {{ item.id }} </p>
    <p>name: {{ item.name }} </p>
    <p>manufacturer: {{ item.manufacturer }} </p>
    <p>year: {{ item.year }} </p>
    <p>description: {{ item.description }} </p>
    <p>category_id: {{ item.category_id }} </p>
    <p>image: {{ item.image }} </p>
    <img v-bind:src="item.images.url">
    <p>user_id: {{ item.user_id }} </p>
    <a href="/items">All items</a>
    <hr />
  </div> -->







</template>

<style>
.reverb-embedded-listings {
  list-style-type: none !important;
  float: left;
}

.reverb-embedded-listing {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 0.25em;
  box-shadow: 2px 2px 1px #f9f9f9;
  width: 200px;
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
  font-family: "Arial", "Verdana", sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  list-style-type: none;
}

.reverb-embedded-listing a {
  text-decoration: none;
  color: #0080a5;
}

.reverb-embedded-listing-info {
  border-top: 1px solid #ddd;
  padding: 1em;
  height: 5em;
}

.reverb-embedded-listing-title {
  display: block;
  max-height: 38px;
  color: #6f6f6f;
  font-size: 1.25rem;
  font-weight: bold;
  overflow: hidden;
}

.reverb-embedded-listing-price {
  position: absolute;
  padding: 0.75rem;
  top: 0;
  right: 0;
  font-weight: bold;
  background-color: #D27900;
  color: white;
}

.reverb-embedded-listing img {
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  width: 100%;
}

.reverb-embedded-listing img:hover {
  opacity: 0.85;
}

< !-- Horizontal Comparison Shopping styles -->ul.reverb-embedded-comparison-shopping-pages-horizontal {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, Sans-Serif;
  display: inline-block;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal li {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 18px;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-left-content {
  float: left;
  width: 120px;
  height: 120px;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-right-content {
  float: right;
  width: 400px;
  height: 120px;
  box-sizing: border-box;
  padding: 10px 15px 10px 15px;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal a {
  text-decoration: none;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal a:hover img {
  opacity: 0.9;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal a:hover li {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-prices {
  color: #333;
  font-size: 14px;
  margin-top: 8px;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-price {
  margin-right: 10px;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-price-amount {
  font-weight: bold;
  color: #f6870f;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-summary {
  overflow: hidden;
  width: 100%;
  height: 38px;
  color: #888;
}

ul.reverb-embedded-comparison-shopping-pages-horizontal .reverb-embedded-comparison-shopping-page-title {
  display: block;
  color: #333;
  font-weight: bold;
  margin: 5px 0 8px 0;
  font-size: 16px;
  height: 19px;
  overflow: hidden;
}

< !-- Verticle Comparison Shopping Page styles -->ul.reverb-embedded-comparison-shopping-pages-vertical {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, Sans-Serif;
  display: inline-block;
}

ul.reverb-embedded-comparison-shopping-pages-vertical li {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 18px;
}

ul.reverb-embedded-comparison-shopping-pages-vertical a {
  text-decoration: none;
}

.reverb-embedded-comparison-shopping-page-image-overlay {
  position: relative;
  width: 200px;
  height: 200px;
}

.reverb-embedded-comparison-shopping-page-image-overlay img {
  position: absolute;
  top: 0;
}

.reverb-embedded-comparison-shopping-page-image-overlay-gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(62%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1)));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 100%);
  /* IE10+ */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 100%);
  /* W3C */
  opacity: 0.8;
}

ul.reverb-embedded-comparison-shopping-pages-vertical .reverb-embedded-comparison-shopping-page-prices {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: #fff;
  bottom: 0;
  opacity: 0.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.reverb-embedded-comparison-shopping-page-bottom-content {
  position: relative;
  width: 200px;
}

ul.reverb-embedded-comparison-shopping-pages-vertical a:hover img {
  opacity: 0.9;
}

ul.reverb-embedded-comparison-shopping-pages-vertical a:hover li {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

ul.reverb-embedded-comparison-shopping-pages-vertical .reverb-embedded-comparison-shopping-page-summary {
  display: none;
}

ul.reverb-embedded-comparison-shopping-pages-vertical .reverb-embedded-comparison-shopping-page-title {
  display: block;
  margin: 12px 0 12px 0;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  color: #333;
  font-weight: bold;
  height: 36px;
  overflow: hidden;
}
</style>



