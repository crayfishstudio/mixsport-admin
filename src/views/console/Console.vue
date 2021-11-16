<template lang="html">
  <div class="console">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Консоль</v-toolbar-title>
      <v-col cols="12" md="2">
        <v-text-field
          append-icon="mdi-magnify"
          color="graylight"
          class="ml-5 mt-5"
          label="Поиск..."
          single-line
        >
        </v-text-field>
      </v-col>

      <v-spacer></v-spacer>

      <v-btn
        depressed
        color="primary"
        class="font-weight-medium"
        @click="creationSidebar = !creationSidebar"
      >
        <v-icon dark class="mr-2">
          mdi-plus
        </v-icon>
        Создать
      </v-btn>
    </v-app-bar>
    <!-- Пергий рядок -->
    <v-row class="px-2 mt-1">
      <v-col>
        <div class="console-grid">
          <v-card outlined elevation="1">
            <v-card-title
              class="title-text pa-5"
            >Посещения</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-subheader
                    class="subheader-lowercase"
                  >
                    13000
                  </v-subheader>
                </v-col>
                <v-col cols="6" class="text-end">
                  <v-chip
                    class="ma-2"
                  >20%</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card outlined elevation="1">
            <v-card-title
              class="title-text pa-5"
            >Заказы</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-subheader
                    class="subheader-lowercase"
                  >
                    13000
                  </v-subheader>
                </v-col>
                <v-col cols="6" class="text-end">
                  <v-chip
                    class="ma-2"
                  >20%</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card outlined elevation="1">
            <v-card-title
              class="title-text pa-5"
            >Пользователи</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-subheader
                    class="subheader-lowercase"
                  >
                    2510
                  </v-subheader>
                </v-col>
                <v-col cols="6" class="text-end">
                  <v-chip
                    class="ma-2"
                  >20%</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card outlined elevation="1">
            <v-card-title
              class="title-text pa-5"
            >Конверсия</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-subheader
                    class="subheader-lowercase"
                  >
                    20%
                  </v-subheader>
                </v-col>
                <v-col cols="6" class="text-end">
                  <v-chip
                    class="ma-2"
                  >20%</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row class="px-2">
      <v-col cols="6">
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <!-- Замовлення -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Заказы
                <v-chip
                  class="px-4 ml-6"
                >{{ orderOptions.length }}</v-chip>
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-card
                class="console-card pa-4 mb-4"
                v-for="item in orderOptions"
                :key="item.id"
              >
                <v-row>
                  <v-col class="d-grid cols-2-2-4">
                    <p class="text-start ma-0">Заказ #{{ item.id }} </p>
                    <p class="text-start ma-0">{{ item.userName }}</p>
                    <p class="text-end ma-0">{{ item.time }} дня назад</p>
                    <p class="text-start ma-0">{{ item.amount }} продукт</p>
                    <p class="text-start ma-0">{{ item.price }} грн.</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0">
                    <p class="ma-0">
                      <v-chip
                        :color="getColor(item.status)"
                        class="px-2 mr-3 mb-1"
                        x-small
                      ></v-chip>
                      {{ item.status }}
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Відгуки -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                ОТзывы
                <v-chip
                  class="px-4 ml-6"
                >{{ reviewOptions.length }}</v-chip>
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row
                v-for="item in reviewOptions"
                :key="item.id"
              >
                <v-col cols="6" class="d-grid cols-1-3">
                  <v-avatar size="46">
                    <img
                      src="https://i.pinimg.com/564x/0d/2d/30/0d2d300224afeef5a20be80f2eed5e6a.jpg"
                      alt="John"
                    >
                  </v-avatar>
                  <div class="admin-user-info text-start">
                    <p>{{ item.userName }}</p>
                    <small>{{ item.time }}</small>
                  </div>
                </v-col>
                <v-col cols="12" class="pt-0">
                  <p class="text--secondary">{{ item.text }}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="6">
        <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
          <!-- Нові користувачі -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Новые пользователи
                <v-chip
                  class="px-4 ml-6"
                >{{ newUsers.length }}</v-chip>
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-card
                class="console-card pa-5 mb-5"
                v-for="item in newUsers"
                :key="item.id"
              >
                <v-row class="justify-space-between">
                  <v-col cols="6" class="d-grid cols-1-3">
                    <v-avatar size="46">
                      <img
                        src="https://i.pinimg.com/564x/ce/11/51/ce1151ad1fe8e3a87726ed6f1db0a1d3.jpg"
                        alt="John"
                      >
                    </v-avatar>
                    <div class="admin-user-info text-start">
                      <p>{{ item.userName }}</p>
                      <small>{{ item.email }}</small>
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <p class="text-end ma-0">{{ item.time }} дня назад</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Нові користувачі -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                НОвости
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row>
                <v-col>
                  <p>3 месяца назад</p>
                  <p class="font-weight-medium">Получайте уведомления о новых заказах в реальном времени, где бы вы ни находились</p>
                  <p class="text--secondary">Получайте уведомления об активности в магазине, в том числе о размещении новых заказов и отзывов о продуктах, прямо на мобильные устройства благодаря приложению Woo.</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-btn
                depressed
                class="btn-main mt-4"
                height="32px"
                small
              >
                узнать больше
              </v-btn>
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
        panel1: [0, 1],
        orderOptions: [
          {
            id: 496,
            userName: 'Игорь Манжул',
            time: 2,
            amount: 1,
            price: 850,
            status: 'Обработка',
          },
          {
            id: 498,
            userName: 'Игорь Манжул',
            time: 4,
            amount: 3,
            price: 950,
            status: 'Оплачен',
          },
        ],
        reviewOptions: [
          {
            id: 10112,
            userName: 'Михаил Степанцов',
            time: '3 месяца назад',
            text: 'Получайте уведомления об активности в магазине, в том числе о размещении новых заказов и отзывов о продуктах, прямо на мобильные устройства благодаря приложению Woo.',
          },
          {
            id: 10113,
            userName: 'Михаил Степанцов',
            time: '4 месяца назад',
            text: 'Получайте уведомления об активности в магазине, в том числе о размещении новых заказов и отзывов о продуктах, прямо на мобильные устройства благодаря приложению Woo.',
          },
          {
            id: 10113,
            userName: 'Михаил Степанцов',
            time: '4 месяца назад',
            text: 'Получайте уведомления об активности в магазине, в том числе о размещении новых заказов и отзывов о продуктах, прямо на мобильные устройства благодаря приложению Woo.',
          },
        ],
        newUsers: [
          {
            id: 1,
            userName: 'Игорь Манжул',
            email: 'manzhul@gmail.com',
            time: 2,
          },
          {
            id: 2,
            userName: 'Игорь Манжул',
            email: 'manzhul@gmail.com',
            time: 4,
          }
        ],
        panel2: [0, 1],
      }
    },
    methods: {
      getColor (status) {
        if (status === 'Оплачен') return 'green'
        else if (status === 'Обработка') return 'orange'
        else return 'primary'
      },
    }
  }
</script>

<style lang="scss" scoped>
.console {
  .console-grid {
    display: grid;
    grid-gap: 28px;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .title-text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: $grey !important;
  }

  .console-card {
    background-color: $dirtywhite !important;
    color: $graydark !important;
    text-align: left;
    border-radius: 10px !important;
    display: flex !important;
    flex-wrap: wrap !important;
  }

  .admin-user {
    display: flex;
    position: absolute;
    align-items: center;
    bottom: 0;
    right: 0;

    &-info {
      p {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        color: $graydark;
        margin-bottom: 0px !important;
      }

      small {
        font-size: 16px;
        line-height: 20px;
        color: $mgrey;
      }
    }

    &.minified {
      padding: 14px 14px;
    }
  }
}
</style>
