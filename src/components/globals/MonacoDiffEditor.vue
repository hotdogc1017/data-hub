<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor'

const editorContainer = ref<HTMLElement | null>(null)

interface Props {
  original: object
  modified: object
}

const props = defineProps<Props>()

onMounted(() => {
  // 动态加载 monaco-editor，避免打包体积过大
  import('monaco-editor/esm/vs/editor/editor.api').then(() => {
    createDiffEditor(props.original, props.modified)
  })
})

onUnmounted(() => {
  if (editor) {
    editor.dispose()
  }
})

let editor: monaco.editor.IStandaloneDiffEditor | null = null

function createDiffEditor(original: any, modified: any) {
  if (editorContainer.value) {
    const originalModel = monaco.editor.createModel(JSON.stringify(original, null, '\t'), 'json')
    const modifiedModel = monaco.editor.createModel(JSON.stringify(modified, null, '\t'), 'json')

    editor = monaco.editor.createDiffEditor(editorContainer.value, {
      automaticLayout: true,
      readOnly: true,
      scrollbar: {
        arrowSize: 1,
        horizontalScrollbarSize: 1,
        horizontalSliderSize: 1,
        verticalScrollbarSize: 1,
        verticalSliderSize: 1
      }
    })

    editor.setModel({
      original: originalModel,
      modified: modifiedModel
    })
  }
}
</script>

<template>
  <div
    ref="editorContainer"
    class="container h-full w-full !border-primary shadow-orange-500"
  ></div>
</template>

<style>
.container .monaco-diff-editor {
  border: 1px solid #33691f;
  height: fit-content;
}
</style>
