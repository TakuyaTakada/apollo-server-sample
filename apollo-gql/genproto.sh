#!/bin/bash -eu

# protos are loaded dynamically for node, simply copies over the proto.
mkdir -p src/proto
cp -r ../pb/* ./src/proto