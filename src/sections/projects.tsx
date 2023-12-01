import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResumeEntry } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function projects(
  data: JSONResumeEntry.Project[]
): ResumeEntry[] {
  return data.map(({ name, keywords, url, description, highlights }) => ({
    title: name,
    subtitle: keywords ? (
      <HorizontalUList items={keywords} align="right" />
    ) : null,
    note: url ? (
      Array.isArray(url) ? (
        <ul>
          {url.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank">
                {link}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <a href={url} target="_blank">
          {url}
        </a>
      )
    ) : null,
    description: description ? <Markdown children={description} /> : null,
    highlights: highlights ? (
      <ul>
        {highlights?.map((highlight, index) => (
          <li key={index}>
            <Markdown children={highlight} />
          </li>
        ))}
      </ul>
    ) : null,
  }));
}
