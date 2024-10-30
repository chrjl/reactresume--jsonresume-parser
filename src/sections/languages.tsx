import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['languages']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return [
    {
      title: ['languages'],
      description: data.map(
        ({ language, fluency }) => language + (fluency ? ` (${fluency})` : '')
      ),
    },
  ];
}
