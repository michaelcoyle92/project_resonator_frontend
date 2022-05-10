<template >
  <div class="my-10">
    <v-container>
      <h1 class="m-3">Keep In Touch</h1>

      <v-card>
        <v-card-title>
          <v-row>
            <v-col xl="6" lg="6" md="6" sm="12">
              <form action="" class="form">
                <v-text-field label="Enter Your Name" class="form__control my-3" hide-details="auto" outlined>
                </v-text-field>
                <v-text-field label="Enter Your Email" class="form__control my-3" hide-details="auto" outlined>
                </v-text-field>
                <v-text-field label="Enter Your Subject" class="form__control my-3" hide-details="auto" outlined>
                </v-text-field>
                <v-textarea class="form__control" label="Enter Your Message" outlined></v-textarea>
                <v-btn color="error" class="login__btn">Contact Us</v-btn>
              </form>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="12">
              <div class="my-3 text-gray">
                <h4>Email</h4>
                <span>maccoyle@gmail.com</span>
              </div>
              <hr />
              <div class="my-3 text-gray">
                <h4>Company</h4>
                <span>Coyle, Ramirez & Sons</span>
              </div>
              <hr />

              <div class="my-3 text-gray">
                <h4>Location</h4>
                <span>Philadelphia, Pennsylvania</span>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
  <!--Section: Contact v.2-->
  <section class="mb-4">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Form</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us
      directly. Our team will come back to you within
      a matter of hours to help you.</p>

    <div class="row">

      <!--Grid column-->
      <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

          <!--Grid row-->
          <div class="row">

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="name" name="name" class="form-control">
                <label for="name" class="">Your name</label>
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="email" name="email" class="form-control">
                <label for="email" class="">Your email</label>
              </div>
            </div>
            <!--Grid column-->

          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <input type="text" id="subject" name="subject" class="form-control">
                <label for="subject" class="">Subject</label>
              </div>
            </div>
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">

            <!--Grid column-->
            <div class="col-md-12">

              <div class="md-form">
                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                <label for="message">Your message</label>
              </div>

            </div>
          </div>
          <!--Grid row-->

        </form>

        <div class="text-center text-md-left">
          <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
      </div>



    </div>

  </section>
  <!--Section: Contact v.2-->
</template>
<script>
export default {
  name: "ContactVue",
};
</script>
<style >
</style>