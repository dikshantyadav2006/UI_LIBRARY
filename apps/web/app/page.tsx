import { Button as ShadcnButton } from '@/components/ui/button';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui-library/ui';

import CursorGrid from '@/components/cursor-grid';
import { ThemeToggle } from '@/components/theme-toggle';

const TAGS = [
  { label: 'next.js', tone: 'bg-tag-sky text-tag-sky-fg' },
  { label: 'fastify', tone: 'bg-tag-mint text-tag-mint-fg' },
  { label: 'react 19', tone: 'bg-tag-rose text-tag-rose-fg' },
  { label: 'typescript', tone: 'bg-tag-sand text-tag-sand-fg' },
] as const;

const KBDS = [
  { keys: 'G H', action: 'open /health' },
  { keys: 'T', action: 'toggle theme' },
  { keys: '⌘ K', action: 'command palette' },
] as const;

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-x-clip bg-background text-foreground">
      <div className="absolute inset-0">
        <CursorGrid
          cellSize={70}
          color="var(--cursor-grid)"
          radius={200}
          falloff="smooth"
          holdTime={400}
          fadeDuration={900}
          lineWidth={1}
          maxOpacity={0.4}
          pulseSpeed={700}
        />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 py-10 sm:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-border pb-6 font-mono text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.2em]">ui-library / foundation</span>
          <div className="pointer-events-auto flex items-center gap-6">
            <span className="hidden tabular-nums tracking-[0.18em] sm:inline">
              next 16 · fastify 5 · pnpm
            </span>
            <ThemeToggle />
          </div>
        </header>

        <section className="grid flex-1 items-center gap-14 py-20 md:grid-cols-12 md:py-28">
          <div className="animate-fade-in-up md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              a shared language for the web
            </p>
            <h1 className="mt-7 max-w-[17ch] text-balance font-serif text-6xl leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
              A design system with a working backend.
            </h1>
            <p className="mt-8 max-w-[52ch] text-pretty text-lg leading-8 text-muted-foreground">
              One monorepo marrying a Next.js frontend, a Fastify service, and the pieces they share
              — tokens, types, and components — so every layer stays in step.
            </p>
            <div
              className="animate-fade-in-up pointer-events-auto mt-12 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '120ms' }}
            >
              <ShadcnButton size="lg">Start building</ShadcnButton>
              <ShadcnButton variant="outline" size="lg">
                View the code
              </ShadcnButton>
            </div>
            <div
              className="animate-fade-in-up mt-14 flex flex-wrap gap-x-5 gap-y-3"
              style={{ animationDelay: '200ms' }}
            >
              {KBDS.map((k) => (
                <span
                  key={k.action}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                >
                  <kbd className="inline-flex min-w-7 items-center justify-center rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[11px] tabular-nums text-foreground">
                    {k.keys}
                  </kbd>
                  {k.action}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 md:pl-10 lg:pl-16">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Shared UI package</CardTitle>
                <CardDescription>
                  Rendered from <code className="font-mono text-xs">@ui-library/ui</code>, styled by
                  the web app&apos;s tokens.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${tag.tone}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="animate-fade-in-up grid grid-cols-1 gap-3 pb-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: 'apps', v: '02', note: 'web · api' },
            { k: 'packages', v: '04', note: 'ui · types · config' },
            { k: 'tests', v: '13', note: 'turbo tasks green' },
            { k: 'health', v: '200', note: 'fastify inject' },
          ].map((s) => (
            <Card key={s.k} className="border-border bg-card/70 px-5 py-4 backdrop-blur-sm">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.k}
              </dt>
              <dd className="mt-1.5 text-2xl font-semibold tabular-nums tracking-tight">{s.v}</dd>
              <dd className="mt-0.5 font-mono text-xs text-muted-foreground">{s.note}</dd>
            </Card>
          ))}
        </section>

        <footer className="flex items-center justify-between border-t border-border py-6 font-mono text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.18em]">GET /health → 200 ok</span>
          <span className="tabular-nums tracking-[0.18em]">turbo cached</span>
        </footer>
      </div>
    </main>
  );
}
