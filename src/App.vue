<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      dark
      class="drawer"
    >
      <v-list class="py-0 main-logo">
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
      </v-list>

      <v-list class="py-0">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          class="list"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <template v-slot:appendIcon>
            <v-icon v-if="!item.appendOff">
              mdi-chevron-down
            </v-icon>
            <v-icon v-else>

            </v-icon>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
            class="px-4"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-list class="user-block py-0">
        <v-divider></v-divider>

        <v-list-item link class="px-2 user">
          <v-list-item-avatar class="mr-0">
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
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
    name: 'Main',
    data () {
      return {
        drawer: true,
        items: [
          {
            action: 'mdi-view-dashboard',
            items: [],
            title: 'Консоль',
            appendOff: true,
          },
          {
            action: 'mdi-store',
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
          },
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
            items: [{ title: 'List Item' }],
            title: 'Локации',
            active: true,
          },
          {
            action: 'mdi-file-document',
            items: [{ title: 'List Item' }],
            title: 'Статьи',
          },
          {
            action: 'mdi-view-list',
            items: [{ title: 'List Item' }],
            title: 'Страницы',
          },
          {
            action: 'mdi-wrench',
            items: [{ title: 'List Item' }],
            title: 'Инструменты',
          },
          {
            action: 'mdi-cog',
            items: [{ title: 'List Item' }],
            title: 'Настройки',
          },
          {
            action: 'mdi-help-circle',
            items: [],
            title: 'Помощь',
            appendOff: true,
          },
        ],
        mini: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .drawer {
    background-color: #2b2b2b!important;

    &::v-deep {
      .v-navigation-drawer__content{
        padding-top: 70px;
        padding-bottom: 66px;

        &::-webkit-scrollbar {
          width: 3px;
          transition: 0.4s;
        }
        &::-webkit-scrollbar-track {
          background-color: #2b2b2b;
          transition: 0.4s;
        }

        &::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 5px;
          transition: 0.4s;
        }

        &:hover {
          &::-webkit-scrollbar-thumb {
            background-color: #E01F30;
            transition: 0.4s;
          }
        }
      }

      &.v-navigation-drawer--mini-variant {
        .list {
          .v-list-group__header {
            &.v-list-item--active{
              &::after {
                width: 2px;
              }
            }
          }
        }
      }
    }

    .main-logo {
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #2b2b2b!important;
      width: calc(100% - 3px);
      min-height: 70px;
      z-index: 2;
    }

    .list {
      &::v-deep {        
        .v-list-group__header {
          .v-list-item__icon {
            color: #dadada;
            opacity: 0.5;
          }

          &.v-list-item--active{
            background-color: #202020!important;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              left: 0px;
              top: 0px;
              height: 100%;
              width: 6px;
              background-color: #E01F30;
              transition: 0.4s;
            }

            .v-list-item__title {
              color: white!important;
            }
          }
        }

        .v-list-group__items {
          background-color: #363636!important;
        }
      }
    }

    .user-block {
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: #2b2b2b!important;
      width: calc(100% - 3px);
      min-height: 66px;

      .user {
        min-height: 66px;
        flex-direction: row-reverse;
      }
    }
  }
</style>