import { siteData } from '@/lib/data'

export default function Infrastructure() {
  const items = Object.entries(siteData.infrastructure).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, ' $1').trim(),
    description: value,
  }))

  return (
    <section className="py-16 border-b border-slate-200">
      <h2 className="text-3xl font-light text-slate-900 mb-12">
        Technical Infrastructure
      </h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="flex-shrink-0 w-32">
              <p className="text-sm font-semibold text-slate-900 capitalize">
                {item.label}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
