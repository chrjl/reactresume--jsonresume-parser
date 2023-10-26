export default {
  skills(data: JSONResumeSkill[]): ResumeEntry[] {
    return data.map(({ name, keywords }) => ({
      title: name,
      keywords,
    }));
  },

  languages(data: JSONResumeLanguage[]): ResumeEntry {
    const keywords = data.map(
      ({ language, fluency }) => `${language} *(${fluency})*`
    );

    return {
      title: 'languages',
      keywords,
    };
  },
};

export interface ResumeEntry {
  title: string;
  subtitle?: string;
  keywords?: string[];
  description?: string;
  highlights?: string[];
}

interface JSONResumeSkill {
  name: string;
  keywords?: string[];
}

interface JSONResumeLanguage {
  language: string;
  fluency?: string;
}
