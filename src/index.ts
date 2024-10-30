import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import {
  parseBasics,
  parseSkills,
  parseLanguages,
  parseEducation,
  parseProjects,
  parseWork,
  parseCertificates,
} from './sections';

export default function (jsonresume: JSONResumeObject): ResumeObject {
  return {
    basics: parseBasics(jsonresume.basics),
    skills: parseSkills(jsonresume.skills),
    languages: parseLanguages(jsonresume.languages),
    education: parseEducation(jsonresume.education),
    projects: parseProjects(jsonresume.projects),
    work: parseWork(jsonresume.work),
    certificates: parseCertificates(jsonresume.certificates),
  };
}
