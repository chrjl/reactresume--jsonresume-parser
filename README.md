# @reactresume/jsonresume-parser

Parses a [JSON Resume](https://jsonresume.org/schema) object (`JSONResumeObject` type) into a standardized form (`ResumeObject` type) for use in [React Resume](https://github.com/chrjl/reactresume).

See [`@reactresume/types`](https://github.com/chrjl/reactresume--types) for detailed type definitions.

## Included sections

- [x] Basics
- [x] Skills
- [x] Languages
- [x] Education
- [x] Certificates
- [x] Projects
- [x] Work
- [ ] Interests
- [ ] Volunteer
- [ ] Awards
- [ ] Publications
- [ ] Interests

Each section is an array of `ResumeEntry` objects.

## `ResumeEntry` type

Standardized objects for entry into a React component library that includes the following fields, all of which are arrays of strings (`string[]`)

- title
- subtitle
- note
- description
- highlights
