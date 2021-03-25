<template>
  <div v-if="showModal">
    <ModalBootstrap>
        <template v-slot:slot-header>
              <h5 class="modal-title" id="exampleModalLabel">MoneyExchange</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </template>

          <template v-slot:slot-body>
              <h4>Cambio de moneda</h4>
            <input type="text" autofocus required v-model.number="change1">
            <p id="texto-modal">El cambio de {{change1 }}€ en dolares son {{ change1 | changeMoney }} </p>
        </template>

          <template v-slot:slot-footer>
          <button type="button" class="btn btn-outline-primary" @click="ToggleModal2">Aceptar</button>
        </template>
    </ModalBootstrap>
  </div>
  <div v-else>
            <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="ToggleModal">
    Hacer el cambio de moneda
    </button>
    <div class="mensajeFinal" v-if="isClosed">Has hecho el cambio de moneda</div>
  </div>
  
</template>

<script src="../scripts/padre.js"></script>
<style src="../styles/padre.css" scoped></style>