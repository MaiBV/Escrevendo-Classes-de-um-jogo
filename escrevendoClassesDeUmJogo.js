class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      const attacks = {
        mago: "magia",
        guerreiro: "espada",
        monge: "artes marciais",
        ninja: "shuriken"
      };
      const attack = attacks[this.type] || "usou um ataque desconhecido";
      console.log(`o ${this.type} atacou usando ${attack}`);
    }
}
const hero1 = new Hero("Gandalf", 1000, "mago");
hero1.attack(); // output: o mago atacou usando usou magia

const hero2 = new Hero("Aragorn", 30, "guerreiro");
hero2.attack(); // output: o guerreiro atacou usando usou espada

const hero3 = new Hero("Kung Fu", 25, "monge");
hero3.attack(); // output: o monge atacou usando usou artes marciais

const hero4 = new Hero("Naruto", 20, "ninja");
hero4.attack(); // output: o ninja atacou usando usou shuriken