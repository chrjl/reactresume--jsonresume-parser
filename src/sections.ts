export function skills(data) {
  return data
    ? data.map((skill) => ({
        title: skill.name,
        keywords: skill.keywords,
      }))
    : null;
}

export function languages(data) {
  const keywords = data?.map(
    ({ language, fluency }) => `${language} *(${fluency})*`
  );

  return data
    ? {
        title: 'languages',
        keywords,
      }
    : null;
}

export interface ResumeEntry {
  title: string;
  subtitle?: string;
  keywords?: string[];
  description?: string;
  highlights?: string[];
}
