/**
 *  @type {import('next').NextConfig} 
 **/
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ ...nextConfig })
