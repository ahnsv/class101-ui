import React from 'react';
import styled, { css } from 'styled-components';

import { gray500 } from '../../Colors';

const smallStyle = css`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const largeStyle = css`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

interface RadioIconProps {
  checked?: boolean;
  size: 'lg' | 'md';
  color?: string;
}

const RadioIcon = styled.div<RadioIconProps>`
  display: inline-flex;
  flex: none;
  border: 2px solid ${gray500};
  border-radius: 50%;
  box-sizing: border-box;

  ${props => {
    if (props.size === 'lg') {
      return largeStyle;
    }
    if (props.size === 'md') {
      return smallStyle;
    }
  }};

  ${props =>
    props.checked
      ? css<RadioIconProps>`
          border-color: ${props => props.color || gray500};
          border-width: 4px;
        `
      : ''};
`;

export default (props: RadioIconProps) => <RadioIcon {...props} />;
