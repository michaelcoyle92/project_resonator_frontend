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
    indexItems: function () {
      axios.get("/items.json").then((response) => {
        console.log("items index", response);
        this.items = response.data;
      });
    },
  },
};
</script>

<template>

  <div></div>



  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-12">
          <h3 class="section-title">Guitars</h3>
          <div class="section-title-divider"></div>
          <p class="section-description">Anything with a resonating cone, we will try to document here</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">Tricone</li>
            <li data-filter=".filter-card">Biscuit Cone</li>
            <li data-filter=".filter-web">Spider Cone</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img
            src="https://www.dreamguitars.com/shop/media/catalog/product/cache/1/thumbnail/540x720/17f82f742ffe127f42dca9de82fb58b1/i/m/image_full_4193.jpg"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>National Style 1 Tricone</h4>
            <p>Tricone</p>
            <a href="https://www.dreamguitars.com/shop/media/catalog/product/cache/1/thumbnail/540x720/17f82f742ffe127f42dca9de82fb58b1/i/m/image_full_4193.jpg"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App"><i
                class="bi bi-plus"></i></a>
            <a href="/items/1" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfXWC51x1bU2VbmizmzwZKZ7AaLMCSXP3SQ&usqp=CAU"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Recording King RR-36 Maxwell</h4>
            <p>Spider Cone</p>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfXWC51x1bU2VbmizmzwZKZ7AaLMCSXP3SQ&usqp=CAU"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i
                class="bi bi-plus"></i></a>
            <a href="/items/9" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img
            src="https://images.squarespace-cdn.com/content/v1/51aa317fe4b013f5da49bb32/1435251497576-N5DJI3AZ80M5SNKUUISG/Tri--Cone-1.jpg"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Beard Tricone Custom</h4>
            <p>Tricone</p>
            <a href="https://images.squarespace-cdn.com/content/v1/51aa317fe4b013f5da49bb32/1435251497576-N5DJI3AZ80M5SNKUUISG/Tri--Cone-1.jpg"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i
                class="bi bi-plus"></i></a>
            <a href="/items/4" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzk4dOioBxyjOMxNzoJTB403-4pTOZxjWiA&usqp=CAU"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Gretsch G9201 Honey Dipper</h4>
            <p>Biscuit Cone</p>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzk4dOioBxyjOMxNzoJTB403-4pTOZxjWiA&usqp=CAU"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i
                class="bi bi-plus"></i></a>
            <a href="/items/6" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvsVXrY5pKlAHRy3zLeFVDS_qAC56ahSRQQ&usqp=CAU"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Dobro Hound Dog</h4>
            <p>Biscuit Cone</p>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvsVXrY5pKlAHRy3zLeFVDS_qAC56ahSRQQ&usqp=CAU"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i
                class="bi bi-plus"></i></a>
            <a href="/items/8" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img
            src="https://static.wixstatic.com/media/db0e5b_d1b16b1c1cf54e4cb0227da667084b3a~mv2.jpg/v1/fill/w_560,h_527,al_c,q_80,enc_auto/db0e5b_d1b16b1c1cf54e4cb0227da667084b3a~mv2.jpg"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>National Style 1 Reissue</h4>
            <p>Tricone</p>
            <a href="https://static.wixstatic.com/media/db0e5b_d1b16b1c1cf54e4cb0227da667084b3a~mv2.jpg/v1/fill/w_560,h_527,al_c,q_80,enc_auto/db0e5b_d1b16b1c1cf54e4cb0227da667084b3a~mv2.jpg"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i
                class="bi bi-plus"></i></a>
            <a href="/portfolio-details.html" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img
            src="https://static.wixstatic.com/media/db0e5b_4a37eba1e2784339b8a4e785d3bd718e~mv2.jpg/v1/fill/w_640,h_602,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db0e5b_4a37eba1e2784339b8a4e785d3bd718e~mv2.jpg"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>National Style 0 Single Cone</h4>
            <p>Biscuit Cone</p>
            <a href="https://static.wixstatic.com/media/db0e5b_4a37eba1e2784339b8a4e785d3bd718e~mv2.jpg/v1/fill/w_640,h_602,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db0e5b_4a37eba1e2784339b8a4e785d3bd718e~mv2.jpg"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i
                class="bi bi-plus"></i></a>
            <a href="/items/3" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzBLTndaJ64ulTlG0fDyX_NVopaQOSPuf3zU55XHwgmy_Wb-w5tfYC5M-AlqKHLfvNDw&usqp=CAU"
            class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Recording King Swamp Dog Parlor</h4>
            <p>Biscuit Cone</p>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzBLTndaJ64ulTlG0fDyX_NVopaQOSPuf3zU55XHwgmy_Wb-w5tfYC5M-AlqKHLfvNDw&usqp=CAU"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i
                class="bi bi-plus"></i></a>
            <a href="/items/7" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://www.cathedralguitar.com/Auction/RecordingKing/RM991/RM991a.jpg" class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>Recording King RM-991</h4>
            <p>Spider Cone</p>
            <a href="https://www.cathedralguitar.com/Auction/RecordingKing/RM991/RM991a.jpg"
              data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i
                class="bi bi-plus"></i></a>
            <a href="/items/5" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
          </div>
        </div>

      </div>

    </div>
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

  </section><!-- End Portfolio Section -->


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