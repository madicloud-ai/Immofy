import Head from 'next/head'

export default function Home() {
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <Head>
        <title>Immofy Beta</title>
        <meta name="description" content="Immofy Beta – Intelligente Immobilienanalyse" />
      </Head>

      <h1>🚀 Immofy Beta ist live!</h1>
      <p>Willkommen zur intelligenten Immobilienanalyse-Plattform.</p>
      <p>Hier wird bald deine Heatmap, Watchlist und der Szenarienrechner sichtbar sein.</p>
    </div>
  )
}
