#!/bin/bash

# Create the conda environment
conda create -n chatwithopentargets python=3.11 -y

# Activate the conda environment
source activate chatwithopentargets

# Install the required packages
pip install --editable .

# Make directories
mkdir -p logs/suggestions logs/results logs/interpretations
