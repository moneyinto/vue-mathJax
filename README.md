# mv-latex

<p align="center">
    <img src="./public/latex.png" />
</p>

<p align="center">
    <a href="https://github.com/moneyinto/vue-mathJax/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/moneyinto/vue-mathJax?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/moneyinto/vue-mathJax/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/moneyinto/vue-mathJax?logo=github" alt="forks" />
    </a>
    <a href="https://www.typescriptlang.org" target="_black">
        <img src="https://img.shields.io/badge/language-TypeScript-blue.svg" alt="language">
    </a>
    <a href="https://github.com/moneyinto/vue-mathJax/issues" target="_black">
        <img src="https://img.shields.io/github/issues-closed/moneyinto/vue-mathJax.svg" alt="issue">
    </a>
</p>

#### 参考[latexlive](https://www.latexlive.com/)的`快捷工具`和`公式模版`，使用vue3+typescript完善一版公式编辑

### 插件分为三部分

- 第三方依赖脚本（***通过npm安装使用存在问题，我这边直接将npm安装的包拷贝出来放入到public文件夹里了***）
- 引入mathJax脚本
```ts
export const initMathJax = (config = {}, callback?: () => void) => {
    if (window.MathJax) return callback && callback();
    const script = document.createElement("script");
    script.src = "/mathjax/3.2.2/tex-svg.js";
    script.async = true;
    document.head.appendChild(script);
    // 没有找到好的配置解决办法，这里直接在localstorage里存入配置值
    localStorage.setItem("MathJax-Menu-Settings", '{"renderer":"svg"}');
    const defaultConfig = {
        loader: { load: ["[tex]/unicode", "[tex]/mhchem"] },
        tex: { packages: { "[+]": ["unicode", "mhchem"] } },
        options: {
            enableMenu: false,
            menuOptions: {
                settings: {
                    renderer: "svg"
                }
            }
        },
        startup: {
            pageReady: () => {
                callback && callback();
            }
        }
    };

    const mergeConfig = Object.assign({}, defaultConfig, config);
    window.MathJax = mergeConfig;
};
```
- vue mathJax 组件
```vue
<template>
    <div class="mathjax-container">
        <div ref="mathjaxRef"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { initMathJax } from "@/plugins/mathjax";
const mathjaxRef = ref<HTMLDivElement>();
const props = defineProps({
    latex: {
        type: String,
        default: ""
    }
});
const renderMathJax = () => {
    initMathJax({}, () => {
        window.MathJax.tex2svgPromise(props.latex, { display: true }).then((math: Element) => {
            if (mathjaxRef.value) {
                mathjaxRef.value.innerHTML = "";
                mathjaxRef.value.appendChild(math);
            }
        });
    });
};
renderMathJax();
watch(() => props.latex, () => {
    renderMathJax();
});
</script>

<style lang="scss" scoped>
.mathjax-container {
    margin: 0 auto;
}
</style>
```
