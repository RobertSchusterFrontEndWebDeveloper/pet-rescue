const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPet = function(name, breed) {
  const pet = {
    name: name,
    breed: breed,
    isTired: 5, // spans 1 to 10(most tired)

    // test for sleep
    sleep: function() {
      console.log(`$(this.name) needs a nap. Zzz...`);
      this.isTired = 1;
    },
    //test for tiredness
    play: function(){
      if(this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! $(this.name) loves to play!`);
        this.isTired +=1;
      }
    }
  };

  return pet;
};

// declare pets
const megan = createPet("Megan", "Border Collie");
const max = createPet("Max", "Bull Dog");
const baxter = createPet("Baxter", "German Shepard");
const janie = createPet("Janie", "Schnauzer");
const belle = createPet("Belle", "Chihauhua");
const toby = createPet("Toby", "Chow Chow" );
const chewey = createPet("Chewey", Newfoundland);

let allPets = [megan, max, baxter, janie, belle, toby, chewey];

// show pets in browser
const showPets = function (petArray) {
  // start with empty list
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = " Ready to play!";
    if(pet.isTired >=7 {
      status = " is Sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `span class="pet-name">$(pet.name) </span> a $(pet.breed) is $(status)`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function(){
  showPets(allPets);
});
