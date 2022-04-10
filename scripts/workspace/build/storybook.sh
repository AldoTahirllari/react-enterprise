#!/usr/bin/env bash
echo "┏━━━ 📦 Building storybook ━━━━━━━━━━━━━━━━━━━"

lerna exec --stream --concurrency 2 --scope=@react-enterprise/components"-- yarn build-storybook