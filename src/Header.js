import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  padding: 1.5rem 0;

  @media print {
    padding: .75rem 0;
    background: ${props => props.theme.headerPrint.background};
    color: ${props => props.theme.headerPrint.color};
  }
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }

  @media print {
    width: 95%;
  }

  @media print and (min-width: 468px) {
    flex-direction: row;
    margin: 0 auto;
  }
`;

const HeaderTitles = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: .1rem .1rem .1rem ${props => props.theme.header.titleBorder};

  @media print {
    text-shadow: none;
  }

  @media (min-width: 768px) {
    text-align: initial;
    margin-bottom: 0;
  }

  @media print and (min-width: 468px) {
    text-align: initial;
    margin-bottom: 0;
  }

  h1, h2 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 1rem;
    margin-bottom: .5rem;
    border-bottom: 1px solid ${props => props.theme.header.titleBorder};

    @media print {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.header.subtitle};

    @media print {
      color: ${props => props.theme.headerPrint.subtitle};
    }
  }
`;

const HeaderInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex: 1;
    text-align: right;
  }

  @media print and (min-width: 468px) {
    flex: 1;
    text-align: right;
  }
`;

const HeaderInfoRow = styled.div`
  margin: .5rem 0;

  @media (min-width: 768px) {
    margin: .25rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a, a:visited {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.header.link};
    text-decoration: none;
    transition: color .25s;

    @media print {
      color: ${props => props.theme.headerPrint.link};

      &:hover {
        color: ${props => props.theme.headerPrint.link};
      }
    }

    &:hover {
      color: ${props => props.theme.header.linkHover};
    }
  }
`;

const HeaderActions = styled.div`
  @media print {
    display: none;
  }

  button {
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-right: 1rem;

    @media (min-width: 768px) {
      margin-top: .5rem;
      width: 1.15rem;
      height: 1.15rem;
    }

    @media print and (min-width: 468px) {
      margin-top: .5rem;
      width: 1.15rem;
      height: 1.15rem;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 1.75rem;
      opacity: .5;
      transition: opacity .25s;

      @media (min-width: 768px) {
        height: 1.15rem;
      }

      @media print and (min-width: 468px) {
        height: 1.15rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;

function Header({ metadata }) {
  function goToLinkedIn() {
    window.open(metadata.linkedIn);
  }

  function printPage() {
    window.print();
  }

  return (
    <HeaderContainer>
      <HeaderFlex>
        <HeaderTitles>
          <h1>{metadata.name}</h1>
          <h2>{metadata.occupation}</h2>
        </HeaderTitles>

        <HeaderInfo>
          <HeaderInfoRow>
            <a href={`mailto:${metadata.email}`} rel="nofollow">{metadata.email}</a>
          </HeaderInfoRow>

          <HeaderInfoRow>
            <a href={metadata.website.url} target="_blank" rel="noopener noreferrer">{metadata.website.label}</a>
          </HeaderInfoRow>

          <HeaderInfoRow>
            <a href={`tel:${metadata.phone}`} rel="nofollow">{metadata.phone}</a>
          </HeaderInfoRow>

          <HeaderActions>
            <button onClick={goToLinkedIn}>
              <img src="linkedin-logo.svg" alt="My LinkedIn profile" />
            </button>

            <button onClick={printPage}>
              <img src="print.svg" alt="Print my CV" />
            </button>
          </HeaderActions>
        </HeaderInfo>
      </HeaderFlex>
    </HeaderContainer>
  );
}

export default Header;
