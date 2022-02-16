import * as React from "react";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

import { JobType } from "./App";

interface JobInfoProps {
  job: JobType[number];
}

const JobInfoWrapper = styled.div`
  h3 {
    font-weight: 400;
  }
  h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
`;

const JobDate = styled.p`
  letter-spacing: var(--spacing);
`;

const JobDesc = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
`;

const Icon = styled(FaAngleDoubleRight)`
  color: var(--clr-primary-5);
`;

function JobInfo({ job }: JobInfoProps) {
  return (
    <JobInfoWrapper>
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <JobDate>{job.dates}</JobDate>
      {job.duties.map((duty, index) => {
        return (
          <JobDesc key={index}>
            <Icon />
            <p>{duty}</p>
          </JobDesc>
        );
      })}
    </JobInfoWrapper>
  );
}

export default JobInfo;
