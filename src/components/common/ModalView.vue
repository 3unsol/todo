<template>
  <transition name="modal" appear>
    <div class="modal_dim" @click.self="$emit('close')">
      <div class="modal_content">
        <p class="modal_text">
          <slot name="modal-text"></slot>
        </p>
        <button class="modal_close" @click="$emit('close')">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style></style>
