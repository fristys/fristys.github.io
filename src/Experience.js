import React, { Fragment } from 'react';
import styled from 'styled-components';

import SectionDivider from './SectionDivider';

const ExperienceContainer = styled.section`
  color: ${props => props.theme.experience.color};

  @media print {
    color: ${props => props.theme.experiencePrint.color};
  }
`;

const ExperienceFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex-wrap: ${props => (props.full ? 'wrap' : 'initial')};

  @media (min-width: 768px) {
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    width: ${props => (props.full ? '100%' : '80%')};
    margin: 0 auto;
  }

  @media print and (min-width: 468px) {
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    margin: 0 auto;
  }

  @media print {
    width: ${props => (props.full ? '100%' : '95%')};
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

const ExperiencePosition = styled.div`
  flex-basis: ${props => (props.basis ? '100%' : 'initial')};
  margin: ${props => (props.nosidemargin ? '0' : '0 1rem')};
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 1.25rem;
    flex-basis: ${props => (props.basis ? 'calc(50% - .5rem)' : 'initial')};
    margin-right: ${props => (props.basis ? '1rem' : 'initial')};

    &:nth-child(2n) {
      margin-right: ${props => (props.basis ? '0' : 'initial')};
    }
  }

  @media print and (min-width: 468px) {
    margin: 0;
    margin-bottom: 1.25rem;
    flex-basis: ${props => (props.basis ? 'calc(50% - .5rem)' : 'initial')};
    margin-right: ${props => (props.basis ? '1rem' : 'initial')};

    &:nth-child(2n) {
      margin-right: ${props => (props.basis ? '0' : 'initial')};
    }
  }
`;

const ExperiencePositionTitle = styled.div`
  font-weight: 600;
  color: ${props => props.theme.experience.rowtitle};
  margin-bottom: .5rem;

  @media (min-width: 768px) {
    font-size: .975rem;
  }

  @media print and (min-width: 468px) {
    font-size: .975rem;
  }

  @media print {
    color: ${props => props.theme.experiencePrint.rowtitle};
  }

  a, a:visited {
    color: ${props => props.theme.experience.rowtitle};
    text-decoration: none;

    @media print {
      color: ${props => props.theme.experiencePrint.rowtitle};
    }
  }

  span {
    display: block;
    font-size: .95rem;
    color: ${props => props.theme.experience.rowtitleAlt};

    @media (min-width: 768px) {
      display: initial;
      font-size: initial;

      &::before {
        content: ' - ';
      }
    }
  }
`;

function Experience({ metadata }) {
  return (
    <ExperienceContainer>
      <ExperienceFlex>
        <h3>Professional Work</h3>

        {
          metadata.experience.professional.map((position, i) => (
            <ExperiencePosition key={i}>
              <ExperiencePositionTitle>
                {
                  (
                    position.link ? (
                      <a href={position.link} target="_blank" rel="noopener noreferrer">
                        {position.name} <span>{position.position} {position.period ? `(${position.period})` : ''}</span>
                      </a>
                      ) : (
                        <Fragment>
                          {position.name} <span>{position.position} {position.period ? `(${position.period})` : ''}</span>
                        </Fragment>
                      )
                  )
                }
              </ExperiencePositionTitle>

              {position.description}
            </ExperiencePosition>
          ))
        }
      </ExperienceFlex>

      <ExperienceFlex>
        <h3>Freelance Work</h3>

        <ExperienceFlex row full>
          {
            metadata.experience.freelance.map((position, i) => (
              <ExperiencePosition basis key={i}>
                <ExperiencePositionTitle>
                  {
                    (
                      position.link ? (
                        <a href={position.link} target="_blank" rel="noopener noreferrer">
                          {position.name} <span>{position.position} {position.period ? `(${position.period})` : ''}</span>
                        </a>
                        ) : (
                          <Fragment>
                            {position.name} <span>{position.position} {position.period ? `(${position.period})` : ''}</span>
                          </Fragment>
                        )
                    )
                  }
                </ExperiencePositionTitle>

                {position.description}
              </ExperiencePosition>
            ))
          }
        </ExperienceFlex>
      </ExperienceFlex>

      <SectionDivider />

      <ExperienceFlex row>
          <ExperiencePosition basis nosidemargin>
            <ExperienceFlex full>
              <h3>Experience and skills</h3>

              <ExperiencePosition>
                <ExperiencePositionTitle>Excellent</ExperiencePositionTitle>
                {metadata.experience.skills.excellent.join(', ')}
              </ExperiencePosition>

              <ExperiencePosition>
                <ExperiencePositionTitle>Good</ExperiencePositionTitle>
                {metadata.experience.skills.good.join(', ')}
              </ExperiencePosition>

              <ExperiencePosition>
                <ExperiencePositionTitle>Average</ExperiencePositionTitle>
                {metadata.experience.skills.average.join(', ')}
              </ExperiencePosition>

              <ExperiencePosition>
                <ExperiencePositionTitle>Vague</ExperiencePositionTitle>
                {metadata.experience.skills.vague.join(', ')}
              </ExperiencePosition>
            </ExperienceFlex>
          </ExperiencePosition>

          <ExperiencePosition basis nosidemargin>
            <ExperienceFlex full>
              <h3>Notable Achievements</h3>

              {
                metadata.personal.achievements.map((achievement, i) => (
                  <ExperiencePosition key={i}>{achievement}</ExperiencePosition>
                ))
              }

              <h3>Interests</h3>

              <ExperiencePosition>
                {metadata.personal.interests.join(', ')}
              </ExperiencePosition>
            </ExperienceFlex>
          </ExperiencePosition>
      </ExperienceFlex>
    </ExperienceContainer>
  );
}

export default Experience;
