import { siteData } from '@/lib/data'

export default function Operations() {
  const metrics = [
    {
      label: 'Operational Since',
      value: siteData.stats.operationalSince,
    },
    {
      label: 'Systems Live',
      value: siteData.stats.liveDeployments,
    },
    {
      label: 'AUM',
      value: siteData.stats.aum,
    },
    {
      label: 'Avg Sharpe',
      value: siteData.stats.avgSharpe,
    },
    {
      label: 'Max Drawdown',
      value: siteData.stats.avgMaxDrawdown,
    },
    {
      label: 'Markets',
      value: siteData.stats.marketsMonitored.length,
    },
  ]

  return (
    <section className="py-16 border-b border-slate-200">
      <h2 className="text-3xl font-light text-slate-900 mb-12">
        Operations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
              {metric.label}
            </p>
            <p className="text-2xl font-light text-slate-900">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
