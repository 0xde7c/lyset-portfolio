import { siteData } from '@/lib/data'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="py-10 border-b border-slate-200">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-light text-slate-900 mb-12">
            Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {siteData.projects.map((project, idx) => (
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

                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500 mb-1">Status</p>
                      <p className="text-sm font-semibold text-green-600">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
