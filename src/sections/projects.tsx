import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['projects']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return data.map(
    ({ name, keywords = [], url = '', description = '', highlights = [] }) => ({
      title: [name],
      subtitle: keywords,
      note: Array.isArray(url) ? url : [url],
      description: [description],
      highlights,
    })
  );
}
