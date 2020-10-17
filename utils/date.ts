import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn') // 全局使用
dayjs.extend(relativeTime)

export const fromNow = (time: string) => dayjs(time).fromNow()
