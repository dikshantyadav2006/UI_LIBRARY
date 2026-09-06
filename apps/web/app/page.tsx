import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui-library/ui';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-zinc-50 to-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">UI Library Monorepo</h1>
        <p className="mt-3 text-lg text-zinc-600">
          A modern full-stack Turborepo built with Next.js, Fastify, TypeScript &amp; Tailwind CSS
          v4
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shared UI Package</CardTitle>
            <CardDescription>
              These components are imported from{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">@ui-library/ui</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="primary" size="md">
              Primary
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="ghost" size="md">
              Ghost
            </Button>
            <Button variant="danger" size="md">
              Danger
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Server Components</CardTitle>
            <CardDescription>
              The App Router is enabled with React Server Components. This page renders entirely on
              the server.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" size="sm">
              Learn more
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
