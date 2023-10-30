import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResume } from '@reactresume/types';

export default {
  skills(data: JSONResume.Skill[]): ResumeEntry[] {
    return data.map(({ name, keywords }) => ({
      title: name,
      description: <Markdown>{keywords?.join(', ')}</Markdown>,
    }));
  },

  languages(data: JSONResume.Language[]): ResumeEntry[] {
    const keywords = data.map(
      ({ language, fluency }) => language + (fluency ? ` *(${fluency})*` : '')
    );

    return [
      {
        title: 'languages',
        description: <Markdown>{keywords?.join(', ')}</Markdown>,
      },
    ];
  },
};
