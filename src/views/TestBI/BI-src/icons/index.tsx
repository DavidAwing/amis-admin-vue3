/* eslint @typescript-eslint/no-var-requires: "off" */

/**
 * @file 内置 svg 图标
 */

import React, { useRef } from 'react'
import { Icon, registerIcon } from 'amis';

import PCPreview from './pc-preview'; // '../../../../assets/img/pc-preview.svg'
import H5Preview from './h5-preview';

registerIcon('pc-preview', PCPreview as any);
registerIcon('h5-preview', H5Preview as any);

export { Icon, PCPreview, H5Preview };
