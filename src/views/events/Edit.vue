<template lang="html">
  <div class="events">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Событиe № {{ $route.params.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      depressed
      class="btn-main mr-3"
      height="36px"
      smalll
      >
        Удалить
      </v-btn>
      <v-btn
      depressed
      class="btn-main mr-3"
      height="36px"
      smalll
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
        @openTicketEditorSidebar="openTicketEditorSidebar()"
      ></router-view>
    </v-tabs-items>
    <!-- Сайтбар блок Білети / Редактор білета -->
    <v-navigation-drawer
      v-model="openTicketEditor"
      absolute
      right
      width="512px"
      temporary
    >
      <v-row class="pt-5 pa-5">
        <v-col cols="12">
          <v-subheader
            class="font-weight-medium text-lg-h6 pl-0"
          >
            Редактор билета
          </v-subheader>
        </v-col>
        <v-col class="d-grid cols-2-2-4">
          <v-btn
            class="sidebar-btn"
            outlined
          >
            Оплата
          </v-btn>
          <v-btn
            class="sidebar-btn"
            outlined
          >
            Бесплатно
          </v-btn>
          <v-btn
            class="sidebar-btn"
            outlined
          >
            Пожертвование
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="ticketName"
            :rules="[rules.required, rules.counter]"
            label="Название категорії"
            counter
            maxlength="191"
          ></v-text-field>
          <v-text-field
            label="Количество"
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
      tab: null,
      tabs: [
        {
          id: 1,
          title: 'Общая информация',
          link: 'overview'
        },
        {
          id: 2,
          title: 'Билеты',
          link: 'tickets'
        },
        {
          id: 3,
          title: 'Продажи',
          link: 'sales'
        }
      ],
      openTicketEditor: false,
      ticketName: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      active: false,
      cashPay: false,
      onlinePay: false,
    }),
    methods: {
      openTicketEditorSidebar() {
        this.openTicketEditor = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.events {
  padding: 0px;
}

.sidebar-btn {
  font-size: 12px;
  line-height: 16px;
  color: $graylight !important;
  text-transform: none !important;
  margin: 0px;
  letter-spacing: normal;
  padding: 8px 10px !important;
}

.categorie-btn {
  font-size: 14px;
  line-height: 16px;
  color: $primary !important;
  text-transform: none !important;
  margin: 0px;
  letter-spacing: normal;
  padding: 0px !important;
}
</style>
