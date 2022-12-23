<template>
    <div class="editor-container">
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
