export interface ContentProps {
    content: any
    title: string
    description?: string
    htmlContent?: React.ReactNode | string
    related?: React.ReactNode
    social?: React.ReactNode
    breadcrumbs?: React.ReactNode
    navigator?: React.ReactNode
    onViewClick?: () => void
    onCommentClick?: () => void
    onLikeClick?: () => void
  }