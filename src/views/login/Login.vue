<template lang="html">
  <div class="login-page">
    <v-row class="justify-center mt-14">
      <v-col cols="5">
        <v-img
          src="@/assets/logo-lightversion.svg"
          position="start center"
          class="my-5 mx-10">
        </v-img>
        <v-card outlined elevation="2" class="mb-5">
          <v-card-title class="login-title pa-7">Войдите в свой аккаунт</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-5">
            <v-text-field
              label="E-mail"
              v-model="email"
              required
              prepend-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              label="Пароль"
              v-model="password"
              type="password"
              required
              prepend-icon="mdi-lock"
              hide-details
              class="mb-5"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="stayInSystem"
                  label="Оставаться в системе"
                  color="primary"
                  hide-details
                  class="ma-0"
                ></v-checkbox>
              </v-col>
              <v-col class="d-flex justify-end">
                <v-btn
                text
                class="categorie-btn"
                color="primary"
                >Забыли пароль?</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="px-5 py-0">
            <v-btn
              depressed
              color="primary"
              class="font-weight-bold py-2"
              width="100%"
            >
              Войти
            </v-btn>
          </v-card-actions>
          <v-card-text class="px-5 pb-6">
            <v-row class="justify-center align-center">
              <v-col cols="6">
                <p class="text--secondary ma-0 text-end"
                >Создать аккаунт?</p>
              </v-col>
              <v-col>
                <v-btn
                  text
                  class="categorie-btn"
                  color="primary"
                >Зарегистрироваться</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <p class="text--disabled text-center">
          © 2021 Jam Digital
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        stayInSystem: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
.login-page {
  .login-title {
    font-weight: 600 !important;
    font-size: 18px;
    line-height: 21px;
    color: $graydark;
    text-transform: uppercase;
    justify-content: center;
  }

  .categorie-btn {
    font-size: 16px;
    line-height: 20px;
    color: $primary !important;
    text-transform: none !important;
    margin: 0px;
    letter-spacing: normal;
    text-decoration: underline;
    padding: 0px !important;
  }
}
</style>
