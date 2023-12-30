#!/bin/bash

COMMAND="$1"
NAME="$2"

START_TIME=$(date +%s%3N)

eval $COMMAND

END_TIME=$(date +%s%3N)

DURATION=$((END_TIME - START_TIME))


echo "$NAME - $DURATION ms"
