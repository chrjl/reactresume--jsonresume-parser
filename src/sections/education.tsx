import { ResumeEntry, JSONResumeEntry } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function education(data: JSONResumeEntry.Education[]): ResumeEntry[] {
  return data.map(({ institution, area, studyType, endDate }) => ({
    title: institution,
    description: (
      <HorizontalUList items={[studyType + ` (${endDate})`, area]} />
    ),
  }));
}
