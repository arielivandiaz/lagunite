#!/bin/sh
# https://github.com/arielivandiaz/auto-commit
node version/updateVersion.js
version=$(cat version/version.json | jq '.version')
rev=$(cat version/version.json | jq '.rev')
message="v"${version}.${rev}
echo ${message}
git status 
git add -A
git commit -m ${message}
git push  origin master
