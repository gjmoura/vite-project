import { ReactNode } from 'react';
import { TypographyH1 } from './styles';

interface TypographyH1Props {
  children: ReactNode;
}

export const H1 = ({ children }: TypographyH1Props) => {
  return <TypographyH1>{children}</TypographyH1>;
};
