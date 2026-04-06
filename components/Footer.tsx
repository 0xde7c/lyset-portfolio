import { siteData } from '@/lib/data'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="space-y-8">
        <div className="flex gap-6">
          <Link
            href={`mailto:${siteData.contact.email}`}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Email
          </Link>
          <Link
            href={siteData.contact.github}
            target="_blank"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={siteData.contact.twitter}
            target="_blank"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Twitter
          </Link>
        </div>
        <div className="text-xs text-slate-400">
          Lyset - Algorithmic Trading Systems
        </div>
      </div>
    </footer>
  )
}
