<template lang="html">
  <div class="events-overview">
    <!-- Перший рядок -->
    <v-row class="mt-1">
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
      <v-col
        cols="10"
        class="d-flex justify-end align-center"
      >
        <p class="text--secondary my-0 mr-7">
          Статистика:
        </p>
        <p class="my-0 mr-6">
          <v-icon color="mgrey" class="mr-2" >
            mdi-eye
          </v-icon>
          217805
        </p>
        <p class="my-0 mr-6">
          <v-icon color="mgrey" class="mr-2" >
            mdi-eye
          </v-icon>
          151842
        </p>
        <p class="my-0 mr-6">
          <v-icon color="mgrey" class="mr-2" >
            mdi-eye
          </v-icon>
          77
        </p>
        <p class="my-0 mr-6">
          <v-icon color="mgrey" class="mr-2" >
            mdi-eye
          </v-icon>
          13
        </p>
        <p class="my-0 mr-3">
          <v-icon color="mgrey" class="mr-2" >
            mdi-star
          </v-icon>
          4.8462
        </p>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row>
      <v-col cols="9">
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <!-- Основна інформація -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Основная информация
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-text-field
                v-model="title"
                :rules="[rules.required, rules.counter]"
                label="Назва"
                counter
                maxlength="191"
              ></v-text-field>
              <v-row>
                <v-col cols="5" class="py-0">
                  <v-subheader
                    class="tabs-subheader"
                  >
                    Тип события
                  </v-subheader>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="7" class="d-grid cols-4-2">
                  <v-select
                    :items="types"
                    label="Действия"
                    background-color="white"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                  <v-btn
                    depressed
                    class="btn-main"
                    height="40px"
                    small
                  >
                    Применить
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="5">
                  <v-subheader
                    class="tabs-subheader"
                  >
                    Дата начала
                  </v-subheader>
                </v-col>
                <v-col cols="7">
                  <v-subheader
                    class="tabs-subheader"
                  >
                    Дата окончания
                  </v-subheader>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  class="d-grid cols-3-2-3-2-2 pt-0"
                >
                  <!-- Тут дата-1 -->
                  <v-dialog
                    ref="dialog"
                    v-model="saleday1"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                    title-date-format
                    input="string"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                        color="mgrey"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="saleday1 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <!-- Тут година-1 -->
                  <v-dialog
                    ref="saletime1"
                    v-model="menu15"
                    :return-value.sync="time15"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time15"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu15"
                      v-model="time15"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu15 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.saletime1.save(time15)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                  <!-- Тут дата-2 -->
                  <v-dialog
                    ref="dialog2"
                    v-model="saleday2"
                    :return-value.sync="date2"
                    persistent
                    width="290px"
                    title-date-format
                    input="string"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date2"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date2"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="saleday2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog2.save(date2)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <!-- Тут година-2 -->
                  <v-dialog
                    ref="saletime2"
                    v-model="menu16"
                    :return-value.sync="time16"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time16"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu16"
                      v-model="time16"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu16 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.saletime2.save(time16)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                  <v-btn
                    fab
                    small
                    color="graylightsecond"
                    depressed
                    class="mr-3"
                  >
                    <v-icon color="grey">
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  class="d-grid cols-3-2-3-2-2"
                >
                  <!-- Тут дата-3 -->
                  <v-dialog
                    ref="dialog3"
                    v-model="saleday3"
                    :return-value.sync="date3"
                    persistent
                    width="290px"
                    title-date-format
                    input="string"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date3"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                        color="mgrey"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date3"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="saleday3 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog3.save(date3)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <!-- Тут година-3 -->
                  <v-dialog
                    ref="saletime3"
                    v-model="menu17"
                    :return-value.sync="time17"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time17"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu17"
                      v-model="time17"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu17 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.saletime3.save(time17)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                  <!-- Тут дата-4 -->
                  <v-dialog
                    ref="dialog4"
                    v-model="saleday4"
                    :return-value.sync="date4"
                    persistent
                    width="290px"
                    title-date-format
                    input="string"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date4"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date4"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="saleday4 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog4.save(date4)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <!-- Тут година-4 -->
                  <v-dialog
                    ref="saletime4"
                    v-model="menu18"
                    :return-value.sync="time18"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time18"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu18"
                      v-model="time18"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu18 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.saletime4.save(time18)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                  <div class="d-flex justify-start">
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="mr-3"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                    >
                      <v-icon color="grey">
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Полное описание -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Полное описание
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <p class="text--disabled text-start mb-2">
                Полное описание
              </p>
              <v-textarea
                  outlined

                >
              </v-textarea>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="site"
                    :rules="[rules.required, rules.counter]"
                    label="Сайт"
                    counter
                    maxlength="191"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="linkToBuy"
                    :rules="[rules.required, rules.counter]"
                    label="Ссылка на покупку билетов или регистрацию"
                    counter
                    maxlength="191"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Контактна інформація -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Контактная информация
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
                v-model="tab1"
                class="pl-5"
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab
                  v-for="item in tabs1"
                  :key="item"
                  :to="item.component"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-divider></v-divider>
              <v-tabs-items v-model="tab1">
                <v-tab-item class="pa-5">
                  <v-text-field
                    v-model="district"
                    :rules="[rules.required, rules.counter]"
                    label="Виберите район"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    v-model="adress"
                    :rules="[rules.required, rules.counter]"
                    label="Адрес"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    label="Сайт"
                    class="mb-3"
                  ></v-text-field>
                  <v-text-field
                    label="Телефон"
                    append-outer-icon="mdi-plus"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    append-outer-icon="mdi-plus"
                  ></v-text-field>
                  <v-row class="d-flex">
                    <v-col cols="5" >
                      <v-text-field
                        v-model="latitude"
                        :rules="[rules.required, rules.counter]"
                        label="Latitude"
                        counter
                        maxlength="191"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        v-model="longitude"
                        :rules="[rules.required, rules.counter]"
                        label="Longitude"
                        counter
                        maxlength="191"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-center">
                      <v-btn icon color="graylight">
                        <v-icon class="">
                          mdi-help-circle
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
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
                    v-model="google"
                    :rules="[rules.required, rules.counter]"
                    label="Google"
                    counter
                    maxlength="191"
                    class="mb-5"
                  ></v-text-field>
                  <v-text-field
                    v-model="google"
                    :rules="[rules.required, rules.counter]"
                    label="Google"
                    counter
                    maxlength="191"
                    class="mb-10"
                  ></v-text-field>
                </v-tab-item>
                <v-tab-item class="pa-5">
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                      Понеділок
                    </p>
                    <v-switch
                      v-model="switchMonday"
                      :label="switchMonday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockMon1"
                      v-model="menu"
                      :return-value.sync="time"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu"
                        v-model="time"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockMon1.save(time)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockMon2"
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
                          @click="$refs.clockMon2.save(time2)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                      Вівторок
                    </p>
                    <v-switch
                      v-model="switchTuesday"
                      :label="switchTuesday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockTues1"
                      v-model="menu3"
                      :return-value.sync="time3"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time3"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu3"
                        v-model="time3"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu3 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockTues1.save(time3)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockTues2"
                      v-model="menu4"
                      :return-value.sync="time4"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time4"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu4"
                        v-model="time4"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu4 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockTues2.save(time4)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Середа
                    </p>
                    <v-switch
                      v-model="switchWednesday"
                      :label="switchWednesday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockWedn1"
                      v-model="menu5"
                      :return-value.sync="time5"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time5"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu5"
                        v-model="time5"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu5 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockWedn1.save(time5)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockWedn2"
                      v-model="menu6"
                      :return-value.sync="time6"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time6"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu6"
                        v-model="time6"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu6 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockWedn2.save(time6)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Четвер
                    </p>
                    <v-switch
                      v-model="switchThursday"
                      :label="switchThursday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockThurs1"
                      v-model="menu7"
                      :return-value.sync="time7"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time7"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu7"
                        v-model="time7"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu7 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockThurs1.save(time7)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockThurs2"
                      v-model="menu8"
                      :return-value.sync="time8"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time8"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu8"
                        v-model="time8"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu8 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockThurs2.save(time8)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Пятниця
                    </p>
                    <v-switch
                      v-model="switchFriday"
                      :label="switchFriday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockFri1"
                      v-model="menu9"
                      :return-value.sync="time9"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time9"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu9"
                        v-model="time9"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu9 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockFri1.save(time9)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockFri2"
                      v-model="menu10"
                      :return-value.sync="time10"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time10"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu10"
                        v-model="time10"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu10 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockFri2.save(time10)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Субота
                    </p>
                    <v-switch
                      v-model="switchSaturday"
                      :label="switchSaturday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockSatur1"
                      v-model="menu11"
                      :return-value.sync="time11"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time11"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu11"
                        v-model="time11"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu11 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSatur1.save(time11)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockSatur2"
                      v-model="menu12"
                      :return-value.sync="time12"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time12"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu12"
                        v-model="time12"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu12 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSatur2.save(time12)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Неділя
                    </p>
                    <v-switch
                      v-model="switchSunday"
                      :label="switchSunday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockSun1"
                      v-model="menu13"
                      :return-value.sync="time13"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time13"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu13"
                        v-model="time13"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu13 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSun1.save(time13)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockSun2"
                      v-model="menu14"
                      :return-value.sync="time14"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time14"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu14"
                        v-model="time14"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu14 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSun2.save(time14)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Дополнительная информация -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Дополнительная информация
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-text-field
                v-model="authorPhoto"
                :rules="[rules.required, rules.counter]"
                label="Автор фото"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="source"
                :rules="[rules.required, rules.counter]"
                label="Джерело"
                counter
                maxlength="191"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="3">

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      panel1: [0, 1, 2, 3],
      language: ['Рус', 'Укр', 'Eng'],
      title: '',
      site: '',
      linkToBuy: '',
      authorPhoto: '',
      source: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday1: false,
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday2: false,
      date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday3: false,
      date4: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday4: false,
      time15: null,
      menu15: false,
      time16: null,
      menu16: false,
      time17: null,
      menu17: false,
      time18: null,
      menu18: false,


      tab1: null,
      tabs1: [
        'Адрес',
        'Социальные сети',
        'Часы работы',
      ],
      district: '',
      adress: '',
      facebook: '',
      google: '',
      latitude: '',
      longitude: '',
      switchMonday: false,
      switchTuesday: false,
      switchWednesday: false,
      switchThursday: false,
      switchFriday: false,
      switchSaturday: false,
      switchSunday: false,
      time: null,
      menu: false,
      time2: null,
      menu2: false,
      time3: null,
      menu3: false,
      time4: null,
      menu4: false,
      time5: null,
      menu5: false,
      time6: null,
      menu6: false,
      time7: null,
      menu7: false,
      time8: null,
      menu8: false,
      time9: null,
      menu9: false,
      time10: null,
      menu10: false,
      time11: null,
      menu11: false,
      time12: null,
      menu12: false,
      time13: null,
      menu13: false,
      time14: null,
      menu14: false,
    })
  }
}
</script>

<style lang="scss" scoped>
.events-overview {
  background-color: #F9F9F9;
  padding: 0;
}

.v-text-field {
  padding: 0px !important;
}

.row {
  margin-top: 0 !important;
}

.v-subheader {
  padding: 0px !important;
}
</style>
