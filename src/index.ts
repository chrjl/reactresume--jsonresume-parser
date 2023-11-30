import { ResumeObject, JSONResumeObject } from '@reactresume/types';

import * as parsers from './sections';

export default function (jsonresume: JSONResumeObject): ResumeObject {
  const { basics } = jsonresume;
  const sections = Object.entries(parsers).reduce(
    (acc, [section, parser]) =>
      section in jsonresume
        ? {
            ...acc,
            [section]: parser(
              jsonresume[section].filter(({ _display }) => _display !== false)
            ),
          }
        : acc,
    {}
  );

  return { basics, ...sections };
}
