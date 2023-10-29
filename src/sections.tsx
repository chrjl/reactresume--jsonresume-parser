import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry } from '@reactresume/types';

export default {
  skills(data: JSONResumeSkill[]): ResumeEntry[] {
    return data.map(({ name, keywords }) => ({
      title: name,
      description: <Markdown>{keywords?.join(', ')}</Markdown>,
    }));
  },

  languages(data: JSONResumeLanguage[]): ResumeEntry[] {
    const keywords = data.map(
      ({ language, fluency }) => `${language} *(${fluency})*`
    );

    return [
      {
        title: 'languages',
        description: <Markdown>{keywords?.join(', ')}</Markdown>,
      },
    ];
  },
};

export interface JSONResumeObject {
  skills?: JSONResumeSkill[];
  languages?: JSONResumeLanguage[];
}

interface JSONResumeSkill {
  name: string;
  keywords?: string[];
}

interface JSONResumeLanguage {
  language: string;
  fluency?: string;
}
