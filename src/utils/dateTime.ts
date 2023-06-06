import { formatDuration, intervalToDuration } from 'date-fns';

/**
 * Converts a duration in seconds to a nice timestamp.
 *
 * @param seconds
 */
export const normalizeSeconds = (seconds: number) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  const zeroPad = (num: number) => String(num).padStart(2, '0');

  return formatDuration(duration, {
    format: ['hours', 'minutes', 'seconds'],
    zero: true,
    delimiter: ':',
    locale: {
      formatDistance: (_token, count) => zeroPad(count),
    },
  });
};
