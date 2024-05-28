<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as monaco from 'monaco-editor'

const editorContainer = ref<HTMLElement | null>(null)

interface Props {
  original: any
  modified: any
}

const props = defineProps<Props>()

watch([() => props.original, () => props.modified], () => {
  if (editor) {
    editor.dispose()
  }
  loadEditor()
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

const loadEditor = () => {
  import('monaco-editor/esm/vs/editor/editor.api').then(() => {
    createDiffEditor(props.original, props.modified)
  })
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
