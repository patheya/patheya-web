'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Real code snippets from Patheya's tech stack
const codeSnippets = [
  // React & Next.js
  'const App = () => <Provider store={store}><Router /></Provider>',
  'export default function Page() { return <Layout /> }',
  'useEffect(() => { fetchData().then(setData) }, [deps])',

  // Node.js & Backend
  'app.use(express.json()); app.listen(PORT)',
  'const server = new ApolloServer({ typeDefs, resolvers })',
  'mongoose.connect(MONGO_URI, { useNewUrlParser: true })',

  // TypeScript
  'interface Service { id: string; title: string; technologies: string[] }',
  'type Response<T> = { data: T; error?: Error }',

  // AWS & Cloud
  'aws s3 sync ./build s3://bucket --delete',
  'const lambda = new AWS.Lambda({ region: "us-east-1" })',
  'docker build -t app:latest . && docker push',

  // DevOps & CI/CD
  'terraform apply -auto-approve',
  'kubectl apply -f deployment.yaml',
  'npm run build && npm run deploy',

  // Python & AI/ML
  'model = tf.keras.Sequential([layers.Dense(128)])',
  'from transformers import pipeline; nlp = pipeline("sentiment")',
  'df = pd.read_csv("data.csv").dropna()',

  // Database
  'SELECT * FROM users WHERE active = true ORDER BY created_at',
  'db.collection.find({ status: "active" }).limit(10)',
  'INSERT INTO services (name, tech) VALUES ($1, $2)',

  // Mobile
  'const Stack = createNativeStackNavigator<RootStackParamList>()',
  'import { Platform, StyleSheet } from "react-native"',

  // Java & Spring
  '@RestController @RequestMapping("/api/v1")',
  '@Service public class UserService implements IUserService',

  // GraphQL
  'query GetServices { services { id title technologies } }',
  'mutation CreateUser($input: UserInput!) { createUser(input: $input) }',
]

export function CodeScrollPanel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSnippets, setCurrentSnippets] = useState<string[]>([])

  useEffect(() => {
    // Shuffle and select initial snippets
    const shuffled = [...codeSnippets].sort(() => Math.random() - 0.5)
    setCurrentSnippets(shuffled.slice(0, 8))

    // Rotate snippets every 4 seconds for variety
    const interval = setInterval(() => {
      const newShuffled = [...codeSnippets].sort(() => Math.random() - 0.5)
      setCurrentSnippets(newShuffled.slice(0, 8))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-32 overflow-hidden rounded-lg bg-slate-950/50 backdrop-blur-sm border border-primary-500/20 shadow-lg shadow-primary-500/10"
    >
      {/* Terminal-style header */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/80 backdrop-blur-sm border-b border-primary-500/20 flex items-center px-4 gap-2 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-slate-400 font-mono ml-2">patheya-services.ts</span>
      </div>

      {/* Scrolling code lines */}
      <div className="absolute inset-0 pt-4 flex flex-col justify-center overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="space-y-2 px-4"
        >
          {currentSnippets.map((snippet, index) => (
            <motion.div
              key={`${snippet}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="font-mono text-xs whitespace-nowrap"
            >
              <span className="text-slate-600 dark:text-slate-600 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-primary-400 mx-2">{'>'}</span>
              <span className="text-blue-300/90">{snippet}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
    </div>
  )
}
