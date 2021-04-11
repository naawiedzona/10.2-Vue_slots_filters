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
              <slot name="slot-body" v-bind="ChangeNumber(change1)" ></slot>
              <p id="texto-modal">El cambio de {{ euros }}€ en dolares son {{ euros | changeMoney }}$ </p>
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