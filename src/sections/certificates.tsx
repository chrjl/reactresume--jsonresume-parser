import { ResumeEntry, JSONResumeEntry } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function certificates(
  data: JSONResumeEntry.Certificate[]
): ResumeEntry[] {
  return data.map(({ name, date, issuer }) => ({
    title: name,
    description: <HorizontalUList items={[issuer, date]} />,
  }));
}
