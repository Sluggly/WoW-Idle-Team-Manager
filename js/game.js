class Hero {
    constructor(name,spell,baseStamina,baseStrength,baseIntelligence) {
        this.name = name;
        this.level = 1;
        this.experience = 0;
        this.prestige = 0;
        this.items = [];
        this.spell = spell;
        this.currentHealth;
        this.baseStamina = baseStamina;
        this.baseStrength = baseStrength;
        this.baseIntelligence = baseIntelligence;
    }
}

class Spell {
    constructor(name) {
        this.name = name;
    }
}

class Compte {
    constructor() {
        this.heroList = []; // Liste des heros unlock du joueur
        this.teamList = []; // Liste des teams créée par le joueur
    }

    saveFile(output) {

    }

    loadSave(file) {

    }
}

class Zone {
    constructor() {

    }
}

class Item {
    constructor() {

    }
}

class Team {
    constructor() {
        this.heroList = [];
    }

    addHero(hero) {
        this.heroList.push(hero);
    }

    removeHero(hero) {
        this.heroList.splice(this.heroList.indexOf(hero),1);
    }

}