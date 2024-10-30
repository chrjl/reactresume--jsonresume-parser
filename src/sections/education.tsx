import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['education']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return data.map(({ institution, area, studyType, endDate }) => ({
    title: [institution],
    description: [`${studyType} (${endDate || 'in progress'})`, area],
  }));
}
