<template>
  <input
    :type="type"
    class="input"
    :placeholder="placeholder"
    :value="value"
    @input="changeValue"
  >
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeValue(e) {
      this.$emit("input", e);
    },
  },
};
</script>

<style lang="scss">
.input {
  height: 40px;
  width: 80%;
  margin-bottom: 10px;
  padding: 8px 16px;
  outline: none;
  border: none;
  background-color: $color-grey-3;
  border: 1px solid transparent;
  @include fontSize("m");
  transition: border 0.2s ease;
  &:focus {
    border: 1px solid $color-green-1;
  }
}
</style>