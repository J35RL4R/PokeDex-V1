# PokeDex
## Overview

This application combines information from the Pokemon API and PokemonGo API for users can find all information about a pokemon in one easy to use online Pokedex. Using Javascript, HTML and CSS, we re-created a Pokedex that shows the following infomration: Pokemon Sprites, a fun giphy, Pokemon type, height, weight, physical stats, moves and abilities, PokemonGo stats, and evolution information. 


## Description
* **[View the deployed PokeDex application]()**
https://j35rl4r.github.io/PokeDex-V1/ 

Building an HTML outline was the first step in creating our PodexDex. This allowed us to visualize a format for the web application, understand what statistics to pull and how our page will work logistically. 

Next, our team focused on the Javascript and making sure that we could pull corresponding information from each API. To get specific information for the pokemon entered, a variable was create to house that pokemon name after the user entered the name into the search bar. With the variable holding the pokemon's name, we were then easily able to match the PokeAPI and Giphy API to the corresponding information. 

The Pokemon GO API was a bit more difficult to match directly to the pokemon variable becuase the information was not sorted by pokemon, but rather just an array holding informaiton such as the pokemon name. Using a for-loop, we were able to iterate through the array with if-statements and create a sitution that would deliver us Pokemon stats.  Although from the same API, the evolution information and candy had to be pulled from another call function but managed the same way through a for-loop to get to the pokemon name with corresponding if-then statements. 

After ensuring all our APIs were calling correctly, we worked on formatting the document to be presented like a pokemon card. Originally we had wanted to create HTML elements dynamically in Javascript, but due to the capabilities in Bulma we had to create the card elements in HTML. After we created all the elements, we found that search multiple pokemon cause each one to stack on each other. Using a clear all function, we were able to easily remove information from the previous pokemon and not have them overlap. 

Finally, we worked on adding local storage so that the user is able to easily select a previously searched pokemon. To match the original PokeDex, the previous pokemon show up as yellow buttons above the card. 



## PokeDex Application Screen Shot
#### Homepage
<img src="images/PokeDex Main 01.jpg" alt="PokeDex Main Page">

#### Pokemon Search
<img src="https://qmcxyq.dm.files.1drv.com/y4mjvGzfFcuFQ78g1zzy6BftUIn6Mlny5DbQpCPO--nGBv9_6IWXnPO7v4OIs9kMLz5P_LE7_uOCLubMBRKnb93furKQUAEp0Bj4nMhPlZRhNcu_aKc8YpzpsK0rBOZpzBh3zr4l7J3YMq-KTu0Zx2HNKvV-OD512acD65t6vg0ZYw3ckjiQTfIcPIsGfil36cXbxDW-8TeXgk2P1iqbJzAjA?width=1051&height=902&cropmode=none" alt="showing GIFs, Sprite Image, and other information">

## Built With
* [Bulma](https://bulma.io/) - Open Source CSS framework 
* [RapidAPI](https://rapidapi.com/chewett/api/pokemon-go1) - Database detailing about PokemonGo game (Stats from Normal, Purified, and Shadow Pokemon, and Evolution Information)
* [Giphy API](https://developers.giphy.com/) - Pokemon GIFs 
* [PokeAPI](https://pokeapi.co/) - Extensive database detailing everything about the General Pokemon game series (Physical Stats, Moves, Abilities, Height, Weight and Type)

## Contributors
* **Jesse Larsen** - Project Reviewer, Javascript, HTML, CSS, Bulma
* **Krista Meiers** - Project Coordinator, Javascript, CSS, ReadMe
* **Brandon Ryu** - CSS, ReadME
* **Jarrett Williams** - Javascript, Presentation
