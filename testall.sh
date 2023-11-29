#!/bin/bash

# Change to the directory where the .spec.js files are located
cd /path/to/directory

# Loop through all the .spec.js files
for file in *.spec.js; do
    # Run npm test on each file
    npm test "$file"
done
