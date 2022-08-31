<template>
  <li :class="isActiveItem">
    <p :class="isActiveTitle"> {{ formattedItem }} </p>
    <IconButton
      icon="pencil"
      @click.stop="toggleModal(true)"
    />
    <ModalWindow
      v-if="isOpenModal"
      :title="modalTitle"
      :type="type"
      :item="item"
      @close="toggleModal(false)"
    />
  </li>
</template>

<script>
import IconButton from "../../ui/IconButton.vue";
import ModalWindow from "../../ui/ModalWindow.vue";
export default {
  name: "ListBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "",
    },
    modalTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  components: {
    IconButton,
    ModalWindow,
  },
  computed: {
    formattedItem() {
      return this.item.title[0].toUpperCase() + this.item.title.slice(1);
    },
    isActiveItem() {
      return [
        "list-bar-item",
        {
          "list-bar-item__active":
            this.$route.params.catid ===
              this.item.title.toLowerCase().replaceAll(" ", "_") ||
            this.$route.params.subcatid ===
              this.item.title.toLowerCase().replaceAll(" ", "_"),
        },
      ];
    },
    isActiveTitle() {
      return [
        "list-bar-item__title",
        {
          "list-bar-item__title-active":
            this.$route.params.catid ===
              this.item.title.toLowerCase().replaceAll(" ", "_") ||
            this.$route.params.subcatid ===
              this.item.title.toLowerCase().replaceAll(" ", "_"),
        },
      ];
    },
  },
  methods: {
    toggleModal(value) {
      this.isOpenModal = value;
    },
  },
};
</script>

<style lang="scss">
.list-bar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 20px;
  border-bottom: 1px solid $border-color;

  &__title {
    @include fontSize("s");
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
  }
  &__active {
    border: 1px solid $color-green-1;
  }
  &__title-active {
    color: $color-green-1;
  }
}
</style>