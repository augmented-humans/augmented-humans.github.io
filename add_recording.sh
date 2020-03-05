#!/bin/bash

if [ $# -eq 0 ]; then
    echo -e "Please enter a unique id for the session to be added (example: 16032020-0800-0810)"
    printf "Session ID ( 0-9, - ): "
    read id
else
    id=$1
fi