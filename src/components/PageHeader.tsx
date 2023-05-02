interface HeaderProps {
  Headline: string,
  Body: string,
  Category: any
}
export default function Header(props: HeaderProps) {
  return (
    <section aria-label="page-header" className="space-y-2">
      <p>{props.Category}</p>
      <h1 aria-label="page-title" className="font-semibold headline-large">{props.Headline}</h1>
      <p aria-label="page-description" className="tracking-wide body-large">{props.Body}</p>
    </section>
  )
}