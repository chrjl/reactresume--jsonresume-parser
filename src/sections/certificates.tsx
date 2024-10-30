import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['certificates']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return data.map(({ name, date = '', issuer = '' }) => ({
    title: name,
    description: [issuer, date],
  }));
}
