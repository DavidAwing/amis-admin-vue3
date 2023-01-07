<template>
  <div id="mobile-editor" class="app-wrapper"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import ReactDom from 'react-dom';
import { mountInIframe } from 'amis-editor';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/v4-shims.css'
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis-editor-core/lib/style.css'
import '../editor/DisabledEditorPlugin'; // 用于隐藏一些不需要的Editor预置组件
import '../renderer/MyRenderer';
import '../editor/MyRenderer';


export default class MobileEditor extends Vue {

  mounted() {
    mountInIframe(document.getElementById('mobile-editor') as HTMLElement, ReactDom);

    // 备注: 需要带上自定义组件，避免移动端渲染异常
    /* globals amis */
    // @ts-ignore
    // amis.require(['amis-editor', 'react-dom', './renderer/MyRenderer'], function (editor, reactDom) {
    //   editor.mountInIframe(document.getElementById('mobile-editor'), reactDom);
    // });

  }

}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>

