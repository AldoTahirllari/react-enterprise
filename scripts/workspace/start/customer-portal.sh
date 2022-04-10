#!/usr/bin/env bash
echo "┏━━━ 🏃️ START React Enterprise: Customer Portal app ━━━━━━━"
lerna exec --stream --concurrency 4 --scope=@react-enterprise/customer-portal -- yarn start
