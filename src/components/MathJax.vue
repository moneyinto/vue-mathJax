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
    },
    previewLatex: {
        type: String,
        default: ""
    }
});

const renderMathJax = () => {
    initMathJax({}, async () => {
        // window.MathJax.tex2svgPromise(props.latex, { display: true }).then((math: Element) => {
        //     if (mathjaxRef.value) {
        //         mathjaxRef.value.innerHTML = "";
        //         mathjaxRef.value.appendChild(math);
        //     }
        // });
        try {
            if (!props.latex) return;
            const node = await window.MathJax.tex2svg(props.previewLatex, {});
            const elsvg = node.firstElementChild;
            elsvg.removeAttribute("style");
            elsvg.removeAttribute("focusable");
            elsvg.removeAttribute("role");
            if (mathjaxRef.value) {
                mathjaxRef.value.innerHTML = "";
                mathjaxRef.value.appendChild(elsvg);
            }
        } catch (err) {
            console.log("渲染内容非法");
        }
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
