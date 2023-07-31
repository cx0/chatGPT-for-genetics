#!/bin/bash

# Define directory structure
declare -a dirs=("src/components"
                 "src/pages"
                 "src/styles"
                 "src/utils")

# Create directories
for dir in "${dirs[@]}"
do
  mkdir -p $dir
done

# Define files to create
declare -a files=("src/components/ChatInput.js"
                  "src/components/ChatLog.js"
                  "src/components/ChatContainer.js"
                  "src/pages/_app.js"
                  "src/pages/index.js"
                  "src/styles/ChatInput.module.css"
                  "src/styles/ChatLog.module.css"
                  "src/styles/ChatContainer.module.css"
                  "src/styles/globals.css"
                  "src/utils/api.js")

# Create files
for file in "${files[@]}"
do
  touch $file
done
