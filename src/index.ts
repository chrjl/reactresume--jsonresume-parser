import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import {
  skills,
  languages,
  education,
  certificates,
  projects,
} from './sections';

export default function parser(jsonresume: JSONResumeObject): ResumeObject {
  return {
    skills: jsonresume.skills ? skills(jsonresume.skills) : null,
    languages: jsonresume.languages ? languages(jsonresume.languages) : null,
    education: jsonresume.education ? education(jsonresume.education) : null,
    certificates: jsonresume.certificates
      ? certificates(jsonresume.certificates)
      : null,
    projects: jsonresume.projects ? projects(jsonresume.projects) : null,
  };
}
