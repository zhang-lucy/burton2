#!/bin/sh

user="$1"
file="$2"
echo "Username: ${user}"
echo "Filepath: ${file}"
scp ../${file} ${user}@athena.dialup.mit.edu:/afs/athena.mit.edu/activity/b/burton2/${file}
