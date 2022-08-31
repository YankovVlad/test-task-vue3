<template>
  <div class="bar-title">
    <div class="bar-title__wrapper">
      <span class="bar-title__title">{{ title }}</span>
      <IconButton
        :icon="icon"
        @click="toggleModal(true)"
      />

    </div>

    <ModalWindow
      v-if="isOpenModal"
      :title="modalWindowTitle"
      :type="type"
      @close="toggleModal(false)"
    />
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import ModalWindow from "./ModalWindow.vue";
export default {
  name: "BarTitle",
  components: {
    IconButton,
    ModalWindow,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    modalWindowTitle: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    toggleModal(value) {
      this.isOpenModal = value;
    },
  },
};
</script>

<style lang="scss">
.bar-title {
  padding: 8px 20px;
  border-bottom: 1px solid $border-color;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 240px;
  }
  &__title {
    @include fontSize("l");
  }
}
</style>