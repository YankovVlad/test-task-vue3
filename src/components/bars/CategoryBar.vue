<template>
  <ListBar
    :items="categories"
    :isLoading="isLoading"
    type="cat"
    modal-title="Edit category"
    link-to="/catalog"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListBar from "../bars/listBar/ListBar.vue";
export default {
  name: "CategoryBar",
  components: {
    ListBar,
  },
  computed: {
    ...mapGetters("categories", ["categories", "isLoading"]),
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
  },
};
</script>