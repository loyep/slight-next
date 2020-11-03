import { useSelector } from 'react-redux'
import { RootState, ConfigState } from '@/store/types'
const { name } = useSelector<RootState, ConfigState>((state: RootState) => state.config)

export function generateTitle(...titleSegments: string[]): string {
  titleSegments.push(name)
  return titleSegments.filter((t) => t).join(' · ')
}
