import { Headline3 } from '@class101/ui';
import React from 'react';

import { CommonTypo, DisplayTypo } from './Typography';

type Props = CommonTypo & DisplayTypo;

export const Component = (props: Props) => <Headline3 {...props} />;
