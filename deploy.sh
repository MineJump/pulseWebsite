#!/usr/bin/env bash
set -euo pipefail

# Deploys the 2chub website to the production Lightsail instance.
# Requires the Frankfurt Lightsail SSH key at the path below.

SSH_KEY="/Users/till-olelohse/AWS Key/Frankfurt Lightsail.pem"
SSH_TARGET="ubuntu@3.76.225.82"
REMOTE_ROOT="/var/www/2chub"

cd "$(dirname "$0")"

echo "==> Building"
npm run build

echo "==> Uploading to ${SSH_TARGET}:${REMOTE_ROOT}"
rsync -avz --delete -e "ssh -i '${SSH_KEY}'" dist/ "${SSH_TARGET}:${REMOTE_ROOT}/"

echo "==> Reloading Caddy"
ssh -i "${SSH_KEY}" "${SSH_TARGET}" 'sudo systemctl reload caddy'

echo "==> Smoke test"
curl -sI https://2chub.com/ | head -1

echo "==> Done: https://2chub.com"
