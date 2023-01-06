/**
 * @file entry of this example.
 */
import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import "./css/style.less";


export function bootstrap(mountTo: HTMLElement) {
  ReactDom.render(<App /> as any, mountTo);

}
