import { siteData } from '@/lib/data'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 border-b border-slate-200">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/logo.png"
              alt="lyset logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-5xl font-light tracking-tight text-slate-900">
              {siteData.hero.heading}
            </h1>
          </div>
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
