import { siteData } from '@/lib/data'

export default function Operations() {
  return (
    <section className="py-16 border-b border-slate-200">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-light text-slate-900 mb-8">
            Scale
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
                Live Systems
              </p>
              <p className="text-3xl font-light text-slate-900">
                {siteData.stats.liveDeployments}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
                Real Capital Traded
              </p>
              <p className="text-3xl font-light text-slate-900">
                ✓
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-light text-slate-900 mb-8">
            Deployed Across
          </h2>
          <div className="space-y-4">
            {siteData.stats.marketsMonitored.map((market, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-40">
                  <p className="text-sm font-semibold text-slate-900">
                    {market.name}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600">
                    {market.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
