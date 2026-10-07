import { Sparkles, CheckCircle2, MapPin, Heart, ShoppingBag, LayoutGrid, Users, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BrowserFrame, PhoneFrame } from '@/components/products/DeviceFrame'
import type { Product } from '@/types'

/*
 * Illustrative, code-drawn previews of each product's core screen. They stand
 * in for real screenshots (see Product.screenshots) and are decorative: the
 * wrapping figure carries a text description for assistive technology.
 */

const descriptions: Record<string, string> = {
  taskram:
    'Illustration of the TasKram Kanban board: an AI-generated compliance task list for a client, organised into To Do, In Progress, Review and Done columns.',
  easie:
    'Illustration of the EASIE IQAC dashboard: submission and validation totals, criterion-wise progress for NAAC criteria, and recently validated faculty entries.',
  'kitchen-connect':
    "Illustration of the KitchenConnect customer app: an outlet's menu for today with lunch and dinner meal slots, vegetarian dishes and a cart summary.",
}

interface ProductPreviewProps {
  product: Product
  className?: string
}

export function ProductPreview({ product, className }: ProductPreviewProps) {
  return (
    <figure className={cn('relative', className)}>
      <div aria-hidden="true" className="pointer-events-none select-none">
        {product.slug === 'taskram' && <TasKramPreview />}
        {product.slug === 'easie' && <EasiePreview />}
        {product.slug === 'kitchen-connect' && <KitchenConnectPreview />}
      </div>
      <figcaption className="sr-only">{descriptions[product.slug]}</figcaption>
    </figure>
  )
}

const kanban = [
  {
    title: 'To Do',
    dot: 'bg-slate-400',
    cards: [
      { task: 'GSTR-1 — monthly return', due: 'Due 11 Nov', who: 'RK', tag: 'GST' },
      { task: 'TDS return — Form 26Q', due: 'Due 31 Oct', who: 'AS', tag: 'TDS' },
    ],
  },
  {
    title: 'In Progress',
    dot: 'bg-sky-500',
    cards: [
      { task: 'GSTR-3B — summary return', due: 'Due 20 Oct', who: 'PM', tag: 'GST' },
      { task: 'Advance tax computation', due: 'Due 15 Dec', who: 'RK', tag: 'IT' },
    ],
  },
  {
    title: 'Review',
    dot: 'bg-amber-500',
    cards: [{ task: 'ROC — Form AOC-4', due: 'Due 29 Oct', who: 'NJ', tag: 'ROC' }],
  },
  {
    title: 'Done',
    dot: 'bg-emerald-500',
    cards: [{ task: 'DIR-3 KYC — directors', due: 'Filed', who: 'AS', tag: 'ROC' }],
  },
]

function TasKramPreview() {
  return (
    <BrowserFrame url="taskram.in">
      <div className="flex">
        <div className="hidden w-12 flex-col items-center gap-4 border-r border-slate-100 bg-slate-50 py-4 sm:flex">
          <span className="h-6 w-6 rounded-md bg-product" />
          <LayoutGrid className="h-4 w-4 text-product-strong" />
          <Users className="h-4 w-4 text-slate-500" />
          <BarChart3 className="h-4 w-4 text-slate-500" />
          <Settings className="h-4 w-4 text-slate-500" />
        </div>
        <div className="min-w-0 flex-1 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[11px] text-slate-600">Client</p>
              <p className="text-sm font-semibold text-slate-900">Mehta Traders Pvt. Ltd.</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-product-tint px-2.5 py-1 text-[11px] font-semibold text-product-strong">
              <Sparkles className="h-3 w-3" />
              AI-generated · 6 tasks accepted
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kanban.map((column) => (
              <div key={column.title} className="rounded-lg bg-slate-50 p-2">
                <div className="mb-2 flex items-center gap-1.5 px-1">
                  <span className={cn('h-2 w-2 rounded-full', column.dot)} />
                  <span className="text-[11px] font-semibold text-slate-700">{column.title}</span>
                  <span className="ml-auto text-[10px] text-slate-600">{column.cards.length}</span>
                </div>
                <div className="space-y-2">
                  {column.cards.map((card) => (
                    <div key={card.task} className="rounded-md bg-white p-2 shadow-sm ring-1 ring-slate-200">
                      <span className="rounded bg-product-tint px-1.5 py-0.5 text-[9px] font-bold text-product-strong">
                        {card.tag}
                      </span>
                      <p className="mt-1.5 text-[11px] font-medium leading-snug text-slate-800">{card.task}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">{card.due}</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-product-strong text-[8px] font-bold text-white">
                          {card.who}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const criteria = [
  { label: 'C1', value: 92 },
  { label: 'C2', value: 78 },
  { label: 'C3', value: 85 },
  { label: 'C4', value: 64 },
  { label: 'C5', value: 88 },
  { label: 'C6', value: 71 },
  { label: 'C7', value: 96 },
]

function EasiePreview() {
  return (
    <BrowserFrame url="easie.co.in">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-600">IQAC Dashboard</p>
            <p className="text-sm font-semibold text-slate-900">Academic Year 2025–26</p>
          </div>
          <span className="rounded-full bg-product-tint px-2.5 py-1 text-[11px] font-semibold text-product-strong">
            NAAC · AQAR
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { label: 'Entries submitted', value: '1,284' },
            { label: 'Validated', value: '92%' },
            { label: 'Pending review', value: '37' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-slate-50 p-2.5 ring-1 ring-slate-100">
              <p className="text-[10px] text-slate-600">{stat.label}</p>
              <p className="mt-0.5 text-base font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-5">
          <div className="rounded-lg p-3 ring-1 ring-slate-100 sm:col-span-3">
            <p className="text-[11px] font-semibold text-slate-700">Criterion-wise readiness</p>
            <div className="mt-3 flex h-28 items-end gap-2">
              {criteria.map((c) => (
                <div key={c.label} className="flex h-full flex-1 flex-col items-center gap-1">
                  <div className="relative w-full flex-1 rounded-sm bg-slate-100">
                    <div className="absolute inset-x-0 bottom-0 rounded-sm bg-product" style={{ height: `${c.value}%` }} />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg p-3 ring-1 ring-slate-100 sm:col-span-2">
            <p className="text-[11px] font-semibold text-slate-700">Recently validated</p>
            <ul className="mt-2 space-y-2">
              {['Guest lecture — Physics', 'Paper in UGC-CARE journal', 'Faculty development programme'].map(
                (entry) => (
                  <li key={entry} className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-px h-3 w-3 flex-shrink-0 text-product-strong" />
                    <span className="text-[10px] leading-snug text-slate-700">{entry}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const menu = [
  { name: 'Maharashtrian Thali', note: 'Bhakri, pitla, thecha, rice', qty: 1 },
  { name: 'Paneer Butter Masala', note: 'With two butter rotis', qty: 0 },
  { name: 'Dal Khichdi', note: 'Comfort bowl with papad', qty: 1 },
]

function KitchenConnectPreview() {
  return (
    <PhoneFrame>
      <div className="bg-product px-4 pb-4 pt-8 text-white">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[10px] text-white/90">
            <MapPin className="h-3 w-3" /> Kothrud, Pune
          </span>
          <Heart className="h-3.5 w-3.5" />
        </div>
        <p className="mt-2 text-base font-bold">Annapurna Kitchen</p>
        <p className="text-[10px] text-white/90">Home-style meals · Pickup & delivery</p>
      </div>
      <div className="px-4 py-3">
        <div className="flex gap-2">
          <span className="rounded-full bg-product-accent px-2.5 py-1 text-[10px] font-semibold text-white">
            Lunch · 12–3 PM
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
            Dinner · 7–10 PM
          </span>
        </div>
        <p className="mt-3 text-xs font-bold text-slate-900">Today&apos;s menu</p>
        <ul className="mt-2 space-y-2.5">
          {menu.map((dish) => (
            <li key={dish.name} className="flex items-center gap-2.5 rounded-lg p-2 ring-1 ring-slate-100">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-product-tint text-lg">
                🍛
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                  <span className="inline-flex h-2.5 w-2.5 items-center justify-center border border-emerald-600">
                    <span className="h-1 w-1 rounded-full bg-emerald-600" />
                  </span>
                  <span className="truncate">{dish.name}</span>
                </p>
                <p className="truncate text-[9px] text-slate-600">{dish.note}</p>
              </div>
              {dish.qty > 0 ? (
                <span className="flex items-center gap-1.5 rounded-md border border-product-accent px-1.5 py-0.5 text-[10px] font-bold text-product-accent">
                  − {dish.qty} +
                </span>
              ) : (
                <span className="rounded-md border border-product-accent px-2 py-0.5 text-[10px] font-bold text-product-accent">
                  ADD
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-product-accent px-3 py-2 text-white">
          <span className="text-[10px] font-semibold">2 items · Lunch slot</span>
          <span className="flex items-center gap-1 text-[10px] font-bold">
            <ShoppingBag className="h-3 w-3" /> View cart
          </span>
        </div>
      </div>
    </PhoneFrame>
  )
}
