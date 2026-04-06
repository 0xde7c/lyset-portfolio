import { siteData } from '@/lib/data'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 pb-32 border-b border-slate-200">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <Image
              src="/logo.png"
              alt="lyset logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-5xl font-light tracking-tight text-slate-900">
              {siteData.hero.heading}
            </h1>
          </div>
          <p className="text-lg text-slate-600 font-light">
            {siteData.hero.subheading}
          </p>
        </div>
      </div>
    </section>
  )
}
