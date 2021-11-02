<template lang="html">
  <div class="places-overview">
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
      <v-col
        cols="9"
      >
        <!-- Коротний опис -->
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

            ></v-text-field>
            <p class="text--disabled mb-2">
              Полное описание
            </p>
            <quill-editor
              :content="content"
              :options="editorOption"
              @change="onEditorChange($event)"
            />
          </div>
        </v-card>
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
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
          <!-- seo -->
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
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Додаткова інформація -->
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
            <v-expansion-panel-content class="pa-4">
              <v-text-field
                v-model="fullName"
                :rules="[rules.required, rules.counter]"
                label="Полное название"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="authorPhoto"
                :rules="[rules.required, rules.counter]"
                label="Автор фото"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="sourse"
                :rules="[rules.required, rules.counter]"
                label="Источник"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="addInfoKod"
                :rules="[rules.required, rules.counter]"
                label="КОАТУУ"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="kodUsreou"
                :rules="[rules.required, rules.counter]"
                label="Код ЄДРПОУ"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="addInfoVideo"
                :rules="[rules.required, rules.counter]"
                label="3D видео"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="keywords"
                :rules="[rules.required, rules.counter]"
                label="Ключевые слова"
                counter
                maxlength="191"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="3"
      >
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
            <v-expansion-panel-content class="px-4 py-3">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-select
                    :items="settingsStatus"
                    label="Статус"
                    hide-details
                  ></v-select>
                  <v-select
                    :items="settingsType"
                    label="Тип"
                    hide-details
                  ></v-select>
                  <v-select
                    :items="settingsAuthor"
                    label="Автор"
                    hide-details
                  ></v-select>
                  <v-text-field
                    hide-details
                    label="Слаг"
                  ></v-text-field>
                  <v-text-field
                    hide-details
                    label="Создано"
                  ></v-text-field>
                  <v-text-field
                    label="Изменено"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Категории-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                категории
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-4 pb-5">
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="sportSections"
                    label="Спортивные секции"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="sauna"
                    label="Баня"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="entertainmentComplex"
                    label="Развлекательный комплекс"
                    color="primary"
                    hide-details
                    class="mb-4"
                  ></v-checkbox>
                  <v-btn
                    text
                    class="categorie-btn"
                    @click="$emit('openNewCategorySidebar')"
                  >
                    <v-icon class="mr-2">
                      mdi-plus
                    </v-icon>
                    Добавить новую категорию
                  </v-btn>
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
              <v-subheader> Разделяйте метки запятыми </v-subheader>
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
          <!--Лого-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Лого
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
            <v-expansion-panel-content class="px-4">
              <v-select
                :items="template"
                label="Шаблон"
                hide-details
                class="mb-3"
              ></v-select>
              <v-text-field
                label="Порядок"
                hide-details
                class="mb-3"
              ></v-text-field>
              <v-checkbox
                v-model="reсomended"
                label="Рекомендований"
                color="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="unsolisited"
                label="Незатребуваний"
                color="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="closeForever"
                label="Закритий назавжди"
                color="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="faceControl"
                label="Фейсконтроль"
                color="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="dressCode"
                label="Дресскод"
                color="primary"
                hide-details
                class="mb-4"
              ></v-checkbox>
              <p class="text--disabled mb-2">
                Описание дресскода
              </p>
              <v-textarea
                  outlined
                >
              </v-textarea>
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
    return ({
      panel1: [0, 1, 2, 3],
      panel2: [0, 1, 2, 3, 4, 5],
      language: ['Рус', 'Укр', 'Eng'],
      dropdown_font: [
        { text: 'Arial' },
        { text: 'Calibri' },
        { text: 'Courier' },
        { text: 'Verdana' },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
      title: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
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
      tab2: null,
      tabs2: [
        'Основные',
        'Социальные сети',
      ],
      seoMetaTitle: '',
      seoUrlAdress: '',
      fullName: '',
      authorPhoto: '',
      sourse: '',
      addInfoKod: '',
      kodUsreou: '',
      addInfoVideo: '',
      keywords: '',
      settingsStatus: ['Активно', 'Не активно'],
      settingsType: ['Локации', 'Места'],
      settingsAuthor: ['Anna Krivko'],
      sportSections: false,
      sauna: true,
      entertainmentComplex: false,
      createNewCategory: false,
      template: ['Продукты'],
      reсomended: true,
      unsolisited: true,
      closeForever: false,
      faceControl: false,
      dressCode: true,
      categoryName: '',

      content: '<h2>I am Example</h2>',
      editorOption: {
        // Some Quill options...
      }
    })
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>

<style lang="css" scoped>
.places-overview {
  background-color: #F9F9F9;
  padding: 0;
}

.categorie-btn {
  font-size: 14px;
  line-height: 16px;
  color: #6C6C6C !important;
  text-transform: none !important;
  margin: 0px;
  letter-spacing: normal;
  padding: 0px !important;
}
</style>
