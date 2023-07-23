<script lang="ts" setup>
import {ref} from 'vue'
import logo from '@/assets/logo.svg'
import {changeTheme} from '@/utils/Theme'
import ZDropDown from "@/components/globals/ZDropDown.vue"
import ZDropDownItem from "@/components/globals/ZDropDownItem.vue";
import {menuList} from "./config"
import {Sunny, Moon, ArrowDown, Menu} from '@element-plus/icons-vue'

let isLight = ref(true)
</script>

<template>
  <div class="container-fluid g-0 text-center header-container">
    <div class="row g-0">
      <div class="col-4 col-sm-2 col-lg-1">
        <div class="row g-0 justify-content-center">
          <el-image style="height: 50px; width: 50px" :src="logo" fit="cover"></el-image>
        </div>
      </div>

      <div class="col-8 col-sm-10 col-lg-11">
        <div class="row g-0 align-items-center justify-content-end z-fill-height">
          <div class="col-2 order-3 offset-sm-0 order-sm-2 col-sm-9 col-md-8 col-lg-10">
            <div class="row g-0 align-items-center justify-content-end z-fill-height">
              <div class="d-none d-sm-block col-12 col-sm-12 col-md-10 col-lg-6 col-xl-4">
                <div class="row g-0 justify-content-end">
                  <div v-for="item in menuList" :key="item.value" :class="`col-${item.col}`">
                    <template v-if="'href' in item">
                      <el-link :href="item.href" :underline="false" type="primary">{{ item.value }}</el-link>
                    </template>
                    <template v-else>
                      <div class="row g-0 align-items-center justify-content-end z-fill-height">
                        <ZDropDown class="dropdown" style="top: 0.5px">
                          <span style="font-size: 14px">
                            {{ item.value }}
                            <el-icon class="el-icon--right">
                              <ArrowDown/>
                            </el-icon>
                          </span>
                          <template #dropdown>
                            <ZDropDownItem class="dropdown-item" v-for="{value: val, href} in item.items" :key="val">
                              <el-link class="link" :href="href" :underline="false" type="primary">{{ val }}</el-link>
                            </ZDropDownItem>
                          </template>
                        </ZDropDown>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div class="col d-block d-sm-none">
                <el-icon style="top: 4px; right: 10px" :size="20">
                  <Menu :size="20"/>
                </el-icon>
              </div>
            </div>
          </div>

          <div class="col-4 order-2 order-sm-3 col-sm-2 col-md-2 col-lg-1">
            <div class="row g-0 align-items-center justify-content-end z-fill-height">
              <div class="col">
                <el-divider direction="vertical"/>
                <el-switch
                    style="top: 1px"
                    @change="changeTheme"
                    v-model="isLight"
                    inline-prompt
                    :active-icon="Sunny"
                    :inactive-icon="Moon"
                />
                <!-- <el-divider direction="vertical" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$head-height: 50px;

.header-container {
  border-bottom: 1px solid var(--datahub-line-color);
}

.link {
  width: 100%;
  justify-content: unset;
}

.el-link {
  font-weight: unset;
  color: var(--nav-text-color);
  transition: color 0.3s;
}

.el-link:hover {
  color: var(--text-hover-color);
  transition: color 0.3s;
}

.dropdown {
  top: 1.5px;

  span {
    font-size: 14px !important;
  }
}
</style>
