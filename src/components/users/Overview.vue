<template lang="html">
  <div class="users-overview">
    <!-- Перший рядок -->
    <v-row class="mt-1">
      <v-col cols="5" class="d-grid cols-3-2">
        <v-btn
          depressed
          class="btn-main"
          height="36px"
          small
        >
          авторизироваться как...
        </v-btn>
        <v-btn
          depressed
          class="btn-main"
          height="36px"
          small
        >
          заблокировать
        </v-btn>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row>
      <v-col cols="9">
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <!--Загальна інформація-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                общая информация
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
                <v-col cols="6">
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.counter]"
                    label="Ім’я"
                    counter
                    maxlength="191"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="surname"
                    :rules="[rules.required, rules.counter]"
                    label="Прізвище"
                    counter
                    maxlength="191"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.counter]"
                    label="Email"
                    counter
                    maxlength="191"
                    class="pa-0 ma-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="telephone"
                    :rules="[rules.required, rules.counter]"
                    label="Телефон"
                    counter
                    maxlength="191"
                    class="pa-0 ma-0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="my-3">
                  <p class="text--disabled mb-2">
                    Полное описание
                  </p>
                  <v-text-field
                    outlined
                    dense
                    height="234px"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="pb-8">
                <v-col>
                  <v-select
                    :items="city"
                    label="Город"
                  ></v-select>
                  <v-select
                    v-model="hobbies"
                    :items="items"
                    attach
                    label="Увлечения"
                    chips
                    multiple
                    deletable-chips:rules="[rules.required, rules.counter]"
                    counter
                    maxlength="191"
                  ></v-select>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="3">
        <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
          <!--Настройки-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-subheader
                class="tab-subheader"
              >
                Настройки
              </v-subheader>
              <template v-slot:actions>
                <v-icon>
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="id"
                    :rules="[rules.required, rules.counter]"
                    label="Id"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-select
                    :items="label"
                    label="Label"
                    class="pa-0"
                  ></v-select>
                  <v-text-field
                    v-model="idt"
                    :rules="[rules.required, rules.counter]"
                    label="Idt"
                    counter
                    maxlength="191"
                    class="pa-0"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Метки-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Метки
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <div class="d-grid cols-3-2">
                <v-text-field
                  outlined
                  hide-details
                  dense
                ></v-text-field>
                <v-btn
                  depressed
                  class="btn-main"
                  small
                  height="100%"
                >
                  Добавить
                </v-btn>
              </div>
              <v-subheader class="px-0"> Разделяйте метки запятыми </v-subheader>
              <v-chip-group
                column
              >
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                > Активный отдых </v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Пляж</v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Бокс</v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Хоккей</v-chip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Изображение-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Изображение
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row class="d-flex">
                <v-col>
                  <v-file-input
                    label="Установить изображение страницы"
                    hide-details
                    prepend-icon=""
                    class="file-input ma-0 pa-0"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Атрибуты сторінки-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Атрибуты страницы
              </v-subheader>
              <template v-slot:actions>
                <v-icon color="grey">
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-5 pb-5">
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="attributeActive"
                    label="Активный"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeCheck"
                    label="Новый"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeTop"
                    label="Топ"
                    color="primary"
                    hide-details
                  ></v-checkbox>
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
        panel1: [0],
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 191 || 'Max 191 characters',
        },
        name: '',
        surname: '',
        email: '',
        telephone: '',
        city: ['Киев', 'Львов', 'Одеса'],
        hobbies: ['Funsport', 'Спорт', 'Активный отдых'],
        items: ['Funsport', 'Спорт', 'Активный отдых', 'Теніс', 'Волейбол'],
        panel2: [0, 1, 2, 3],
        id: '',
        idt: '',
        label: ['Пользователь'],
        attributeActive: [false],
        attributeTop: [false],
        attributeCheck: [false],
      }
    }
  }
</script>

<style lang="scss" scoped>
.users-overview {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
