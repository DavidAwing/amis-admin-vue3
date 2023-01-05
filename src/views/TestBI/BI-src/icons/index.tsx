/* eslint @typescript-eslint/no-var-requires: "off" */

/**
 * @file 内置 svg 图标
 */

import React, { useRef } from 'react'
import { Icon, registerIcon } from 'amis';

// @ts-ignore
import PCPreview from '../../../../assets/img/pc-preview.svg';
// @ts-ignore
import H5Preview from '../../../../assets/img/h5-preview.svg';


// @ts-ignore
registerIcon('pc-preview', PCPreview);
// @ts-ignore
registerIcon('h5-preview', H5Preview);

export { Icon, PCPreview, H5Preview };
