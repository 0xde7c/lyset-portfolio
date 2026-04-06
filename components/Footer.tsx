import { siteData } from '@/lib/data'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex gap-4 text-sm">
          <Link
            href={`mailto:${siteData.contact.email}`}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Email
          </Link>
          <span className="text-slate-300">·</span>
          <Link
            href={siteData.contact.github}
            target="_blank"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            GitHub
          </Link>
          <span className="text-slate-300">·</span>
          <Link
            href={siteData.contact.twitter}
            target="_blank"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Twitter
          </Link>
        </div>
        <div className="text-xs text-slate-400">
          © 2025 lyset
        </div>
      </div>
    </footer>
  )
}
