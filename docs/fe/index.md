# Frontend Onboarding

## Development Process

### Git

- Version Control Repository Management: Bitbucket
- Branch naming: `<JIRA Ticket ID>-<title/discription/subject/feature>`
    - Example:
        - AR-8108-implement-encryption-feature
        - AR-8112-create-get-people-api

#### Git-Flow
![gitflow](/assets/git-flow.jpg)

- Branches
    - `master`:
        - main branch of the project
        - updates is only done if `stage` branch is stable
        - can only be updated by the `dev lead`
    - `stage`:
        - main development branch
        - this is where the `dev` branches are pulled and merged
    - `dev`:
        - development branch for each developers
        - `dev` branch should follow the branch naming convention

### Development Cycle

![gitflow](/assets/dev-cycle.jpg)

1. Analyze
    - Identify big anxieties
    - Breakdown big anxieties into smaller anxieties
    - Inputs might come from the following:
        - Mock-up Design
        - Functional Specs
        - RTM (Requrements Traceablitiy Matrix)
        - Task Ticket
1. Design | Document | Implement | Test
    - All of these stages overlap each other during development
    - During this period, the goal is to smash each small anxiety until the big anxiety are completed
    - Activities on these stages might include the following:
        - Create components or reuse if existing
        - Design and document components
        - Test source code and make sure lines are covered
        - Commit updates regularly
1. Review
    - Activities includes:
        - Create a pull request (PR) for review
        - Address review comments if any
        - Run regression test

## Environment

## Tech Stack

## Tools