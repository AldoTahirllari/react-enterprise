#!/usr/bin/env bash
echo "┏━━━ 🏗 Rebuild eslint rimraf ./**/node_modules && lerna bootstrap ━━━━━━━"
rimraf ./**/node_modules && lerna bootstrap
