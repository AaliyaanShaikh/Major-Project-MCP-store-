import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Hoisted deps (npm workspaces / CI) may live in repo root node_modules. */
function resolveSplineEntry() {
  const candidates = [
    path.join(__dirname, 'node_modules/@splinetool/react-spline/dist/react-spline.js'),
    path.join(__dirname, '../node_modules/@splinetool/react-spline/dist/react-spline.js'),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return candidates[0]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@splinetool/react-spline'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/react-spline': resolveSplineEntry(),
    }
    return config
  },
}

export default nextConfig
