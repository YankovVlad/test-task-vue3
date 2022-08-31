<template>
  <button
    :disabled="disabled"
    class="button"
  >{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    disabled: Boolean,
  },
};
</script>

<style lang="scss">
.button {
  width: 100px;
  height: 40px;
  transition: color 0.2s ease, background-color 0.2s ease;
  &:not(.button:disabled):hover {
    background-color: $color-grey-2;
    color: $color-green-1;
  }
}
</style>