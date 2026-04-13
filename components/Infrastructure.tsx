import { siteData } from '@/lib/data'

export default function Infrastructure() {
  return (
    <section className="py-10 border-b border-slate-100">
      <h2 className="text-3xl font-light text-slate-900 mb-8">
        What We Do
      </h2>
      <div className="space-y-8">
        <div>
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            {siteData.approach.philosophy}
          </p>
        </div>
      </div>
    </section>
  )
}
