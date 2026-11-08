#!/usr/bin/env bash
# Thin wrapper around convert-to-html.mjs
# Usage: ./convert-to-html.sh <input.md> [-o out.html] […]
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "$DIR/convert-to-html.mjs" "$@"
