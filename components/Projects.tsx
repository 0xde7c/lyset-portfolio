import { siteData } from '@/lib/data'
import Link from 'next/link'

export default function Projects() {
  const featured = siteData.projects.filter(p => p.featured)
  const other = siteData.projects.filter(p => !p.featured)

  return (
    <section className="py-10 border-b border-slate-200">
      <div className="space-y-12">
        {/* Featured Projects */}
        <div>
          <h2 className="text-3xl font-light text-slate-900 mb-12">
            Featured Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map((project, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-lg p-10 border border-slate-200 hover:border-slate-400 transition-all h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                    {project.details}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-slate-100 text-slate-700 px-2 py-1 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-xs text-slate-500">Status</p>
                        <p className="text-sm font-semibold text-green-600">
                          {project.status}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Operational</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {project.uptime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <div>
            <h2 className="text-3xl font-light text-slate-900 mb-12">
              Additional Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {other.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-10 border border-slate-200 hover:border-slate-400 transition-all h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`inline-block px-3 py-1 text-xs rounded font-semibold whitespace-nowrap ml-4 ${
                      project.status === 'LIVE'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
