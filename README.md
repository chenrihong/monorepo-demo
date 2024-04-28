
# 使用 pnpm 工作区来管理多项目帮助

@link https://zhuanlan.zhihu.com/p/422740629

@link https://juejin.cn/post/7184392660939964474

## 全局依赖

我们知道不管是一个 web 项目还是一个 node 项目，它都是基于同一种语言编写，所以我们可以只安装一次 TypeScript，供三个项目使用，这就体现出了 monorepo 的优势。

```
pnpm install typescript -D -w
```

### 如何在子项目中命名用全局依赖

直接引用就行，不需要在 package.json中声明依赖

## 局部依赖

对于某些依赖，可能仅存在于某几个 package 中，我们就可以单独为他们安装，当然，可以通过cd packges/xxx后，执行pnpm install xxx，但这样重复操作多次未免有些麻烦，pnpm 提供了一个快捷指令——filter

```
pnpm install vue -r --filter @hrp/web
```

## link 机制

在 monorepo 中，我们往往需要 package 间的引用，比如本例中的@hrp/tools就会被@hrp/server和@hrp/web依赖。
 
先在项目hrp-web中添加依赖，再运行 pnpm i

 ```
 "dependencies": {
    "vue": "^3.4.21",
    "@thothinfo/hrp-ui": "workspace:^1.0.0"
  },
 ```

