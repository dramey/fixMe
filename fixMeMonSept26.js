// You will use this Object for the answers
// DO NOT CHANGE THIS SECTION
var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}

// MAKE CHANGES AFTER THIS

// This function lists all characters in the party
function listCharacters(wizard) {
    console.log("Characters:");
    var name = adventuringParty.wizard.name
    for(i in wizard) {
        console.log(" * " + wizard[i].name); 
}
}


// This function should list all weapons for the character
var listWeapons = function(character) {
    console.log("Listing weapons for " + character.name);
    for(var i in character.weapons) {
        var weapon = character.weapons[i];
        console.log(" *"  + weapon.name);
    }
}

// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon

function weaponAttack(character, weaponName) {
    console.log(character + " attacks with his " + weaponName);
    var maxDamage = 0;
    if(weaponName == "Axe"){
        maxDamage = adventuringParty.warrior.weapons[0].damage;
       var randomDamage = Math.round( Math.random() * maxDamage ); 
    } else if(weaponName == "Staff"){
            maxDamage = adventuringParty.wizard.weapons[0].damage;
            var randomDamage = Math.round( Math.random() * maxDamage )
        }

    console.log("He hits for " + randomDamage + " damage");
}


// Run the functions
listCharacters(adventuringParty);
listWeapons(adventuringParty.wizard);
listWeapons(adventuringParty.warrior);
weaponAttack("Conan", "Axe");
weaponAttack("Gandalf", "Staff");


/*
EXAMPLE OUTPUT:


Characters:                                                                                                                                                                                                  
 * Gandalf                                                                                                                                                                                                   
 * Conan                                                                                                                                                                                                     
Listing weapons for Gandalf:                                                                                                                                                                                 
 * Staff                                                                                                                                                                                                     
 * Dagger                                                                                                                                                                                                    
Listing weapons for Conan:                                                                                                                                                                                   
 * Axe                                                                                                                                                                                                       
 * Bow                                                                                                                                                                                                       
Conan attacks with his axe                                                                                                                                                                                   
He hits for 17 damage                                                                                                                                                                                        
Gandalf attacks with his STAFF                                                                                                                                                                               
He hits for 3 damage         
 */
