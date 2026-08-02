import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { BLOG_POSTS, COMPANY } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { cn } from '../lib/utils'

export default function Blog() {
  return (
    <div className="pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Insights from the{' '}
              <span className="gradient-text">front line</span>
            </>
          }
          subtitle="Engineering, design and growth lessons from the NUVOX team."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <a
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(post.title)}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className={cn('relative grid h-40 place-items-center overflow-hidden bg-gradient-to-br', post.gradient)}>
                  <div className="grid-bg absolute inset-0 opacity-30" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur">
                    {post.category}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-fg-muted">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-bold leading-snug text-fg transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-fg-muted">{post.excerpt}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  )
}
