import { siteData } from '@/lib/data'

export default function Contact() {
  return (
    <section className="py-10 border-b border-slate-200">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-light text-slate-900 mb-6">
            Contact
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide font-semibold">
                Email
              </p>
              <p className="text-sm text-slate-600">
                <a href="mailto:contact@lyset.xyz" className="hover:text-slate-900 transition-colors">
                  contact@lyset.xyz
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide font-semibold">
                Social
              </p>
              <div className="flex gap-4">
                <a href={siteData.contact.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  GitHub
                </a>
                <a href={siteData.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
