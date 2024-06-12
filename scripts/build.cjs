#!/usr/bin/env zx
async function build() {
  await import('zx/globals')
  $.verbose = true
  await $`webpack --config ./scripts/quicktvui-webpack.android-vendor.cjs`
  await $`webpack --config ./scripts/quicktvui-webpack.android.cjs`
}

build().catch((e) => {
  console.error(e)
})


