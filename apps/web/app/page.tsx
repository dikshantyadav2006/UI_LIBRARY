import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui-library/ui';

import CursorGrid from '@/components/cursor-grid';

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-ink">
      <div className="absolute inset-0">
        <CursorGrid
          cellSize={70}
          color="#9a5b2b"
          radius={200}
          falloff="smooth"
          holdTime={400}
          fadeDuration={900}
          lineWidth={1}
          maxOpacity={0.4}
          pulseSpeed={700}
        />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 py-10">
        <header className="flex items-center justify-between border-b border-stone-900/10 pb-6 font-mono text-xs text-ink-muted">
          <span className="tracking-widest">ui-library / foundation</span>
          <span className="tabular-nums tracking-widest">next 16 · fastify 5 · pnpm</span>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="animate-fade-in-up font-mono text-sm text-accent">
              a shared language for events on the world wide web
            </p>
            <h1 className="mt-4 max-w-[18ch] animate-fade-in-up text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
              A design system with a working backend.
            </h1>
            <p className="mt-6 max-w-[62ch] animate-fade-in-up text-pretty text-lg leading-8 text-ink-muted">
              One monorepo connecting a Next.js frontend, a Fastify service, and the pieces they
              share — tokens, types, and components — so every layer stays in step.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
                <Button size="lg">Start building</Button>
                <Button variant="secondary" size="lg">
                  View the code
                </Button>
              </div>
            </div>
            <dl
              className="mt-16 grid max-w-md grid-cols-3 gap-4 border-t border-stone-900/10 pt-8 font-mono text-sm"
              style={{ animationDelay: '250ms' }}
            >
              <div className="animate-fade-in-up">
                <dt className="text-ink-muted">apps</dt>
                <dd className="mt-1 tabular-nums text-ink">02</dd>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '80ms' }}>
                <dt className="text-ink-muted">packages</dt>
                <dd className="mt-1 tabular-nums text-ink">04</dd>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                <dt className="text-ink-muted">shared code</dt>
                <dd className="mt-1 tabular-nums text-ink">1,3k lines</dd>
              </div>
            </dl>
          </div>

          <div className="pointer-events-auto md:col-span-5 md:pl-8">
            <Card className="animate-fade-in-up md:mt-20">
              <CardHeader>
                <CardTitle>Shared UI package</CardTitle>
                <CardDescription>
                  Rendered from <code>@ui-library/ui</code>, styled by web — hover to feel the
                  states.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-stone-900/10 py-6 font-mono text-xs text-ink-muted">
          <span>GET /health → 200 ok</span>
          <span className="tabular-nums">turbo cached · 4 tasks</span>
        </footer>
      </div>
    </main>
  );
}
