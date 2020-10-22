const appName = process.env.APP_NAME || '';
console.log('appName=', appName)
export function generateTitle(...titleSegments: string[]): string {
  if (appName) {
    titleSegments.push(appName)
  }
  return titleSegments.filter((t) => t).join(' · ')
}
