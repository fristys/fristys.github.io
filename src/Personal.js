import React from 'react';
import styled from 'styled-components';

const PersonalContainer = styled.section`
  color: ${props => props.theme.personal.color};

  @media print {
    color: ${props => props.theme.personalPrint.color};
  }
`;

const PersonalFlex = styled.div`
  display: flex;
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

const PersonalInformation = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-basis: calc(50% - .5rem);
    margin-right: 1rem;
    text-align: initial;

    &:last-child {
      margin-right: 0;
    }
  }

  @media print and (min-width: 468px) {
    flex-basis: calc(50% - .5rem);
    margin-right: 1rem;
    text-align: initial;

    &:last-child {
      margin-right: 0;
    }
  }

  h3 {
    font-size: 1.35rem;
    margin: 1rem;

    @media (min-width: 768px) {
      margin: 1rem 0;
    }

    @media print and (min-width: 468px) {
      margin: 1rem 0;
    }
  }
`;

const PersonalInformationFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media print and (min-width: 468px) {
    flex-direction: row;
  }
`;

const PersonalPhoto = styled.div`
  @media (min-width: 768px) {
    margin-right: 1rem;
  }

  @media print and (min-width: 468px) {
    margin-right: 1rem;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: .5rem;
    padding: .2rem;
    border: 2px solid rgba(0,0,0,.25);

    @media print {
      width: 150px;
      height: 150px;
      padding: 0;
      border-radius: 0;
      border: none;
      filter: grayscale(100);
    }
  }
`;

const PersonalInformationRows = styled.div`
  flex: 1;
`;

const PersonalInformationRow = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media print and (min-width: 468px) {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PersonalInformationRowTitle = styled.div`
  font-weight: 600;
  color: ${props => props.theme.personal.rowtitle};

  @media print {
    color: ${props => props.theme.personalPrint.rowtitle};
  }
`;

function Personal({ metadata }) {
  return (
    <PersonalContainer>
      <PersonalFlex>
        <PersonalInformation>
          <h3>Personal information</h3>

          <PersonalInformationFlex>
            <PersonalPhoto>
              <img src="photo.jpg" alt={metadata.name} />
            </PersonalPhoto>

            <PersonalInformationRows>
              <PersonalInformationRow>
                <PersonalInformationRowTitle>Address</PersonalInformationRowTitle>
                {metadata.address}
              </PersonalInformationRow>

              <PersonalInformationRow>
                <PersonalInformationRowTitle>Date of birth</PersonalInformationRowTitle>
                {metadata.birthday}
              </PersonalInformationRow>

              <PersonalInformationRow>
                <PersonalInformationRowTitle>Nationality</PersonalInformationRowTitle>
                {metadata.nationality}
              </PersonalInformationRow>

              <PersonalInformationRow>
                <PersonalInformationRowTitle>Spoken languages</PersonalInformationRowTitle>
                {metadata.languages.join(', ')}
              </PersonalInformationRow>
            </PersonalInformationRows>
          </PersonalInformationFlex>
        </PersonalInformation>

        <PersonalInformation>
          <h3>Education</h3>

          <PersonalInformationRows>
            {
              metadata.education.map((institution, i) => (
                <PersonalInformationRow key={i}>
                  <PersonalInformationRowTitle>{institution.period}</PersonalInformationRowTitle>
                  {institution.name}
                </PersonalInformationRow>
              ))
            }
          </PersonalInformationRows>
        </PersonalInformation>
      </PersonalFlex>
    </PersonalContainer>
  );
}

export default Personal;
