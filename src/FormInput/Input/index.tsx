import { HTMLInputProps } from 'interfaces/props';
import React from 'react';
import styled from 'styled-components';

import { gray800, orange500, redError } from '../../Colors';
import { body2 } from '../../TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';
import InlineError, { Intent } from '../InlineError';

interface Props {
  size: InputSize;
  type: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  fill?: boolean;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const StyledInput = styled.input<Props>`
  ${body2};
  ${FormInputStyle};
  ${props => FormInputStyleBySize[props.size]};
  ${props => (props.fill ? FormInputFillStyle : null)};
  color: ${gray800};
  box-sizing: border-box;
  padding: 0 16px;
  &.error {
    border: solid 1px ${redError};
  }

  &.warn {
    border: solid 1px ${orange500};
  }
`;

const Container = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

export default class Input extends React.PureComponent<HTMLInputProps & Props> {
  public static defaultProps: Partial<Props> = {
    size: InputSize.md,
    fill: true,
    type: 'text',
  };

  public render() {
    const {
      type,
      className,
      style,
      inputStyle,
      inline,
      allowMessage,
      warnMessage,
      errorMessage,
      size,
      ...restProps
    } = this.props;

    return (
      <Container style={style} inline={inline}>
        <StyledInput
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          type={type}
          size={size}
          style={inputStyle}
          {...restProps}
        />
        {allowMessage && !errorMessage && (
          <InlineError icon={null} intent={Intent.DEFAULT}>
            {allowMessage}
          </InlineError>
        )}
        {errorMessage && <InlineError intent={Intent.DANGER}>{errorMessage}</InlineError>}
        {warnMessage && <InlineError intent={Intent.WARNING}>{warnMessage}</InlineError>}
      </Container>
    );
  }
}
