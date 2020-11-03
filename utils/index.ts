import config from '@/config'

export function generateTitle(...titleSegments: string[]): string {
  titleSegments.push(config.title)
  return titleSegments.filter((t) => t).join(' · ')
}
