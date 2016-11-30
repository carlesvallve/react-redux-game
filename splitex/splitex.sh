#!/bin/bash

folder="splitex"
base=game
bundle=$folder/path/to/bundle.js
out_dir=$folder/out

declare -a files=("_en.php" "_zh.php")

for file in "${files[@]}"; do
   LANG=$(echo $file | cut -d_ -f2 | cut -d. -f1)
   echo $out_dir/$base$file
   cat $folder/pagehead | sed -e "s/lang=\"en\"/lang=\"$LANG\"/g" > $out_dir/$base$file
   cat $bundle >> $out_dir/$base$file
   cat $folder/pagefoot >> $out_dir/$base$file

done
