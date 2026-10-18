export function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
        {index}
      </p>
      <span aria-hidden="true" className="mt-2 block h-px w-10 bg-accent" />
      <h2 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-7 text-muted">{intro}</p>
      ) : null}
    </div>
  );
}
