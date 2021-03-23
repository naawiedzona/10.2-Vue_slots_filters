import ModalBootstrap from '../components/ModalBootstrap.vue';
export default {
  data() {
    return {
      change1: ""
    }
  },
    components: {
    ModalBootstrap
  },
  filters:{
    changeMoney(value)
    {
      return(value*1.23).toFixed(2)
    }
  },
  methods:{
    CloseModal(){
      document.querySelector(".modal").remove("appear");
      document.querySelector(".btn")

    }
  }
}