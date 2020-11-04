import config from '~/config'

export function generateTitle(...titleSegments: string[]): string {
  titleSegments.push(config.name)
  return titleSegments.filter((t) => t).join(' · ')
}
