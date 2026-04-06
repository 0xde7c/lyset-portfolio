import { siteData } from '@/lib/data'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 mt-8">
      <div className="space-y-2">
        <div className="text-xs text-slate-500">
          © 2025 lyset
        </div>
        <div className="text-xs text-slate-500">
          <a href="mailto:contact@lyset.xyz" className="text-slate-500 hover:text-slate-900 transition-colors">
            contact@lyset.xyz
          </a>
        </div>
      </div>
    </footer>
  )
}
