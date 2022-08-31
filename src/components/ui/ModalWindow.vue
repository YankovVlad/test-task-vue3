<template>
  <div
    class="modal-window__wrapper"
    @click="cancel"
  >

    <div
      class="modal-window"
      @click.stop="() => {}"
    >
      <p class="modal-window__title">{{ title }}</p>
      <Input
        placeholder="Enter name"
        :value="localValue"
        @input="changeValue"
      />
      <span
        v-if="isSuccess"
        class="modal-window__success"
      >Success</span>
      <div class="modal-window__btn-group">
        <Button
          label="Save"
          :disabled="!localValue"
          @click="save"
        />
        <Button
          label="Cancel"
          @click="cancel"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "./Button.vue";
import Input from "./Input.vue";
export default {
  name: "ModalWindow",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      dafault: "",
    },
    item: {
      type: Object,
      default: null,
    },
  },
  components: {
    Button,
    Input,
  },
  data() {
    return {
      localValue: "",
    };
  },
  computed: {
    ...mapGetters("categories", ["responseCodeCategories"]),
    ...mapGetters("subcategories", ["responseCodeSubcategories"]),
    ...mapGetters("items", ["responseCodeItems"]),
    isEdit() {
      return this.item;
    },
    isSuccess() {
      return (
        [
          this.responseCodeCategories,
          this.responseCodeSubcategories,
          this.responseCodeItems,
        ].includes(201) ||
        [
          this.responseCodeCategories,
          this.responseCodeSubcategories,
          this.responseCodeItems,
        ].includes(200)
      );
    },
  },
  mounted() {
    if (this.isEdit) {
      this.localValue =
        this.item.title[0].toUpperCase() + this.item.title.slice(1);
    }
  },
  methods: {
    ...mapActions("categories", ["createNewCategory", "editCategory"]),
    ...mapActions("subcategories", ["createNewSubcategory", "editSubcategory"]),
    ...mapActions("items", ["createNewItem"]),

    async save() {
      if (this.isEdit) {
        if (this.type === "cat") {
          this.editCat();
        }
        if (this.type === "subcat") {
          this.editSubcat();
        }
      } else {
        if (this.type === "cat") {
          this.createCategory();
        }
        if (this.type === "subcat") {
          this.createSubcategory();
        }
        if (this.type === "equip") {
          this.createEquip();
        }
      }
    },
    cancel() {
      this.$emit("close");
    },

    changeValue(e) {
      this.localValue = e.target.value;
    },
    async createCategory() {
      try {
        const res = await this.createNewCategory({
          userId: Math.ceil(Math.random() * 10000),
          title: this.localValue,
          body: "Some description",
        });
      } catch (error) {
        console.error(error);
      }
      setTimeout(() => {
        this.cancel();
      }, 1000);
    },
    async createSubcategory() {
      try {
        await this.createNewSubcategory({
          title: this.localValue,
          body: "Some description",
          userId: "1",
          tags: [],
          reactions: 2,
        });
      } catch (error) {
        console.error(error);
      }
      setTimeout(() => {
        this.cancel();
      }, 1000);
    },
    async createEquip() {
      try {
        await this.createNewItem({
          title: this.localValue,
          description: "Some description",
          price: 549,
          discountPercentage: 12,
          rating: 4,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "",
          images: [
            "https://theplanetd.com/images/things-to-do-in-ho-chi-minh-cityvietnameses-coffee.jpg",
          ],
        });
      } catch (error) {
        console.error(error);
      }
      setTimeout(() => {
        this.cancel();
      }, 1000);
    },

    async editCat() {
      try {
        await this.editCategory({
          title: this.localValue,
          body: "Some description",
          userId: Math.ceil(Math.random() * 10000),
          id: this.item.id,
        });
      } catch (error) {
        console.error(error);
      }
      setTimeout(() => {
        this.cancel();
      }, 1000);
    },
    async editSubcat() {
      try {
        await this.editSubcategory({
          title: this.localValue,
          body: "Some description",
          userId: Math.ceil(Math.random() * 10000),
          tags: [],
          reactions: 2,
          id: this.item.id,
        });
      } catch (error) {
        console.error(error);
      }
      setTimeout(() => {
        this.cancel();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-window {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: max-content;
  padding: 20px;
  background: white;
  border-radius: 4px;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 900;
  }

  &__title {
    margin: 0;
    margin-bottom: 20px;
    color: black;
  }

  &__success {
    @include fontSize("s");
    color: $color-green-1;
    margin-bottom: 10px;
  }

  &__input {
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

  &__btn-group {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
}
</style>