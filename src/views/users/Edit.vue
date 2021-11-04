<template lang="html">
  <div class="users-edit">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Пользователь № {{ $route.params.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        class="btn-main mr-3"
        height="36px"
        small
      >
        Удалить
      </v-btn>
      <v-btn
        depressed
        class="btn-main mr-3"
        height="36px"
        small
      >
        Посмотреть
      </v-btn>
      <v-btn
        depressed
        color="primary"
        class="font-weight-medium"
      >
        Сохранить
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          class="px-5"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="item in tabs"
            :key="item.id"
            :to="item.link"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-tabs-items v-model="tab">
      <router-view

      ></router-view>
    </v-tabs-items>

  </div>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
      tabs: [
        {
          id: 1,
          title: 'информация',
          link: 'overview'
        },
        {
          id: 2,
          title: 'Адреса',
          link: 'adress'
        },
        {
          id: 3,
          title: 'Настройки',
          link: 'settings'
        }
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.users-edit {

}
</style>
