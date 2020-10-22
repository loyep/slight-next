import config from '@/config'

export function generateTitle(...titleSegments: string[]): string {
  if (process.env.APP_NAME || '') {
    titleSegments.push(process.env.APP_NAME || '')
  }
  return titleSegments.filter((t) => t).join(' · ')
}
