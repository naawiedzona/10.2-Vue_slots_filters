<template>
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
        <button type="button" class="btn btn-outline-primary" v-on:click="CloseModal">Aceptar</button>
       </template>
   </ModalBootstrap>
</template>

<script src="../scripts/padre.js"></script>
<style src="../styles/padre.css" scoped></style>