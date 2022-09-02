## git merge || git rebase || cherry-pick

> git merge

优点：将主动合并的分支上的commit信息将会合并到主线分支在可视化的工具中可以清晰的看到这次合并的内容所包含的改动点

配合 git merge --squash 可以合并这个拉出的节点到合并的节点所有的commit，生成一个新的commit信息

缺点：容易出现覆盖代码的情况

解决方案：遵循 git flow 流

> git rebase

优点：提交的内容是线性的，不会出现难受的分支

缺点：多人开发的时候不容易定位自己的提交内容

> git cherry-pick

优点：只合并自己的改动点，不会出现代码覆盖情况

缺点：需要提交多个commit的哈希值

解决方案：使用 git rebase -i HEAD~{条数} 的命令来合并自己分支的前n条commit数据，然后再使用 git cherry-pick 就会比较清晰

## 规范的 git flow 流

[规范的 git flow 流](https://www.pianshen.com/article/62131297195/)

![img.png](https://www.pianshen.com/images/455/4f0ca3d3a4894ff0c8674dfac29ab097.png)
