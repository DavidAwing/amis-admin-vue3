import React, { useRef } from 'react'
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
import "./index.less";

export default class MobileEditor extends React.Component {

  constructor(props:any) {
    super(props);
    console.log("MobileEditor constructor");
  }

  // 等同于vue的mounted方法
  componentDidMount() {
    mountInIframe(document.getElementById('mobile-editor') as HTMLElement, ReactDom);
  }
  render() {
    return (
      <div id="mobile-editor" className="app-wrapper"></div>
    );
  }

}
