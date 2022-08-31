<template>
  <Loader v-if="isLoading" />
  <div
    v-else
    class="items-bar"
  >

    <div class="items-bar__list">
      <ItemsBarCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BarTitle from "../../ui/BarTitle.vue";
import ItemsBarCard from "./ItemsBarCard.vue";
import Loader from "../../ui/Loader.vue";
export default {
  name: "ItemsBar",
  components: {
    ItemsBarCard,
    BarTitle,
    Loader,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters("items", ["items", "isLoading"]),
  },
  watch: {
    $route(to, from) {
      if (to.params.subcatid !== from.params.subcatid) {
        this.fetchItems();
      }
    },
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    ...mapActions("items", ["fetchItems"]),
  },
};
</script>

<style lang="scss">
.items-bar {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }
}
</style>