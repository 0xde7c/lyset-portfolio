import { siteData } from '@/lib/data'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 pb-16 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 opacity-20 pointer-events-none">
        <Image
          src="/pattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <Image
              src="/logo.png"
              alt="lyset logo"
              width={64}
              height={64}
              className="w-16 h-16"
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
