'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { technologies, categories, getTechnologiesByCategory } from '@/lib/data/technologies'
import type { Technology } from '@/types'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

export function TechnologyStackSection() {
  const [activeCategory, setActiveCategory] = useState<Technology['category']>('frontend')

  const currentTechnologies = getTechnologiesByCategory(activeCategory)

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Cutting-edge technologies and frameworks we excel at
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Technology['category'])}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {currentTechnologies.map((tech) => (
            <motion.div key={tech.name} variants={item}>
              <Card className="hover:shadow-lg hover:border-primary-300 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <p className="font-semibold text-slate-900 dark:text-slate-50 group-hover:text-primary-600 transition-colors">
                      {tech.name}
                    </p>
                  </div>
                  {tech.proficiency && (
                    <div className="mt-3">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                        />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {tech.proficiency}% proficiency
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
