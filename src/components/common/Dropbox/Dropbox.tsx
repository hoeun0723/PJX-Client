import { emailDomains } from '../../../utils/emailDomains';
import * as S from './Dropbox.style';
import React from 'react';

interface DropboxProps {
  onClick: (newDomain: string) => void;
}

function Dropbox ({ onClick }: DropboxProps){
  const domainValues = emailDomains;

  return(
    <S.DropboxWrapper>
      {
        domainValues.map((domainValue) => (
          <S.DropboxItemBox 
            key={domainValue}
            onClick={() => onClick(domainValue)}  
          >
            {domainValue}
          </S.DropboxItemBox>
        ))
      }
    </S.DropboxWrapper>
  );
};

export default Dropbox;