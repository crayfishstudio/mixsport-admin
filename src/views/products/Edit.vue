<template lang="html">
  <div class="edit-products">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Продукт  № {{ $route.params.id }}</v-toolbar-title>
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
        сохранить
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
        @openNewOptionEditorSidebar="openNewOptionEditorSidebar()"
        @openNewAtributeSidebar="openNewAtributeSidebar()"
      ></router-view>
    </v-tabs-items>
    <!-- Редактор Варіанту / Загальна інформація -->
    <v-navigation-drawer
      v-model="newOptionEditor"
      fixed
      right
      width="512px"
      temporary
    >
      <v-row class="pt-5 pa-5">
        <v-col cols="12">
          <v-subheader
            class="subheader-lowercase mb-3"
          >
            Редактор варианта
          </v-subheader>
          <v-text-field
            hide-details
            label="Артикул"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-checkbox
            v-model="include"
            label="Включить"
            color="primary"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="6">
          <v-checkbox
            v-model="inventories"
            label="Управлять запасами"
            color="primary"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="6">
          <v-text-field
            hide-details
            label="Базовая цена"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            hide-details
            label="Цена со скидкой"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            hide-details
            label="Вес"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            hide-details
            label="Длина"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            hide-details
            label="Ширина"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            hide-details
            label="Высота"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            :items="classDelivery"
            label="Класс доставки"
            class="mb-3"
          ></v-select>
          <p class="text--disabled text-start mb-2">
            Описание
          </p>
          <v-textarea
              outlined
              height="82px"
            >
          </v-textarea>
        </v-col>
        <v-col>
          <v-btn
            depressed
            class="btn-main mr-3"
            large
            width="33%"
          >
            Отмена
          </v-btn>
          <v-btn
            depressed
            color="primary"
            large
            width="33%"
          >
            сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <!-- Атрибут Продукту / Настройки товара - Атрибути -->
    <v-navigation-drawer
      v-model="newAtribute"
      fixed
      right
      width="512px"
      temporary
    >
      <v-row class="pt-5 pa-5">
        <v-col cols="12">
          <v-subheader
            class="subheader-lowercase mb-3"
          >
            Атрибут продукта
          </v-subheader>
          <v-text-field
            label="Название атрибута"
          ></v-text-field>
          <v-checkbox
            v-model="dispayOnPage"
            label="Отображение на странице товаров"
            color="primary"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="useFor"
            label="Используется для вариаций"
            color="primary"
            hide-details
          ></v-checkbox>
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            multiple
            deletable-chips
            class="mt-5"
          ></v-select>
        </v-col>
        <v-col>
          <v-btn
            depressed
            class="btn-main mr-3"
            large
            width="33%"
          >
            Отмена
          </v-btn>
          <v-btn
            depressed
            color="primary"
            large
            width="33%"
          >
            сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      newAtribute: false,
      newOptionEditor: false,
      tab: null,
      tabs: [
        {
          id: 1,
          title: 'Общая информация',
          link: 'overview',
        },
        {
          id: 2,
          title: 'Заказы',
          link:  'orders',
        },
        {
          id: 3,
          title: 'Погашение сертификатов',
          link: 'certificates',
        },
      ],
      include: false,
      inventories: false,
      classDelivery: ['Также как у родительского елемента'],
      dispayOnPage: false,
      useFor: true,
      items: ['Белый', 'Серый', 'Фиолетовый', 'Красный', 'Черный', 'Синий'],
      value: ['Белый', 'Серый', 'Фиолетовый'],
    }),
    methods: {
      openNewAtributeSidebar() {
        this.newAtribute = true;
      },
      openNewOptionEditorSidebar() {
        this.newOptionEditor = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.edit-products {
  padding: 0px;
}
</style>
