import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import { skills, languages } from './sections';

export default function parser(jsonresume: JSONResumeObject): ResumeObject {
  return {
    skills: jsonresume.skills ? skills(jsonresume.skills) : null,
    languages: jsonresume.languages ? languages(jsonresume.languages) : null,
  };
}
