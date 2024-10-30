import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(data: JSONResumeObject['work']): ResumeEntry[] {
  if (!data) {
    return [];
  }

  return data.map(
    ({
      position,
      summary = '',
      highlights = [],
      name,
      location,
      department = '',
      startDate,
      endDate,
    }) => ({
      title: position,
      subtitle: [
        name + (location ? ` (${location})` : ''),
        department,
        (startDate ? `${startDate} to ` : '') + (endDate || 'present'),
      ],
      description: [summary],
      highlights: highlights,
    })
  );
}
