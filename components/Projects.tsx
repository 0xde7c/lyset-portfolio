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
                  <p className="text-sm text-slate-500 flex-grow leading-relaxed">
                    {project.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
