import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResume } from '@reactresume/types';

export default function skills(data: JSONResume.Skill[]): ResumeEntry[] {
  return data.map(({ name, keywords }) => ({
    title: name,
    description: <Markdown>{keywords?.join(', ')}</Markdown>,
  }));
}
