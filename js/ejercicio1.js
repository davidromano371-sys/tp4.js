//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

//Output:

//objeto.encender();
//objeto.apagar()
//auto encendido
//El auto se apagó

const auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
    encender: function() {
        this.encendido = true;
        console.log("auto encendido");
        texto.innerText += "El auto está encendido";
    },
    apagar: function() {
        this.encendido = false;
        console.log("El auto se apagó");
        texto.innerText += "El auto se apagó";
    },
};

let texto = document.getElementById("pantalla");

auto.encender();
auto.apagar();
