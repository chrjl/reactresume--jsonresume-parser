import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import * as parsers from './sections';

export default function (jsonresume: JSONResumeObject): ResumeObject {
  const { basics, ...sections } = jsonresume;

  const parsed = Object.fromEntries(
    Object.entries(parsers)
      .map(([section, parser]) => [
        section,
        section in sections
          ? parser(
              jsonresume[section].filter(({ _display }) => _display !== false)
            )
          : null,
      ])
      .filter(([_, value]) => value !== null)
  );

  return { basics: basics && parsers.basics(basics), ...parsed };
}
