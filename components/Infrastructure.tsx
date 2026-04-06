import { siteData } from '@/lib/data'

export default function Infrastructure() {
  return (
    <section className="py-16 border-b border-slate-200">
      <h2 className="text-3xl font-light text-slate-900 mb-12">
        Approach
      </h2>
      <div className="space-y-8">
        <div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            {siteData.approach.philosophy}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
              Execution
            </p>
            <p className="text-sm text-slate-900">
              {siteData.approach.execution}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
              Methodology
            </p>
            <p className="text-sm text-slate-900">
              {siteData.approach.methodology}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
