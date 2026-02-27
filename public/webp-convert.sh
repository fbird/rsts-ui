#!/bin/bash

# 设置源文件夹
SOURCE_DIR="./images"

# 使用 find 命令递归查找所有 .png 和 .jpg 文件
find $SOURCE_DIR -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
  # 获取文件的目录和文件名
  dir=$(dirname "$file")
  filename=$(basename "$file")  # 获取文件名，包括扩展名
  
  # 使用 cwebp 转换图片，生成 WebP 文件，文件名为原文件名加 .webp 后缀
  cwebp "$file" -q 60 -o "$dir/$filename.webp"
  echo "Converted $file to $dir/$filename.webp"
done