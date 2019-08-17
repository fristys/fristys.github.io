import styled from 'styled-components';

export default styled.hr`
  display: block;
  margin: 1rem 0;
  width: 100%;
  border: 0;
  height: .1rem;
  background: rgba(0,0,0,.05);

  @media (min-width: 768px) {
    width: 80%;
    margin: 1rem auto;
  }

  @media print {
    display: none;
  }
`;
