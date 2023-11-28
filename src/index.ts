import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import {
  skills,
  languages,
  education,
  certificates,
  projects,
  work,
} from './sections';

export default function parser(jsonresume: JSONResumeObject): ResumeObject {
  const resumeObject = {
    skills: jsonresume.skills ? skills(jsonresume.skills) : null,
    languages: jsonresume.languages ? languages(jsonresume.languages) : null,
    education: jsonresume.education ? education(jsonresume.education) : null,
    certificates: jsonresume.certificates
      ? certificates(jsonresume.certificates)
      : null,
    projects: jsonresume.projects ? projects(jsonresume.projects) : null,
    work: jsonresume.work ? work(jsonresume.work) : null,
    experience: jsonresume.experience ? work(jsonresume.experience) : null,
  };

  return Object.fromEntries(
    Object.entries(resumeObject).filter(([_, value]) => value !== null)
  );
}
