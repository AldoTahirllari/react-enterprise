#!/usr/bin/env bash
echo "┏━━━ 📦 Building React Enterprise: Admin Portal app  ━━━━━━━━━━━━━━━━━━━"
lerna exec --stream --concurrency 2 --scope=@react-enterprise/admin-portal -- yarn build
