var traffic_lights = "red";

// case dengan nama "red" dan mencetak cetak string menggunakan console "berhenti"
// case dengan nama "yellow" dan mencetak cetak string menggunakan console "hati-hati"
// case dengan nama "green" dan mencetak cetak string menggunakan console "berjalan"
// output : "berhenti"
switch (traffic_lights) {
  case "red": {
    console.log("berhenti");
    break;
  }
  case "yellow": {
    console.log("hati-hati");
    break;
  }
  case "green": {
    console.log("berjalan");
    break;
  }
  default: {
    console.log("status tidak dikenal");
    break;
  }
}
