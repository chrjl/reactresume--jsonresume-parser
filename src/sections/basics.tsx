import { JSONResumeEntry, ResumeEntry } from '@reactresume/types';
import { HorizontalUList } from '@reactresume/components';

export default function basics(data: JSONResumeEntry.Basics): ResumeEntry {
  const { name, label, email, phone, url, profiles, location } = data;
  const { city, region, countryCode } = location;

  const details = {
    email: <a href={`mailto:${email}`}>{email}</a>,
    phone,
    url: url && (
      <a href={url} target="_blank">
        {url}
      </a>
    ),
    profiles: profiles
      ? profiles
          .filter((profile) => profile._display !== false)
          .map(
            ({ url }) =>
              url && (
                <a href={url} target="_blank">
                  {url}
                </a>
              )
          )
      : [],
    location: [city, region, countryCode].filter(Boolean).join(', '),
  };

  const descriptionItems = [
    details.email,
    details.phone,
    details.url,
    ...details.profiles,
  ];

  return {
    title: name,
    subtitle: label,
    description: (
      <>
        <div>
          <HorizontalUList items={descriptionItems} />
        </div>
        <div>{details.location}</div>
      </>
    ),
  };
}
