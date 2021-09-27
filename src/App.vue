<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      dark
    >
      <v-list-item class="px-4"
        @click.stop="mini = !mini"
      >
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-5"
          position="left"
          height="30"
        />
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="py-0">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-item link class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view/>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          {
            action: 'mdi-ticket',
            items: [{ title: 'List Item' }],
            title: 'Консоль',
          },
          {
            action: 'mdi-silverware-fork-knife',
            // active: true,
            items: [
              { title: 'Все продавцы' },
              { title: 'Продукты' },
              { title: 'Отзывы продавца' },
              { title: 'Заказы' },
              { title: 'Сделки' },
            ],
            title: 'Маркетплейс',
          },
          {
            action: 'mdi-school',
            items: [
              { title: 'Все заказы' },
              { title: 'Отчеты' },
              { title: 'Настройки' },
            ],
            title: 'Продажи',
          },
          {
            action: 'mdi-run',
            items: [
              { title: 'Все продукты' },
              { title: 'Атрибуты' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Продукты',
          },
          {
            action: 'mdi-bottle-tonic-plus',
            items: [
              { title: 'Все пользователи' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Клиенты',
          },
          {
            action: 'mdi-content-cut',
            items: [
              { title: 'Все события' },
              { title: 'Категории' },
              { title: 'Теги' },
            ],
            title: 'События',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Локации',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Статьи',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Страницы',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Инструменты',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Настройки',
          },
          {
            action: 'mdi-tag',
            items: [{ title: 'List Item' }],
            title: 'Помощь',
          },
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>
  .v-navigation-drawer__content::-webkit-scrollbar {
    width: 0px;
  }
</style>