export default {
  methods: {
    ShowModal() {
      document.querySelector(".modal").className += " appear";
      document.querySelector(".btn-close").innerText = "x";
    },
  },
};
