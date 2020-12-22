<template>
  <div class="w3-row-padding">
    <div class="w3-half">
      <!------------------- HTTP POST  ---------------------->
      <form target="_blank">
        <div class="">
          <p>
            <label class="w3-label">Nom</label>
            <input
              class="w3-input w3-border w3-round"
              type="text"
              required
              name="Name"
              v-model="userName"
            />
          </p>
          <p>
            <label>Prénom</label>
            <input
              class="w3-input w3-border w3-round"
              type="text"
              required
              name="Prenom"
              v-model="userFirstName"
            />
          </p>
          <p>
            <label>Adresse mail</label>
            <input
              class="w3-input w3-border w3-round"
              type="email"
              required
              name="email"
              v-model="userMail"
            />
          </p>
          <p>
            <label>Message</label>
            <input
              class="w3-input w3-border w3-round"
              style="height: 10em"
              type="text"
              required
              name="Message"
            />
          </p>
        </div>

        <p>
          <button
            class="w3-button w3-border w3-black"
            @click="
              submit();
            "
          >
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
    <!------------------- API A LA RECHERCHE DE L'ISS  ---------------------->
    <div class="w3-half w3-center w3-container w3-col l4 m6 w3-padding">
      <h2 style="margin-rigth:10%">Au fait, si vous aussi vous avez perdu l'ISS, ne la cherchez plus, je l'ai retrouvée ! </h2>
      <h4>{{ iss }}</h4>
      <img class="w3-round" :src="issImg"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      userName: "",
      iss: "",
      issImg:require("../assets/iss.jpeg"),
      userFirstName: "",
      userMail: "",
    };
  },
  methods: {
    // METHODE OU L'ON RECUPERE LES INPUT DES UTILISATEURS
    submit() {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .post(
          "http://localhost:8888/form.php",
          "nom=" +
            this.userName +
            "&prenom=" +
            this.userFirstName +
            "&mail=" +
            this.userMail
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // API POUR LA POSITION DE L'ISS (PRESQUE) EN TEMPS REEL
    getISS() {
      axios.get("http://api.open-notify.org/iss-now.json").then((data) => {
        let longitude;
        let latitude;
        console.log(data.data);
        longitude = data.data.iss_position.longitude;
        latitude = data.data.iss_position.latitude;
        this.iss = "Longitude : " + longitude + "\n Latitude : " + latitude;
      });
    },
  },
  computed: {},
  mounted() {
  setInterval(this.getISS, 100);
  },
};
</script> 

<style scoped>
input,
label {
  margin-left: 60px;
  width: 60%;
}
button {
  margin-left: 60px;
}
</style>