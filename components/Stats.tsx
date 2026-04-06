import { siteData } from '@/lib/data'

export default function Stats() {
  const stats = [
    {
      label: 'Live Systems',
      value: siteData.stats.liveDeployments,
    },
    {
      label: 'Markets Monitored',
      value: siteData.stats.marketsMonitored.length,
    },
    {
      label: 'Total Bots',
      value: siteData.stats.totalBots,
    },
  ]

  return (
    <section className="py-16 border-b border-slate-200">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-4xl font-light text-slate-900 mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
