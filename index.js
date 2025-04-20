const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/npc', (req, res) => {
  const sampleNpc = {
    name: "Thalwen Duskwalker",
    race: "Moon Elf",
    class: "Whisperblade (Rogue/Wizard)",
    age: "174 – young adult by elven standards",
    location: "Myrundyil, veiled forest-city of central Rhycullun",
    role: "Nightwarden of the Twilight Council",
    personality: "Quiet, watchful, dry-witted. Dislikes unnecessary cruelty.",
    appearance: "Silver hair bound in moonstone clasps, lavender-toned skin, twilight eyes.",
    aesthetic: "Shimmering like a ghost in the fog — both unseen and unforgettable."
  };

  res.json(sampleNpc);
});

app.listen(PORT, () => {
  console.log(`Eluvemar NPC Generator is running on port ${PORT}`);
});
