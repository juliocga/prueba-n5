/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  images: {
    domains: ['prueba-n5.vercel.app'],
  },
}

module.exports = nextConfig
