import * as React from "react";
import styled from "styled-components";

import { JobType } from "./App";

interface BtnJobProps {
  index: number;
  idx: number;
}

interface BtnContainerProps {
  jobs: JobType;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BtnContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const BtnJob = styled.button<BtnJobProps>`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  outline-color: var(--clr-primary-10);

  :hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  ${(p) =>
    p.index === p.idx &&
    `
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
    
  `}

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    :hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }

    ${(p) =>
      p.index === p.idx &&
      `    
    box-shadow: -2px 0 var(--clr-primary-5);
  `}
  }
`;

function BtnContainer({ jobs, index, setIndex }: BtnContainerProps) {
  return (
    <BtnContainerWrapper>
      {jobs.map((job, idx) => (
        <BtnJob
          key={job.id}
          idx={idx}
          index={index}
          onClick={() => {
            setIndex(idx);
          }}
        >
          {job.company}
        </BtnJob>
      ))}
    </BtnContainerWrapper>
  );
}

export default BtnContainer;
