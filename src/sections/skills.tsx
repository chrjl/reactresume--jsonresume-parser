import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResumeEntry } from '@reactresume/types';

export default function skills(data: JSONResumeEntry.Skill[]): ResumeEntry[] {
  return data.map(({ name, keywords }) => ({
    title: name,
    description: <Markdown>{keywords?.join(', ')}</Markdown>,
  }));
}
