import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import parsers from './sections';

export default function parser(jsonresume: JSONResumeObject): ResumeObject {
  const { skills, languages } = jsonresume;

  return {
    skills: skills ? parsers.skills(skills) : null,
    languages: languages ? parsers.languages(languages) : null,
  };
}
