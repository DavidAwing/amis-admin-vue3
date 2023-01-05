import React from 'react';
import { Editor, ShortcutKey } from 'amis-editor';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import { toast, Select } from 'amis';
import { currentLocale } from 'i18n-runtime';
import { Icon, PCPreview, H5Preview } from '../icons/index';
import { IMainStore } from '../../../../store';


import { applyPureReactInVue } from 'veaury'

// import { __uri } from '../loadMonacoEditor';



import '../editor/DisabledEditorPlugin'; // 用于隐藏一些不需要的Editor预置组件
import '../renderer/MyRenderer';
// import '../editor/MyRenderer';


let currentIndex = -1;

let host = `${window.location.protocol}//${window.location.host}`;
let iframeUrl = '/editor.html';

// 如果在 gh-pages 里面
if (/^\/amis-editor-demo/.test(window.location.pathname)) {
  host += '/amis-editor';
  iframeUrl = '/amis-editor-demo' + iframeUrl;
}

const schemaUrl = `${host}/schema.json`;

const editorLanguages = [
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en-US'
  }
];

// __uri('amis/schema.json');

export default inject('store')(
  observer(function ({
    store,
    location,
    history,
    match
  }: any): any {
    const index: number = parseInt(match.params.id, 10);
    const curLanguage = currentLocale(); // 获取当前语料类型

    if (index !== currentIndex) {
      currentIndex = index;
      store.updateSchema(store.pages[index].schema);
    }

    function save() {
      store.updatePageSchemaAt(index);
      toast.success('保存成功', '提示');
    }

    function onChange(value: any) {
      store.updateSchema(value);
      store.updatePageSchemaAt(index);
    }

    function changeLocale(value: string) {
      localStorage.setItem('suda-i18n-locale', value);
      window.location.reload();
    }

    function exit() {
      history.push(`/${store.pages[index].path}`);
    }

    return (


      <div className="Editor-Demo">

        <div className="Editor-header">
          <div className="Editor-title">amis 可视化编辑器</div>
          <div className="Editor-view-mode-group-container">
            <div className="Editor-view-mode-group">
              <div
                className={`Editor-view-mode-btn editor-header-icon ${!store.isMobile ? 'is-active' : ''
                  }`}
                onClick={() => {
                  store.setIsMobile(false);
                }}
              >
                {/* <Icon icon="PCPreview" title="PC模式" /> */}
                <img src="/img/pc-preview.svg" alt="" />
              </div>
              <div
                className={`Editor-view-mode-btn editor-header-icon ${store.isMobile ? 'is-active' : ''
                  }`}
                onClick={() => {
                  store.setIsMobile(true);
                }}
              >
                {/* <Icon icon="h5-preview" title="移动模式" /> */}
                <img src="/img/h5-preview.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="Editor-inner">
            {/*  @ts-ignore   */}
            <Editor
              theme={'cxd'}
              preview={store.preview}
              isMobile={store.isMobile}
              value={store.schema}
              onChange={onChange}
              onPreview={() => {
                store.setPreview(true);
              }}
              onSave={save}
              className="is-fixed"
              $schemaUrl={schemaUrl}
              iframeUrl={iframeUrl}
              showCustomRenderersPanel={true}
              amisEnv={{
                fetcher: store.fetcher,
                notify: store.notify,
                alert: store.alert,
                copy: store.copy,
              }}
            />
          </div>



        </div>






      </div>
    );
  })
);
