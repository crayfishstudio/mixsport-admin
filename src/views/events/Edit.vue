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
        @openTicketEditorSidebar="openTicketEditorSidebar()"
        @openNewCategorySidebar="openNewCategorySidebar()"
        @openAddDataEventSidebar="openAddDataEventSidebar()"
      ></router-view>
    </v-tabs-items>
    <!-- Сайтбар блок Білети / Редактор білета -->
    <v-navigation-drawer
      v-model="openTicketEditor"
      fixed
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
    <!-- Сайдбар із блоку Загальна інформація / Додати нову категорію -->
    <v-navigation-drawer
      v-model="createNewCategory"
      right
      width="512px"
      temporary
      fixed
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
    <!-- Сайтбар із блоку Загальна інформація / Додати дату (кнопка) -->
    <v-navigation-drawer
      v-model="openAddDataEvent"
      fixed
      right
      width="450px"
      temporary
      class="pa-5 ma-0"
    >
      <v-row>
        <v-col cols="7" class="mb-5">
          <v-subheader
            class="font-weight-medium text-lg-h6 pl-0"
          >
          Выберите даты и время проведения
          </v-subheader>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          color="primary"
          no-title
          full-width
        ></v-date-picker>
      </v-row>
      <v-row>
        <v-col cols="6" class="pb-0">
          <v-subheader
            class="tabs-subheader"
          >
            Время начала
          </v-subheader>
        </v-col>
        <v-col cols="6" class="pb-0">
          <v-subheader
            class="tabs-subheader"
          >
            Время окончания
          </v-subheader>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pt-0">
          <!-- Тут година-1 -->
          <v-dialog
            ref="timebegining"
            v-model="menu1"
            :return-value.sync="time1"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time1"
                readonly
                v-bind="attrs"
                v-on="on"
                hide-details
                outlined
                dense
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu1"
              v-model="time1"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu1 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.timebegining.save(time1)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col cols="6" class="pt-0">
          <!-- Тут година-2 -->
          <v-dialog
            ref="endtime"
            v-model="menu2"
            :return-value.sync="time2"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time2"
                readonly
                v-bind="attrs"
                v-on="on"
                hide-details
                outlined
                dense
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time2"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.endtime.save(time2)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            depressed
            color="primary"
            large
            width="33%"
            class="mr-3"
          >
            сохранить
          </v-btn>
          <v-btn
            depressed
            class="btn-main"
            large
            width="33%"
          >
            Отменить
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
      createNewCategory: false,
      openAddDataEvent: false,
      ticketName: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      active: false,
      cashPay: false,
      onlinePay: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time1: null,
      menu1: false,
      time2: null,
      menu2: false,
      categoryName: [''],
    }),
    methods: {
      openTicketEditorSidebar() {
        this.openTicketEditor = true;
      },
      openNewCategorySidebar() {
        this.createNewCategory = true;
      },
      openAddDataEventSidebar() {
        this.openAddDataEvent = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.events {
  padding: 0px;

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

  .tabs-subheader {
    padding: 0px !important;
    margin-bottom: 0px !important;
  }
}
</style>
