<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor'

const editorContainer = ref<HTMLElement | null>(null)

interface Props {
  original: string
  modified: string
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

function createDiffEditor(originalJSON: string, modifiedJSON: string) {
  if (editorContainer.value) {
    const originalModel = monaco.editor.createModel(originalJSON, 'json')
    const modifiedModel = monaco.editor.createModel(modifiedJSON, 'json')

    editor = monaco.editor.createDiffEditor(editorContainer.value, {
      automaticLayout: true
    })

    editor.setModel({
      original: originalModel,
      modified: modifiedModel
    })
  }
}
</script>

<template>
  <div ref="editorContainer" class="monaco-diff-editor"></div>
</template>

<style>
.monaco-diff-editor {
  width: 100%;
  height: 100%;
}
</style>
