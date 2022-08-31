<template>
  <div class="login-view">
    <div class="login-view__form">
      <Input
        type="text"
        placeholder="Enter login"
        class="login-view__login"
        :value="login"
        @input="changeLogin"
      />
      <Input
        type="password"
        placeholder="Enter password"
        class="login-view__password"
        :value="password"
        @input="changePassword"
      />
      <Button
        label="Sign in"
        :disabled="disabledSignIn"
        @click="signIn"
      />
    </div>
  </div>
</template>

<script>
import Input from "../components/ui/Input.vue";
import Button from "../components/ui/Button.vue";
export default {
  name: "LoginView",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      login: "",
      password: "",
    };
  },
  computed: {
    disabledSignIn() {
      return !this.login || !this.password;
    },
  },
  methods: {
    changeLogin(e) {
      this.login = e.target.value;
    },
    changePassword(e) {
      this.password = e.target.value;
    },
    signIn() {
      localStorage.setItem(
        "user",
        JSON.stringify({ login: this.login, password: this.password })
      );
      this.$router.push({ name: "categories" });
    },
  },
};
</script>

<style lang="scss">
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background-color: $color-grey-2;
    border-radius: 4px;
    height: max-content;
    width: 400px;
  }
}
</style>