<template>
    <div class="modalBootstrap">
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="ShowModal">
 Hacer el cambio de moneda
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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