import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['skills']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return data.map(({ name, keywords = [] }) => ({
    title: [name],
    description: keywords,
  }));
}
