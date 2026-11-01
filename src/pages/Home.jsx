import Header from '../components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Ground Control Station
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Vite, React, and Tailwind CSS are configured. Add pages in{' '}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">src/pages</code>{' '}
          and shared UI in{' '}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">src/components</code>.
        </p>
      </section>
    </main>
  )
}
