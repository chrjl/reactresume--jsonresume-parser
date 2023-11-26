import { ResumeEntry, JSONResume } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function education(data: JSONResume.Education[]): ResumeEntry[] {
  return data.map(({ institution, area, studyType, endDate }) => ({
    title: institution,
    description: (
      <HorizontalUList items={[studyType + ` (${endDate})`, area]} />
    ),
  }));
}
