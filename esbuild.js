require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node',
  // external: ['./node_modules/*'],
  minify: true,
  // outdir: 'dist'
  outfile: 'dist/n-wget.js'
})
