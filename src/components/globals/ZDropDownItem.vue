<script lang="ts" setup></script>

<template>
  <div class="dropdown-item__container">
    <span>
      <div style="cursor: pointer">
        <slot></slot>
      </div>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-item__container {
  height: 30px;
  line-height: 30px;
  width: 100%;
  cursor: pointer;

  span {
    transition: color 0.3s;
  }
}

.dropdown-item__container:hover {
  :deep(a),
  span {
    color: var(--text-hover-color);
    transition: color 0.3s;
  }
}
</style>
