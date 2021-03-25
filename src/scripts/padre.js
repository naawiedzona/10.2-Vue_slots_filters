import ModalBootstrap from "../components/ModalBootstrap.vue";
export default {
  data() {
    return {
      change1: "",
      showModal: false,
    };
  },
  components: {
    ModalBootstrap,
  },
  filters: {
    changeMoney(value) {
      return (value * 1.23).toFixed(2);
    },
  },
  methods: {
    ToggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
