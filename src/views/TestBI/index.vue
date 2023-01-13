<template>
  <div id="my-editor" class-name="app-wrapper"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/v4-shims.css'
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis-editor-core/lib/style.css'

// import './BI-src/mod.js'
// import './BI-src/fis-conf.js'

import { bootstrap } from './BI-src/index'
import { applyPureReactInVue } from 'veaury'
// This is a React Component
import TestComponent, { ReactButton } from "./test/Button"

@Options({
  components: {
    TestComponent: applyPureReactInVue(TestComponent),
    ReactButton: applyPureReactInVue(ReactButton)
  }
})

export default class TestBI extends Vue {

  txt = "测试按钮";

  mounted(): void {

    // @ts-ignore
    // console.log("amisRequire", amisRequire);
    // @ts-ignore
    // console.log("amis.require", amis.require);

    document.title = "amis-admin-vue3"
    bootstrap(document.getElementById('my-editor') as HTMLElement);
  }

}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>

