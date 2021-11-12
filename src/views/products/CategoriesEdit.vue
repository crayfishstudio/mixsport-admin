<template lang="html">
  <div class="categories-edit">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Категория id {{ $route.params.id }}</v-toolbar-title>

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
        @click="creationSidebar = !creationSidebar"
      >
        Сохранить
      </v-btn>
    </v-app-bar>
    <!-- Перший рядок -->
    <v-row class="pt-2">
      <v-col
        cols="2"
      >
        <v-select
          :items="language"
          label="язык"
          class="mr-8"
          background-color="white"
          outlined
          dense
          height="45px"
          hide-details
        ></v-select>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row>
      <v-col cols="9">
      <!-- Перша карточка -->
      <v-card outlined class="mb-5">
        <div class="flex-wrap pa-4">
          <v-text-field
            v-model="title"
            :rules="[rules.required, rules.counter]"
            label="Название"
            counter
            maxlength="191"
          ></v-text-field>
          <p class="text--disabled mb-2">
            Короткое описание
          </p>
          <v-text-field
            outlined
            dense
            height="76px"
          ></v-text-field>
        </div>
      </v-card>
      <!-- Друга карточка / seo -->
      <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
        <v-expansion-panel>
          <v-expansion-panel-header >
            <v-subheader
              class="tab-subheader"
            >
              seo
            </v-subheader>
            <template v-slot:actions>
              <v-icon >
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-tabs
              v-model="tab2"
              class="pl-5"
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab
                v-for="item in tabs2"
                :key="item"
                :to="item.component"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab2">
              <v-tab-item class="pa-5">
                <v-text-field
                  v-model="seoMetaTitle"
                  :rules="[rules.required, rules.counter]"
                  label="Meta title"
                  counter
                  maxlength="191"
                ></v-text-field>
                <v-text-field
                  v-model="seoUrlAdress"
                  :rules="[rules.required, rules.counter]"
                  label="Канонический URL-адрес"
                  counter
                  maxlength="191"
                  class="mb-6"
                ></v-text-field>
                <p class="text--disabled mb-2">
                  Meta descriptopn
                </p>
                <v-textarea
                    outlined
                  >
                </v-textarea>
              </v-tab-item>
              <v-tab-item class="pa-5">
                <v-text-field
                  v-model="facebook"
                  :rules="[rules.required, rules.counter]"
                  label="Facebook"
                  counter
                  maxlength="191"
                  class="mb-3"
                ></v-text-field>
                <v-text-field
                  v-model="google1"
                  :rules="[rules.required, rules.counter]"
                  label="Google"
                  counter
                  maxlength="191"
                  class="mb-5"
                ></v-text-field>
                <v-text-field
                  v-model="google2"
                  :rules="[rules.required, rules.counter]"
                  label="Google"
                  counter
                  maxlength="191"
                  class="mb-10"
                ></v-text-field>
              </v-tab-item>
            </v-tabs-items>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col cols="3">
      <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
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
          <v-expansion-panel-content class="px-4 pb-5">
            <v-row class="d-flex">
              <v-col>
                <v-file-input
                  label="Установить изображение страницы"
                  hide-details
                  prepend-icon=""
                  class="file-input"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Атрибуты страницы -->
        <v-expansion-panel>
          <v-expansion-panel-header >
            <v-subheader
              class="tab-subheader"
            >
              Атрибуты страницы
            </v-subheader>
            <template v-slot:actions>
              <v-icon >
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="px-4 pt-1 pb-10">
            <v-select
              :items="template"
              label="Шаблон"
              hide-details
              class="mb-3"
            ></v-select>
            <v-text-field
              label="Порядок"
              hide-details
            ></v-text-field>
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
        panel1: [0, 1],
        panel2: [0, 1],
        title: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 191 || 'Max 191 characters',
        },
        tab2: null,
        tabs2: [
          'Основные',
          'Социальные сети',
        ],
        seoMetaTitle: '',
        seoUrlAdress: '',
        facebook: '',
        google1: '',
        google2: '',
        template: ['Продукты'],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
