#!/bin/sh
# https://github.com/arielivandiaz/auto-commit

# Exit immediately if a command fails
set -e

version_arg=""
branch_arg=""

# Check if the first argument is a version type
if [ "$1" = "mv" ] || [ "$1" = "v" ]; then
    version_arg="$1"
    branch_arg="$2"
else
    # If not a version type, the first argument is the branch name
    version_arg=""
    branch_arg="$1"
fi

echo "Updating version..."
# Capture the new version from the node script
version=$(node version/updateVersion.js ${version_arg})

# If the node script failed, the 'version' variable will be empty.
if [ -z "$version" ]; then
    echo "Failed to get new version. Aborting."
    exit 1
fi

message="v${version}"
echo "Committing with message: ${message}"

git status
git add -A
git commit -m "${message}"

# Determine the target branch
if [ -n "${branch_arg}" ]; then
    target_branch="${branch_arg}"
else
    # If no branch is specified, use the current branch
    target_branch=$(git rev-parse --abbrev-ref HEAD)
fi

echo "Pushing to branch '${target_branch}'..."
git push origin "${target_branch}"

echo "Push to branch '${target_branch}' successful."
