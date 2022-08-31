<template>
  <div class="items-bar-card">
    <div class="items-bar-card__img-wrapper">
      <img
        :src="imageLink(item.images)"
        :alt="item.title"
        class="items-bar-card__img"
      >
      <input
        class="items-bar-card__checkbox"
        type="checkbox"
      >
    </div>
    <div class="items-bar-card__info">
      <p class="items-bar-card__name">{{ item.title }}</p>
      <span class="items-bar-card__description">{{ item.description }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "ItemsBarCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageLink() {
      return (links) => {
        return links && links[0];
      };
    },
  },
};
</script>

<style lang="scss">
.items-bar-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 206px;
  height: 272px;
  padding: 10px;
  border: 1px solid $border-color;
  border-radius: 4px;

  &__img-wrapper {
    width: 150px;
    height: 150px;
    align-self: center;
    margin-top: 20px;
  }

  &__img {
    aspect-ratio: auto;
    width: 150px;
    height: auto;
    max-height: 150px;
  }

  &__checkbox {
    position: absolute;
    right: 14px;
    top: 14px;
    width: 16px;
    height: 16px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
  }
  &__name {
    @include fontSize("m");
    font-weight: 600;
    margin: 0;
    text-align: start;
  }
  &__description {
    @include fontSize("s");
    color: $color-grey-1;
    text-align: start;
  }
}
</style>