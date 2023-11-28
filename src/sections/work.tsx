import React from 'react';
import Markdown from 'react-markdown';

import { ResumeEntry, JSONResume } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function work(data: JSONResume.Work[]): ResumeEntry[] {
  return data.map(
    ({
      position,
      summary,
      highlights,
      name,
      location,
      department,
      startDate,
      endDate,
    }) => ({
      title: position,
      subtitle: subtitle(name, department, location, startDate, endDate),
      description: summary ? <Markdown children={summary} /> : null,
      highlights: highlights ? (
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      ) : null,
    })
  );

  function subtitle(
    name: string,
    department: string | undefined,
    location: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
  ) {
    const dateStr = (startDate && `${startDate} to ` + endDate) || null;
    const nameStr = name && (
      <>
        {name}
        {location && <em> ({location})</em>}
      </>
    );

    const items = [nameStr, department, dateStr].filter(Boolean);
    return items.length ? <HorizontalUList items={items} /> : null;
  }
}