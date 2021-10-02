<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          large
          outlined
          height="45px"
          style="background-color: white"
          class="mr-4"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>
          Добавить событие
        </v-btn>
        <v-btn
          large
          outlined
          height="45px"
          style="background-color: white"
          class="mr-4"
        >
          Импорт
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="affiches"
          item-key="id"
          class="elevation-1"
          show-select
        >
          <template v-slot:item.actions>
            <v-icon class="mr-3">
              mdi-pencil
            </v-icon>
            <v-icon class="mr-3">
              mdi-clock-outline
            </v-icon>
            <v-icon>
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:header.rate>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-poll
                </v-icon>
              </template>
              <span>Рейтинг</span>
            </v-tooltip>
          </template>
          <template v-slot:header.img>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-image-outline
                </v-icon>
              </template>
              <span>Фотография</span>
            </v-tooltip>
          </template>
          <template v-slot:item.img="{ item }">
            <div class="d-flex justify-center">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="45"
                max-width="45"
                :src="item.img"
              ></v-img>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Affiche',
    data: () => ({
      affiches: [
        {
          id: 1,
          rate: 2,
          img: '',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          autor: 'Master2020',
          stat: 'Ожидает подтверждения',
        },
        {
          id: 2,
          rate: 3,
          img: '',
          name: 'Незабутні 12 км засніженого лісу',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          autor: 'Master2020',
          stat: 'Ожидает подтверждения',
        },
        {
          id: 3,
          rate: 5,
          img: '',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          autor: 'Master2020',
          stat: 'Ожидает подтверждения',
        },
      ]
    }),
    computed: {
      headers () {
        return [
          { text: 'ID', value: 'id', align: 'start' },
          { text: 'rate', value: 'rate' },
          { text: 'img', value: 'img', sortable: false, align: 'center' },
          { text: 'НАЗВАНИЕ', value: 'name' },
          { text: 'ТИП', value: 'type' },
          { text: 'НАЧАЛО', value: 'start' },
          { text: 'ДАТА', value: 'date' },
          { text: 'АВТОР', value: 'autor' },
          { text: 'СТАТУС', value: 'stat' },
          { text: 'ДЕЙСТВИЯ', value: 'actions', sortable: false, align: 'center' },
        ]
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      showSelect () {
        return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
      },
    },
  }
</script>