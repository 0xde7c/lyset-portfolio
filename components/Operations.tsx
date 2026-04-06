import { siteData } from '@/lib/data'

export default function Operations() {
  return (
    <section className="py-10 border-b border-slate-200">
      <div className="space-y-10">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {siteData.stats.marketsMonitored.map((market, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
                <p className="text-sm font-semibold text-slate-900 mb-2">
                  {market.name}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
