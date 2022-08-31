<template>
  <ListBar
    :isLoading="isLoading"
    :items="subcategories"
    type="subcat"
    modal-title="Edit subcategory"
    :link-to="link"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListBar from "../bars/listBar/ListBar.vue";
export default {
  name: "SubcategoryBar",
  components: {
    ListBar,
  },
  computed: {
    ...mapGetters("subcategories", ["subcategories", "isLoading"]),
    link() {
      return `/catalog/${this.$route.params.catid}`;
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.catid !== from.params.catid) {
        this.fetchSubcategories();
      }
    },
  },
  mounted() {
    this.fetchSubcategories();
  },
  methods: {
    ...mapActions("subcategories", ["fetchSubcategories"]),
  },
};
</script>