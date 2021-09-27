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
          <span class="title">Статистика:</span>
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

      </v-col>
      <v-col md="3">
        <v-expansion-panels multiple class="side-items">
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
              <v-chip
                v-for="chip in ships"
                :key="chip.title"
                close
                @click:close="chip.see = false"
              >
                {{ chip.title }}
              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Info',
  data: () => ({
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
    chips: [
      {
        title: 'Активный отдых',
        see: true,
      },
      {
        title: 'Пляж',
        see: true,
      },
      {
        title: 'Бокс',
        see: true,
      },
      {
        title: 'Хоккей',
        see: true,
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
  .stat-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    .title {
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

  .side-items {
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
          font-weight: 400;
          color: #6c6c6c;

          .icon {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>