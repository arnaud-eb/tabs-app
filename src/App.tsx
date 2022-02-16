import * as React from "react";
import styled from "styled-components";

import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

export type JobType = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}[];

const AppWrapper = styled.main`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const Loading = styled.h1`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  h2 {
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    bottom: -100%;
    right: calc(50% - 5rem / 2);
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
  }
`;

const JobsContainer = styled.section`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  display: block;
  width: 12rem;
  text-align: center;
  margin: 3rem auto 0;

  :hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
`;

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [jobs, setJobs] = React.useState([] as JobType);
  const [index, setIndex] = React.useState(0);
  const job = jobs[index] && jobs[index];

  const fetchJob = async () => {
    setLoading(true);
    setJobs([]);
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchJob();
  }, []);

  return (
    <AppWrapper>
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <React.Fragment>
          <Title>
            <h2>experience</h2>
          </Title>
          <JobsContainer>
            <BtnContainer jobs={jobs} index={index} setIndex={setIndex} />
            {job && <JobInfo job={job} />}
          </JobsContainer>
          <Button>more info</Button>
        </React.Fragment>
      )}
    </AppWrapper>
  );
};

export default App;
