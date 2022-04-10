#!/usr/bin/env bash
echo "┏━━━ 🏃️ START React Enterprise: Admin Portal app ━━━━━━━"
lerna exec --stream --concurrency 4 --scope=@react-enterprise/admin-portal -- yarn start
