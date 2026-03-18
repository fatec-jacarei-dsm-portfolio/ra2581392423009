type SectionTitleProps = {
  overline: string
  title: string
  description?: string
}

export function SectionTitle({
  overline,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <span>{overline}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}