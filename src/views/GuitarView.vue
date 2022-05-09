<script>
import axios from "axios"
export default {
  data: function () {
    return {
      Item: [],
      message: "All Guitars Page",
    };
  },
  created: function () {
    this.indexItems();

  },
  methods: {
    showItem: function () {
      axios.get(`http://localhost:3000/posts/${this.$route.params.id}`).then(response => {
        console.log(response.data)
        this.item = response.data;

