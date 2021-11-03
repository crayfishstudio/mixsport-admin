<template lang="html">
  <div class="event-transactions">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Логи транзакций</v-toolbar-title>
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
    </v-app-bar>
    <!-- Перший рядок -->
    <v-row class="mt-1 px-2">
      <v-col
        cols="3" class="d-grid cols-1-2"
      >
        <v-select
          :items="language"
          label="язык"
          background-color="white"
          outlined
          dense
          height="45px"
          hide-details
        ></v-select>
        <v-btn
        depressed
        class="btn-main mr-3"
        height="45px"
        smalll
        >
          Создать билет
        </v-btn>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row class="px-2">
      <v-col>
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Білети
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-data-table
                    :headers="headers"
                    :items="products"
                    item-key="id"
                    class="elevation-1 table-list"
                  >
                    <template v-slot:no-data>
                      <v-btn
                        color="primary"
                        @click="initialize"
                      >
                        Reset
                      </v-btn>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        language: ['Рус', 'Укр', 'Eng'],
        panel1:[0],
        dialog: false,
        selected: [],
        headers: [
          {
            text: 'Add Date',
            value: 'addDate',
          },
          {
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Client Name',
            value: 'name'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Всего',
            value: 'total'
          },
          {
            text: 'Статус',
            value: 'status'
          },
        ],
        products: [],
        defaultItem: {
        },
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.products = [
          {
            addDate: '25.02.2021 19:55',
            id: 'y6TREXhMbR',
            title: 'beforeAction: *INCOME*',
            name: 'Dmitry Matyash',
            phone: '380503433332',
            total: '1100 грн.',
            status: 'Время истекло',
          },
          {
            addDate: '25.02.2021 19:55',
            id: 'y6TREXhMbR',
            title: 'beforeAction: *INCOME*',
            name: 'Dmitry Matyash',
            phone: '380503433332',
            total: '1100 грн.',
            status: 'Время истекло',
          },
          {
            addDate: '25.02.2021 19:55',
            id: 'y6TREXhMbR',
            title: 'beforeAction: *INCOME*',
            name: 'Dmitry Matyash',
            phone: '380503433332',
            total: '1100 грн.',
            status: 'Время истекло',
          },
        ]
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
.event-transactions {

}
</style>
