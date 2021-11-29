<template lang="html">
  <div class="events-qrreading">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">QR Reading</v-toolbar-title>
    </v-app-bar>
    <!-- Перший рядок -->
    <v-row class="mt-1 px-2">
      <v-col
        cols="3" class="d-flex"
      >
        <v-select
          :items="language"
          label="язык"
          background-color="white"
          outlined
          dense
          height="45px"
          hide-details
          class="mr-3"
        ></v-select>
        <v-btn
        depressed
        class="btn-main"
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
            text: 'Platform',
            value: 'platform',
          },
          {
            text: 'Дата',
            value: 'date'
          },
          {
            text: 'Context Id',
            value: 'context'
          },
          {
            text: 'Ip',
            value: 'ip'
          },
          {
            text: 'Пользователь',
            value: 'user'
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
            platform: 'web',
            date: '13.02.2021 17:01',
            context: 'event [ #11664 ]',
            ip: '95.67.55.5',
          },
          {
            platform: 'web',
            date: '13.02.2021 17:01',
            context: 'event [ #11664 ]',
            ip: '95.67.55.5',
          },
          {
            platform: 'web',
            date: '13.02.2021 17:01',
            context: 'event [ #11664 ]',
            ip: '95.67.55.5',
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
.events-qrreading {

}
</style>
