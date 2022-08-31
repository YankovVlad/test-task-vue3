<template>
  <button class="icon-button">
    <component :is="iconSelector(icon)" />
  </button>

</template>

<script>
import IconPlus from "../ui/icons/IconPlus.vue";
import IconPencil from "../ui/icons/IconPencil.vue";
export default {
  name: "IconButton",
  components: {
    IconPlus,
    IconPencil,
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconSelector() {
      return (icon) => {
        switch (icon) {
          case "plus":
            return "IconPlus";
          case "pencil":
            return "IconPencil";
          default:
            return "";
        }
      };
    },
  },
};
</script>

<style lang="scss">
svg {
  transition: filter 0.2s ease;
}
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  transition: filter 0.2s ease;
  background: transparent;
  &:not(.icon-button:disabled):hover svg {
    filter: brightness(0.8);
  }
  &:disabled svg {
    filter: brightness(0.6);
  }
}
</style>