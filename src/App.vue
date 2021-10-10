<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      mini-variant-width="64"
      color="graydark"
      dark
      width="240"
    >
      <v-list-item class="px-0">
        <v-img
          src="@/assets/mixsport-logo.svg"
          @click.stop="mini = !mini"
          height="70"
          position="start center">
        </v-img>
      </v-list-item>

      <v-list dense class="text-left">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Консоль</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="item in baseList"
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
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--  <v-subheader>Контент</v-subheader>  -->
        </v-list-group>
        <v-subheader class="subheader" :class="{ hidden: mini }">Контент</v-subheader>
        <v-list-group
          v-for="item in contentList"
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
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-subheader class="subheader" :class="{ hidden: mini }">Настройки</v-subheader>
        <v-list-group
          v-for="item in settingsList"
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
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Помощь</v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="admin-user" :class="{ minified: mini }">
        <div class="admin-user-info">
          <p>Юрий Зозуля</p>
          <small>uzozul@gmail.com</small>
        </div>
        <v-avatar size="36">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
      </div>
    </v-navigation-drawer>


    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: false,
        baseList: [
          {
            action: 'mdi-store',
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
            action: 'mdi-trending-up',
            items: [
              { title: 'Все заказы' },
              { title: 'Отчеты' },
              { title: 'Настройки' },
            ],
            title: 'Продажи',
          },
          {
            action: 'mdi-cart',
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
            action: 'mdi-account-circle',
            items: [
              { title: 'Все пользователи' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Клиенты',
          }
        ],
        contentList: [
          {
            action: 'mdi-calendar',
            items: [
              { title: 'Все события' },
              { title: 'Категории' },
              { title: 'Теги' },
            ],
            title: 'События',
          },
          {
            action: 'mdi-map-marker',
            items: [
              { title: 'Все локации' },
            ],
            title: 'Локации',
          },
          {
            action: 'mdi-note-text',
            items: [
              { title: 'Все статьи' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Статьи',
          },
          {
            action: 'mdi-sticker-text-outline',
            items: [
              { title: 'Все продукты' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Страницы',
          }
        ],
        settingsList: [
          {
            action: 'mdi-wrench',
            items: [
              { title: 'Все продукты' },
              { title: 'Атрибуты' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Инструменты',
          },
          {
            action: 'mdi-cog',
            items: [
              { title: 'Все продукты' },
              { title: 'Атрибуты' },
              { title: 'Настройки' },
              { title: 'Категории' },
              { title: 'Метки' },
            ],
            title: 'Настройки',
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
.subheader {
  padding: 0px 16px !important;
  font-size: 13px;
  text-transform: uppercase;
  color: #6C6C6C;
  transition: opacity 0.3s;

  &.hidden {
    opacity: 0;
  }
}

.admin-user {
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 240px;
  padding: 12px 22px;
  justify-content: space-between;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.15);

  &-info {
    p {
      font-size: 16px;
      line-height: 20px;
      color: #FFF;
      margin-bottom: 0px !important;
    }

    small {
      font-size: 14px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &.minified {
    padding: 14px 14px;
  }
}
</style>
