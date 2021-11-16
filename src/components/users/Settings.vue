<template lang="html">
  <div class="users-settings">
    <v-row class="pt-2">
      <v-col>
        <v-btn
          depressed
          class="btn-main"
          height="45px"
          small
        >
          Выбрать все
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="users"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:item.sectionIcon="{ item }">
            <div class="section-row">
              <v-icon class="mr-4" color="graylight" >
                {{ item.sectionIcon }}
              </v-icon>
              <p>{{ item.sectionName }}</p>
            </div>
          </template>
          <template v-slot:item.view="{ item }">
            <v-simple-checkbox
              v-model="item.view"
              color="primary"
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.add="{ item }">
            <v-simple-checkbox
              v-model="item.add"
              color="primary"
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.edit="{ item }">
            <v-simple-checkbox
              v-model="item.edit"
              color="primary"
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.delete="{ item }">
            <v-simple-checkbox
              v-model="item.delete"
              color="primary"
            ></v-simple-checkbox>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            text: 'Раздел',
            value: 'sectionIcon',
            sortable: false,
          },
          {
            text: 'Смотреть',
            value: 'view',
            sortable: false,
            align: 'center'
          },
          {
            text: 'Добавить',
            value: 'add',
            sortable: false,
            align: 'center'
          },
          {
            text: 'Изменить',
            value: 'edit',
            sortable: false,
            align: 'center'
          },
          {
            text: 'Удалить',
            value: 'delete',
            sortable: false,
            align: 'center'
          },
        ],
        users: [],
        editedIndex: -1,
        defaultItem: {
        },
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.users = [
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Консоль',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-view-dashboard',
            sectionName: 'События',
            view: false,
            add: false,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-map-marker',
            sectionName: 'Локации',
            view: false,
            add: false,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: ' Статьи',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Instagram',
            view: true,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Чаты',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Меню',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Страницы',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Websites',
            view: false,
            add: false,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'E-mail queue log',
            view: false,
            add: false,
            edit: false,
            delete: true,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Рассылка',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'E-mail - Шаблоны писем',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'E-mails',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Реклама',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Типы',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Категории',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: '3D Туры',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Бронирование',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Изменять статус брони',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Удалять',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Бронирование Доступ',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Секции редактирования',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Агригатор',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Продукты',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Заказы',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Билеты',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Виды оплат',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Люди',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Отзывы',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Тег',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Файлы',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Meta информация',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Лог Ошибок',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'URLs',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Страна',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Город',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Даты',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Дополнения',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Дополнения глобальные',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Google Spread Sheets',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Google Spread Sheets Logger',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Пользователи',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Редакрирование пароля/Еmail-а пользователя',
            view: false,
            add: true,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Редактирование анкеты/коментария пользователя',
            view: false,
            add: false,
            edit: false,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Активировать пользователя',
            view: false,
            add: true,
            edit: true,
            delete: false,
          },
          {
            sectionIcon: 'mdi-message-alert',
            sectionName: 'Управление доступом',
            view: false,
            add: true,
            edit: true,
            delete: false,
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.users-settings {
  background-color: #F9F9F9;
  padding: 0;

  .section-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    p {
      margin: 0px;
      font-size: 16px;
    }
  }
}
</style>
