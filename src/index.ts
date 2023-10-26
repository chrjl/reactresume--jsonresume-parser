import * as parsers from './sections.js';

export default function parser(jsonresume) {
  const { skills, languages } = jsonresume;

  return {
    skills: parsers.skills(skills),
    languages: parsers.languages(languages),
  };
}
