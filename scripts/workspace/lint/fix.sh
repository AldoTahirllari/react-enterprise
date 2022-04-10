#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
# forge-skeleton uses a different eslint config and lerna can't seem to pick it up
lerna exec --stream --concurrency 4 --ignore=@bim-virtual-package/forge-skeleton -- yarn lint:fix --color
