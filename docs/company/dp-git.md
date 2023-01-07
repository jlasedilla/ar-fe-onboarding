# Git

- Version Control Repository Management: Bitbucket
- Branch naming: `<JIRA Ticket ID>-<title/discription/subject/feature>`
    - Example:
        - AR-8108-implement-encryption-feature
        - AR-8112-create-get-people-api

## Git-Flow
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
