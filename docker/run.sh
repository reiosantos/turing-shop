#!/usr/bin/env bash

if [[ ${ENV} == 'local' ]]; then
  npm run start:docker
else
  npm run start
fi
