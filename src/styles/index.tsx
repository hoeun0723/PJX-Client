import { ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';

interface StylesProps {
  children: ReactNode;
}

const Styles = ({ children }: StylesProps) => {
  return(
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Styles;