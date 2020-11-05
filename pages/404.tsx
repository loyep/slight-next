import ErrorPage from '~/components/Errors/NotFound'

interface NotFoundPageProps extends PageProps {
  statusCode: number
}

export default function NotFoundPage(props: NotFoundPageProps) {
  const { statusCode } = props
  return <ErrorPage statusCode={statusCode} />
}
