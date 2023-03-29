import { ReactNode } from 'react';
import { TypographySubtitle1 } from './styles';

interface TypographyH1Props {
  children: ReactNode;
}

export const Subtitle1 = ({ children }: TypographyH1Props) => {
  return <TypographySubtitle1>{children}</TypographySubtitle1>;
};
