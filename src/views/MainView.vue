<template>
  <div class="main-view">
    <header class="main-view__header">
      <h1 class="main-view__title">Equipment Catalog</h1>
    </header>
    <main class="main-view__body">
      <div class="main-view__left-bar">
        <BarTitle
          title="Category"
          type="cat"
          modal-window-title="New category"
          icon="plus"
        />
        <CategoryBar />
      </div>
      <div class="main-view__central-bar">
        <BarTitle
          title="Subcategory"
          type="subcat"
          modal-window-title="New subcategory"
          icon="plus"
        />
        <router-view name="centralComponent" />
      </div>
      <div class="main-view__right-bar">
        <BarTitle
          title="Equipment List"
          icon="plus"
          type="equip"
          modal-window-title="New equipment"
        />
        <!-- <ItemsBar v-if="$route.name === 'items'" /> -->
        <router-view name="rightComponent" />
      </div>
    </main>
  </div>
</template>

<script>
import BarTitle from "../components/ui/BarTitle.vue";
import CategoryBar from "../components/bars/CategoryBar.vue";
import ListBar from "../components/bars/listBar/ListBar.vue";
import ItemsBar from "../components/bars/itemsBar/ItemsBar.vue";
export default {
  name: "MainView",
  components: {
    ListBar,
    ItemsBar,
    CategoryBar,
    BarTitle,
  },
};
</script>

<style lang="scss">
.main-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  &__header {
    height: 60px;
    padding: 8px 20px;
  }
  &__title {
    font-size: 28px;
    line-height: 42px;
    font-weight: 600;
    text-align: start;
    margin: 0;
  }

  &__body {
    display: flex;
    width: 100%;
    flex: 1 0 30%;
    border-top: 1px solid $border-color;
  }

  &__left-bar {
    max-width: 260px;
    width: 25%;
    min-height: 100%;
    border-right: 1px solid $border-color;
  }
  &__central-bar {
    max-width: 260px;
    width: 25%;
    border-right: 1px solid $border-color;
  }
  &__right-bar {
    flex: 1 0 50%;
  }
}
</style>