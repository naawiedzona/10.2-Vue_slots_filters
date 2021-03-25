<template>
    <div class="modalBootstrap">
      <!-- Modal -->
      <div class="modal appear" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="slot-header"></slot>
            </div>
            <div class="modal-body">
              <slot name="slot-body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="slot-footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script src="../scripts/modalBootstrap.js" scoped></script>
<style src="../styles/modalBootstrap.css" scoped></style>