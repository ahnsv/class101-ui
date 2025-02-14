import * as React from 'react';
import styled from 'styled-components';

import { BadgeProps } from '../../Badge';
import { media } from '../../BreakPoints';
import { gray100 } from '../../Colors';
import { IconProps } from '../../Icon';
import { HTMLDivProps } from '../../interfaces/props';
import NavigationSection from './NavigationSection';

export interface NavigationSectionAction {
  onClick: () => any;
  icon: React.ReactElement<IconProps>;
}

export interface NavigationSectionSubItem {
  url: string;
  label: string;
  badge?: string | React.ReactElement<BadgeProps>;
}

export interface NavigationSectionItem {
  url?: string;
  label: string;
  onClick?: () => any;
  icon: React.ReactElement<IconProps>;
  badge?: string | React.ReactElement<BadgeProps>;
  subItems?: NavigationSectionSubItem[];
}

interface Props {
  pathname?: string;
  className?: string;
  divAttributes?: HTMLDivProps;
  onClickLink?: (url: string) => any;
}

const Divider = styled.hr`
  margin: -8px 0;
  border: 0;
  border-bottom: 1px solid ${gray100};
`;

export default class Navigation extends React.PureComponent<Props> {
  public static Section = NavigationSection;
  public static Divider = Divider;
  public static defaultProps: Partial<Props> = {
    pathname: '/',
  };

  public render() {
    const { children, pathname, divAttributes, className, onClickLink } = this.props;

    return (
      <Container {...divAttributes} className={className}>
        {React.Children.map(
          children,
          child => child && React.cloneElement(child as React.ReactElement<any>, { pathname, onClickLink })
        )}
      </Container>
    );
  }
}

const Container = styled.nav`
  background-color: white;
  padding: 1px 12px;
  ${media.sm`
    max-width: 100%;
  `}
  max-width: 240px;
`;
