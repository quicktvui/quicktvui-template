#!/usr/bin/env zx
async function build() {
    await import('zx/globals');
    $.verbose = true;
    await $`hippy-dev -c ./scripts/quicktvui-webpack.dev.cjs`
}

build().catch((e) => {
    console.error(e)
})


