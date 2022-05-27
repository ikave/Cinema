import { HOUR } from '../const';

export function createMarkup<T>(text: T): { __html: T } {
  return { __html: text };
}

export function formatTime(number: number): string {
  if (number < 60) {
    return `0h ${number}m`;
  }

  return `${Math.floor(number / HOUR)}h ${number % HOUR}m`;
}
