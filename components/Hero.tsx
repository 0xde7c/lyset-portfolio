import { siteData } from '@/lib/data'

export default function Hero() {
  return (
    <section className="py-20 border-b border-slate-200">
      <div className="space-y-6">
        <div>
          <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-3">
            {siteData.hero.heading}
          </h1>
          <p className="text-lg text-slate-600 font-light">
            {siteData.hero.subheading}
          </p>
        </div>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          {siteData.hero.description}
        </p>
      </div>
    </section>
  )
}
