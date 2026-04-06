import { siteData } from '@/lib/data'

export default function Infrastructure() {
  return (
    <section className="py-10 border-b border-slate-100">
      <h2 className="text-3xl font-light text-slate-900 mb-8">
        Approach
      </h2>
      <div className="space-y-8">
        <div>
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            {siteData.approach.philosophy}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-wide font-semibold">
              Execution
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {siteData.approach.execution}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-wide font-semibold">
              Methodology
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {siteData.approach.methodology}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
