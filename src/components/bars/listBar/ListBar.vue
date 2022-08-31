<template>
  <Loader v-if="isLoading" />
  <div
    v-else
    class="list-bar"
  >
    <ul class="list-bar__list">

      <ListBarItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :type="type"
        :modal-title="modalTitle"
        @click.stop="goTo($event, item.title)"
      />
    </ul>
  </div>
</template>

<script>
import Loader from "../../ui/Loader.vue";
import ListBarItem from "../listBar/ListBarItem.vue";
import BarTitle from "../../ui/BarTitle.vue";
export default {
  name: "ListBar",
  components: {
    ListBarItem,
    BarTitle,
    Loader,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    items: {
      type: [Array, Set],
      default: () => [],
    },
    icon: {
      type: String,
      default: "plus",
    },
    modalTitle: {
      type: String,
      default: "",
    },
    linkTo: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    isLoading: Boolean,
  },

  methods: {
    goTo(e, item) {
      if (
        e.target.classList.contains("list-bar-item__active") ||
        e.target.classList.contains("list-bar-item__title-active")
      ) {
        this.$router.push({
          path: `${this.linkTo}`,
        });
      } else {
        this.$router.push({
          path: `${this.linkTo}/${item.toLowerCase().replaceAll(" ", "_")}`,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.list-bar {
  &__list {
    padding: 0;
    margin: 0;
    max-height: 84vh;
    @include xl {
      max-height: 89vh;
    }
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
  }
}
</style>