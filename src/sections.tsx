import React from 'react';
import Markdown from 'react-markdown';

export default {
  skills(data: JSONResumeSkill[]): ResumeEntry[] {
    return data.map(({ name, keywords }) => ({
      title: name,
      description: <Markdown>{keywords?.join(', ')}</Markdown>,
    }));
  },

  languages(data: JSONResumeLanguage[]): ResumeEntry {
    const keywords = data.map(
      ({ language, fluency }) => `${language} *(${fluency})*`
    );

    return {
      title: 'languages',
      description: <Markdown>{keywords?.join(', ')}</Markdown>,
    };
  },
};

export interface ResumeEntry {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  keywords?: React.ReactNode;
  description?: React.ReactNode;
  highlights?: React.ReactNode;
}

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
