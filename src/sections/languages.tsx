import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResumeEntry } from '@reactresume/types';

export default function languages(data: JSONResumeEntry.Language[]): ResumeEntry[] {
  const keywords = data.map(
    ({ language, fluency }) => language + (fluency ? ` *(${fluency})*` : '')
  );

  return [
    {
      title: 'languages',
      description: <Markdown>{keywords?.join(', ')}</Markdown>,
    },
  ];
}
