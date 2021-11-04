<template lang="html">
  <div class="edit-places">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Локация № {{ $route.params.id }}</v-toolbar-title>
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
        @openNewCategorySidebar="openNewCategorySidebar()"
        @openServiseEditorSidebar="openServiseEditorSidebar()"
        @openNewServiceBlockSidebar="openNewServiceBlockSidebar()"
        @openNewServiceSidebar="openNewServiceSidebar()"
      ></router-view>
    </v-tabs-items>
    <!-- Сайдбар із блоку Загальна інформація / Додати нову категорію -->
    <v-navigation-drawer
      v-model="createNewCategory"
      fixed
      right
      width="512px"
      temporary
    >
      <v-row class="pt-5 pa-4">
        <v-col>
          <v-subheader
            class="font-weight-medium text-lg-h6 pl-0 mb-7"
          >
            Додати категорію
          </v-subheader>
          <v-text-field
            v-model="categoryName"
            :rules="[rules.required, rules.counter]"
            label="Название категорії"
            counter
            maxlength="191"
          ></v-text-field>
          <div class="mt-10">
            <v-btn
              depressed
              class="btn-main mr-3"
              height="36px"
              small
            >
              Отменить
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="font-weight-medium"
            >
              ДОДАТИ
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <!-- Блок послуги / Редактор послуг-->
    <v-navigation-drawer
      v-model="openServiseEditor"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 pa-4"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Редактор  услуги
        </v-subheader>
        <v-text-field
          v-model="blockName"
          :rules="[rules.required, rules.counter]"
          label="Название услуги"
          counter
          maxlength="191"
        ></v-text-field>
        <v-text-field
          label="Цена"
          hide-details
        ></v-text-field>
        <v-row class="align-center pt-2">
          <v-col>
            <p class="text--secondary ma-0"
            >Общая цена: 1030 грн.</p>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
            text
            class="categorie-btn"
            color="primary"
            >Подробнее о цене</v-btn>
          </v-col>
        </v-row>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="144"
          max-width="194"
          class="my-5"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-checkbox
          v-model="active"
          label="Активний"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="cashPay"
          label="Оплата готівкою"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="onlinePay"
          label="Оплата онлайн"
          color="primary"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col class="text-center mt-10">
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
    </v-navigation-drawer>
    <!-- Блок послуги / Настройка блоку -->
    <v-navigation-drawer
      v-model="createServiceBlock"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 pa-4"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Блок услуг
        </v-subheader>
        <v-text-field
          v-model="blockName"
          :rules="[rules.required, rules.counter]"
          label="Название блока"
          counter
          maxlength="191"
        ></v-text-field>
        <p class="text--disabled mb-1">
          Короткое описание
        </p>
        <v-textarea
            outlined
            height="82px"
            hide-details
            class="mb-2"
          >
        </v-textarea>
        <v-select
          :items="displayType"
          label="Тип отображения"
          hide-details
          class="mb-6"
        ></v-select>
        <v-checkbox
          v-model="active"
          label="Активний"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="cashPay"
          label="Оплата готівкою"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="onlinePay"
          label="Оплата онлайн"
          color="primary"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col class="text-center mt-10">
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
    </v-navigation-drawer>
    <!-- Блок послуги / Додати послугу -->
    <v-navigation-drawer
      v-model="createNewService"
      absolute
      right
      width="512px"
      temporary
    >
      <v-row class="pt-5 pa-4">
        <v-col cols="12">
          <v-subheader
            class="font-weight-medium text-lg-h6 pl-0 mb-2"
          >
            Добавить услугу
          </v-subheader>
          <v-text-field
            v-model="blockName"
            :rules="[rules.required, rules.counter]"
            label="Название услуги"
            counter
            maxlength="191"
            hide-details
          ></v-text-field>
          <v-text-field
            label="Цена"
            hide-details
            class="mb-5"
          ></v-text-field>
          <v-file-input
            label="Добавить фото"
            hide-details
            prepend-icon=""
            class="file-input pt-0"
          ></v-file-input>
          <v-checkbox
            v-model="active"
            label="Активний"
            color="primary"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="cashPay"
            label="Оплата готівкою"
            color="primary"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="onlinePay"
            label="Оплата онлайн"
            color="primary"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col class="text-center mt-10">
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
      createNewCategory: false,
      openServiseEditor: false,
      createServiceBlock: false,
      createNewService: false,
      categoryName: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      blockName: '',
      displayType: ['Список'],
      active: false,
      cashPay: false,
      onlinePay: false,
      tab: null,
      tabs: [
        {
          id: 1,
          title: 'Общая информация',
          link: 'overview',
        },
        {
          id: 2,
          title: 'Фото',
          link:  'photo',
        },
        {
          id: 3,
          title: 'Услуги',
          link: 'services',
        },
        {
          id: 4,
          title: 'Афиша',
          link: 'affiche',
        },
        {
          id: 5,
          title: 'Отзывы',
          link: 'reviews',
        },
        {
          id: 6,
          title: '3D туры',
          link: 'tours',
        },
        {
          id: 7,
          title: 'Связанные места',
          link: 'pelatedplaces',
        },
        {
          id: 8,
          title: 'Файлы',
          link: 'files',
        },
      ],
    }),

    methods: {
      openNewCategorySidebar() {
        this.createNewCategory = true;
      },
      openServiseEditorSidebar() {
        this.openServiseEditor = true;
      },
      openNewServiceBlockSidebar() {
        this.createServiceBlock = true;
      },
      openNewServiceSidebar() {
        this.createNewService = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.edit-places {

  .categorie-btn {
    font-size: 14px;
    line-height: 16px;
    color: $primary !important;
    text-transform: none !important;
    margin: 0px;
    letter-spacing: normal;
    padding: 0px !important;
  }

}
</style>
