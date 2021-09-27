<template>
  <v-container>
    <v-row>
      <v-col md="1">
        <v-select
            :items="items"
            label="Язык"
            dense
            height="45px"
            outlined
            hide-details
            background-color="white"
          ></v-select>
      </v-col>
      <v-col md="11">
        <div class="stat-wrap">
          <span class="stat-title">Статистика:</span>
          <div
            v-for="stat in stats"
            :key="stat.title"
            class="item"
          >
            <v-icon>{{ stat.icon }}</v-icon>
            <span>{{ stat.number }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="9">
        <v-expansion-panels multiple class="panels-items" v-model="panel">
          <v-expansion-panel class="item" v-model="panel">
            <v-expansion-panel-content class="content">
              <v-text-field
                counter
                maxlength="200"
                label="Название"
              ></v-text-field>
              <v-textarea
                outlined
                label="Короткое описание"
              ></v-textarea>
              <editor />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Контактная информация
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content contact-content">
              <v-tabs
                v-model="contact"
                class="contact-tabs"
              >
                <v-tab
                  v-for="contact in contacts"
                  :key="contact.title"
                >
                  {{ contact.title }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="contact">
                <v-tab-item
                  v-for="contact in contacts"
                  :key="contact.title"
                >
                  <template v-if="contact.content==1">
                    <v-text-field
                      counter
                      maxlength="200"
                      label="Виберите район"
                    ></v-text-field>
                    <v-text-field
                      counter
                      maxlength="200"
                      label="Адрес"
                    ></v-text-field>
                    <v-text-field
                      label="Сайт"
                    ></v-text-field>
                    <div class="d-flex align-center">
                      <v-text-field
                        label="Телефон"
                      ></v-text-field>
                      <v-btn
                        class="ml-5"
                        icon
                      >
                        <v-icon>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </div>
                    <div class="d-flex align-center">
                      <v-text-field
                        label="Email"
                      ></v-text-field>
                      <v-btn
                        class="ml-5"
                        icon
                      >
                        <v-icon>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </div>
                    <div class="d-flex align-center">
                      <v-text-field
                        counter
                        maxlength="200"
                        label="Latitude"
                      ></v-text-field>
                      <v-text-field
                        counter
                        maxlength="200"
                        label="Longitude"
                        class="ml-5"
                      ></v-text-field>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            class="ml-5"
                            icon
                          >
                            <v-icon>
                              mdi-help-circle
                            </v-icon>
                          </v-btn>
                        </template>
                        <span>Подсказка</span>
                      </v-tooltip>
                    </div>
                  </template>
                  <template v-else-if="contact.content==2">
                    tab 2
                  </template>
                  <template v-else-if="contact.content==3">
                    tab 3
                  </template>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              seo
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content contact-content">
              <v-tabs
                v-model="ceo"
                class="contact-tabs"
              >
                <v-tab
                  v-for="ceo in ceos"
                  :key="ceo.title"
                >
                  {{ ceo.title }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="ceo">
                <v-tab-item
                  v-for="ceo in ceos"
                  :key="ceo.title"
                >
                  <template v-if="ceo.content==1">
                    <v-text-field
                      counter
                      maxlength="200"
                      label="Meta title"
                    ></v-text-field>
                    <v-text-field
                      counter
                      maxlength="200"
                      label="Канонический URL-адрес"
                    ></v-text-field>
                    <v-textarea
                      outlined
                      hide-details="auto"
                      label="Meta descriptopn"
                    ></v-textarea>
                  </template>
                  <template v-else-if="ceo.content==2">
                    tab 2
                  </template>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Дополнительная информация
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-text-field
                counter
                maxlength="200"
                label="Полное название"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="Автор фото"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="Источник"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="КОАТУУ"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="Код ЄДРПОУ"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="3D видео"
              ></v-text-field>
              <v-text-field
                counter
                maxlength="200"
                label="Ключевые слова"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="3">
        <v-expansion-panels multiple class="panels-items">
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Настройки
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-select
                :items="items"
                label="Статус"
                hide-details="auto"
                class="input"
              ></v-select>
              <v-select
                :items="items"
                label="Тип"
                hide-details="auto"
                class="input"
              ></v-select>  
              <v-select
                :items="items"
                label="Автор"
                hide-details="auto"
                class="input"
              ></v-select>
              <v-text-field
                label="Слаг"
                hide-details="auto"
                class="input"
              ></v-text-field>
              <v-text-field
                label="Создано"
                hide-details="auto"
                class="input"
              ></v-text-field>
              <v-text-field
                label="Изменено"
                hide-details="auto"
                class="input"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Категории
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-checkbox
                v-for="checkbox in checkboxes"
                :key="checkbox"
                :label="checkbox"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-btn
                text
                class="btn-text"
              >
                <v-icon class="icon">mdi-plus</v-icon>
                Добавить новую категорию
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Метки
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <div class="d-flex">
                <v-text-field
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
                <v-btn
                  outlined
                  height="auto"
                  class="ml-2"
                >Добавить</v-btn>
              </div>
              <span class="tags-info">Разделяйте метки запятыми</span>
              <v-chip-group column>
                <v-chip
                  v-for="chip in chips"
                  :key="chip"
                  close
                >
                  {{ chip }}
                </v-chip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Изображение
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-btn
                text
                class="btn-imgadd"
              >
                Установить изображение страницы
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Лого
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-btn
                text
                class="btn-imgadd"
              >
                Установить изображение страницы
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="item">
            <v-expansion-panel-header class="header">
              Атрибуты страницы
            </v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <v-select
                :items="items"
                label="Шаблон"
                hide-details="auto"
                class="input"
              ></v-select>
              <v-select
                :items="items"
                label="Порядок"
                hide-details="auto"
                class="input"
              ></v-select>
              <v-checkbox
                v-for="atribut in atributs"
                :key="atribut"
                :label="atribut"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-textarea
                outlined
                label="Описание дресскода"
                hide-details="auto"
                class="atributes-textarea"
              ></v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from './Editor.vue'

export default {
  name: 'Info',
  components: {
    Editor
  },
  data: () => ({
    text: '',
    panel: [0],
    items: ['Рус', 'Англ'],
    stats: [
      {
        icon: 'mdi-eye',
        number: '217805',
      },
      {
        icon: 'mdi-eye',
        number: '151842',
      },
      {
        icon: 'mdi-eye',
        number: '77',
      },
      {
        icon: 'mdi-eye',
        number: '13',
      },
      {
        icon: 'mdi-star',
        number: '4.8462',
      },
    ],
    checkboxes: ['Спортивные секции', 'Баня', 'Развлекательный комплекс'],
    chips: ['Активный отдых', 'Пляж', 'Бокс', 'Хоккей'],
    atributs: ['Рекомендований', 'Незатребуваний', 'Закритий назавжди', 'Фейсконтроль', 'Дресскод'],
    contact: null,
    contacts: [
      { title: 'Адрес', content: '1' },
      { title: 'Социальные сети', content: '2' },
      { title: 'Часы работы', content: '3' },
    ],
    ceo: null,
    ceos: [
      { title: 'Основные', content: '1' },
      { title: 'Социальные сети', content: '2' },
    ]
  }),
  methods: {
    onUpdate (text) {
      this.text = text
    }
  },
}
</script>

<style lang="scss" scoped>
  .stat-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    .stat-title {
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      color: #979797;
      margin-right: 30px;
    }

    .item {
      margin-right: 20px;
      display: flex;
      align-items: center;

      &:last-child {
        margin-right: 0px;
      }

      span {
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        color: #2b2b2b;
        margin-left: 10px;
      }
    }
  }

  .panels-items {
    .item {
      .header {
        text-transform: uppercase;
        padding: 15px 17px;
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
        color: #6c6c6c;
        min-height: auto;
      }

      .content {
        padding: 15px 17px 20px;
        border-top: 1px solid #ececec;

        &::v-deep {
          .v-expansion-panel-content__wrap {
            padding: 0px;
          }

          .v-input--checkbox:first-child {
            margin-top: 0px;
          }
        }

        .input {
          transition: 0.2s;

          &::v-deep {
            &.v-input--is-label-active,
            &.v-input--is-focused {
              margin-top: 15px;

              &:first-child {
                margin-top: 0px;
              }
            }
          }
        }

        .btn-text {
          padding: 0px;
          height: auto;
          margin-top: 20px;
          text-transform: none;
          font-size: 14px;
          line-height: 27px;
          font-weight: 400;
          color: #6c6c6c;

          .icon {
            margin-right: 10px;
          }
        }

        .tags-info {
          display: inline-block;
          font-size: 14px;
          line-height: 27px;
          font-weight: 400;
          color: #6c6c6c;
          margin: 10px 0px;
        }

        .btn-imgadd {
          padding: 0px;
          height: 27px;
          text-transform: none;
          font-size: 14px;
          line-height: 27px;
          font-weight: 400;
          color: #6c6c6c;
          text-decoration: underline;
        }

        .atributes-textarea {
          margin-top: 20px;
        }

        &.contact-content {
          position: relative;
          padding-top: 66px;

          .contact-tabs {
            position: absolute;
            left: 0px;
            top: 0px;
            padding-left: 15px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
  }
</style>