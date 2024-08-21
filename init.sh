mkdir docs play storybook packages 
# 循环上面文件夹
for dir in docs play storybook packages; do
  cd $dir
  pnpm init
  cd ..
done
# mkdir components theme constants hooks utils 
# # 循环上面文件夹
# for dir in components theme constants hooks utils; do
#   cd $dir
#   pnpm init
#   cd ..
# done
