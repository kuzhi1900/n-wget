#!/usr/bin/env node
// import chalk from 'chalk'
//
// console.clear()
// const logo =
//   '██╗  ██╗██████╗ ██╗   ██╗               ██████╗██╗     ██╗\n' +
//   '██║  ██║██╔══██╗╚██╗ ██╔╝              ██╔════╝██║     ██║\n' +
//   '███████║██████╔╝ ╚████╔╝     █████╗    ██║     ██║     ██║\n' +
//   '██╔══██║██╔══██╗  ╚██╔╝      ╚════╝    ██║     ██║     ██║\n' +
//   '██║  ██║██████╔╝   ██║                 ╚██████╗███████╗██║\n' +
//   '╚═╝  ╚═╝╚═════╝    ╚═╝                  ╚═════╝╚══════╝╚═╝\n' +
//   '                                                          \n'
// console.log(chalk.yellowBright(logo))

import { downloadFile } from './common/download.js'

const url = process.argv[2]
if (url) {
  console.log(url)
  const filename = process.argv[3] || url.match(/\/([^\\/?#]+)$/i)[1]
  console.log(filename)
  downloadFile(url, './', filename).then(() => {
    console.log(`Download ${filename} susses`)
  })
} else {
  console.log('\n n-wget url [filename] \n')
}
