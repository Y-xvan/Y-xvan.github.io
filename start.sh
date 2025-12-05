#!/bin/bash
export PATH=/usr/local/go/bin:~/.nvm/versions/node/v24.11.1/bin:/mnt/data3/yuzhixuan/anaconda3/bin:$PATH
export NODE_PATH=~/.nvm/versions/node/v24.11.1/bin/node
hugo server --disableFastRender
