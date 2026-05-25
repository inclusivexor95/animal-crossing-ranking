const allVillagers = [
'Ace',
'Admiral',
'Agent S',
'Agnes',
'Al',
'Alfonso',
'Alice',
'Alli',
'Amelia',
'Anabelle',
'Anchovy',
'Angus',
'Anicotti',
'Ankha',
'Annalisa',
'Annalise',
'Antonio',
'Apollo',
'Apple',
'Astrid',
'Audie',
'Aurora',
'Ava',
'Avery',
'Axel',
'Azalea',
'Baabara',
'Bam',
'Bangle',
'Barold',
'Bea',
'Beardo',
'Beau',
'Becky',
'Bella',
'Benedict',
'Benjamin',
'Bertha',
'Bettina',
'Bianca',
'Biff',
'Big Top',
'Bill',
'Billy',
'Biskit',
'Bitty',
'Blaire',
'Blanche',
'Bluebear',
'Bob',
'Bonbon',
'Bones',
'Boomer',
'Boone',
'Boots',
'Boris',
'Boyd',
'Bree',
'Broccolo',
'Broffina',
'Bruce',
'Bubbles',
'Buck',
'Bud',
'Bunnie',
'Butch',
'Buzz',
'Cally',
'Camofrog',
'Canberra',
'Candi',
'Carmen',
'Caroline',
'Carrie',
'Cashmere',
'Celia',
'Cephalobot',
'Cesar',
'Chabwick',
'Chadder',
'Chai',
'Charlise',
'Chelsea',
'Cheri',
'Cherry',
'Chester',
'Chevre',
'Chief',
'Chops',
'Chow',
'Chrissy',
'Claude',
'Claudia',
'Clay',
'Cleo',
'Clyde',
'Coach',
'Cobb',
'Coco',
'Cole',
'Colton',
'Cookie',
'Cousteau',
'Cranston',
'Croque',
'Cube',
'Curlos',
'Curly',
'Curt',
'Cyd',
'Cyrano',
'Daisy',
'Deena',
'Deirdre',
'Del',
'Deli',
'Derwin',
'Diana',
'Diva',
'Dizzy',
'Dobie',
'Doc',
'Dom',
'Dora',
'Dotty',
'Drago',
'Drake',
'Drift',
'Ed',
'Egbert',
'Elise',
'Ellie',
'Elmer',
'Eloise',
'Elvis',
'Erik',
'Étoile',
'Eugene',
'Eunice',
'Faith',
'Fang',
'Fauna',
'Felicity',
'Filbert',
'Flip',
'Flo',
'Flora',
'Flurry',
'Francine',
'Frank',
'Freckles',
'Frett',
'Freya',
'Friga',
'Frita',
'Frobert',
'Fuchsia',
'Gabi',
'Gala',
'Gaston',
'Gayle',
'Genji',
'Gigi',
'Gladys',
'Gloria',
'Goldie',
'Gonzo',
'Goose',
'Graham',
'Greta',
'Grizzly',
'Groucho',
'Gruff',
'Gwen',
'Hamlet',
'Hamphrey',
'Hans',
'Harry',
'Hazel',
'Henry',
'Hippeux',
'Hopkins',
'Hopper',
'Hornsby',
'Huck',
'Hugh',
'Iggly',
'Ike',
'Ione',
'Jacob',
'Jacques',
'Jambette',
'Jay',
'Jeremiah',
'Jitters',
'Joey',
'Judy',
'Julia',
'Julian',
'June',
'Kabuki',
'Katt',
'Keaton',
'Ken',
'Ketchup',
'Kevin',
'Kid Cat',
'Kidd',
'Kiki',
'Kitt',
'Kitty',
'Klaus',
'Knox',
'Kody',
'Kyle',
'Leonardo',
'Leopold',
'Lily',
'Limberg',
'Lionel',
'Lobo',
'Lolly',
'Lopez',
'Louie',
'Lucha',
'Lucky',
'Lucy',
'Lyman',
'Mac',
'Maddie',
'Maelle',
'Maggie',
'Mallary',
'Maple',
'Marcel',
'Marcie',
'Margie',
'Marina',
'Marlo',
'Marshal',
'Marty',
'Mathilda',
'Megan',
'Melba',
'Merengue',
'Merry',
'Midge',
'Mint',
'Mira',
'Miranda',
'Mitzi',
'Moe',
'Molly',
'Monique',
'Monty',
'Moose',
'Mott',
'Muffy',
'Murphy',
'Nan',
'Nana',
'Naomi',
'Nate',
'Nibbles',
'Norma',
'Octavian',
"O'Hare",
'Olaf',
'Olive',
'Olivia',
'Opal',
'Ozzie',
'Pancetti',
'Pango',
'Paolo',
'Papi',
'Pashmina',
'Pate',
'Patty',
'Paula',
'Peaches',
'Peanut',
'Pecan',
'Peck',
'Peewee',
'Peggy',
'Pekoe',
'Penelope',
'Petri',
'Phil',
'Phoebe',
'Pierce',
'Pietro',
'Pinky',
'Piper',
'Pippy',
'Plucky',
'Pompom',
'Poncho',
'Poppy',
'Portia',
'Prince',
'Puck',
'Puddles',
'Pudge',
'Punchy',
'Purrl',
'Queenie',
'Quillson',
'Quinn',
'Raddle',
'Rasher',
'Raymond',
'Renée',
'Reneigh',
'Rex',
'Rhonda',
'Ribbot',
'Ricky',
'Rilla',
'Rio',
'Rizzo',
'Roald',
'Robin',
'Rocco',
'Rocket',
'Rod',
'Rodeo',
'Rodney',
'Rolf',
'Rooney',
'Rory',
'Roscoe',
'Rosie',
'Roswell',
'Rowan',
'Ruby',
'Rudy',
'Sally',
'Samson',
'Sandy',
'Sasha',
'Savannah',
'Scoot',
'Shari',
'Sheldon',
'Shep',
'Sherb',
'Shino',
'Simon',
'Skye',
'Sly',
'Snake',
'Snooty',
'Soleil',
'Sparro',
'Spike',
'Spork',
'Sprinkle',
'Sprocket',
'Static',
'Stella',
'Sterling',
'Stinky',
'Stitches',
'Stu',
'Sydney',
'Sylvana',
'Sylvia',
'Tabby',
'Tad',
'Tammi',
'Tammy',
'Tangy',
'Tank',
'Tasha',
'T-Bone',
'Teddy',
'Tex',
'Tia',
'Tiansheng',
'Tiffany',
'Timbra',
'Tipper',
'Toby',
'Tom',
'Truffles',
'Tucker',
'Tutu',
'Twiggy',
'Tybalt',
'Ursala',
'Velma',
'Vesta',
'Vic',
'Victoria',
'Violet',
'Vivian',
'Vladimir',
'Wade',
'Walker',
'Walt',
'Wart Jr.',
'Weber',
'Wendy',
'Whitney',
'Willow',
'Winnie',
'Wolfgang',
'Yuka',
'Zell',
'Zoe',
'Zucker'
];




const app = {
    ratings: {

    },
    ratingHistory: [],
    comparisons: [],
    currentRating: {
        left: undefined,
        right: undefined
    },

    showLeaderboard: () => {
        
    },

    showVillagers: () => {
        if (app.comparisons.length) {
            const comparison = app.comparisons.pop();
            app.currentRating.left = comparison.left;
            app.currentRating.right = comparison.right;
            $("button#rating-left").text(app.currentRating.left);
            $("button#rating-right").text(app.currentRating.right);
        } else {
            app.showLeaderboard();
        }
    },

    recordRating: (leftRight) => {
        const villagerLeft = app.currentRating.left;
        const villagerRight = app.currentRating.right;
        const result = {
            left: villagerLeft,
            right: villagerRight,
            result: leftRight
        };

        if (leftRight === "left") {
            app.ratings[villagerLeft][villagerRight] = true;
            app.ratings[villagerRight][villagerLeft] = false;
        } else if (leftRight === "right") {
            app.ratings[villagerLeft][villagerRight] = false;
            app.ratings[villagerRight][villagerLeft] = true;
        }
        app.ratingHistory.push(result);
        app.save();
        app.showVillagers();
    },

    getComparisons: () => {
        const doneMap = {};
        allVillagers.forEach(villager => {
            doneMap[villager] = {};
        });
        allVillagers.forEach(villager1 => {
            allVillagers.forEach(villager2 => {
                if (villager2 !== villager1) {
                    if (!doneMap[villager1][villager2]) {
                        if (app.ratings[villager1][villager2] === undefined) {
                            app.comparisons.push({left: villager1, right: villager2});
                        }
                        doneMap[villager1][villager2] = true;
                        doneMap[villager2][villager1] = true;
                    }
                }
            });
        });
    },

    undo: () => {
        if (app.ratingHistory.length) {
            const rating = app.ratingHistory.pop();
            app.ratings[rating.left][rating.right] = undefined;
            app.ratings[rating.right][rating.left] = undefined;
            app.comparisons.push({left: rating.left, right: rating.right});
            app.save();
            app.showVillagers();
        }
    },

    save: () => {
        localStorage.setItem("acnhSab", JSON.stringify(app.ratings));
    },

    load: () => {
        let data;
        try {
            data = JSON.parse(localStorage.getItem("acnhSab"));
            if (data) {
                allVillagers.forEach(villager => {
                    ratings[villager] = data[villager];
                });
            }
        } catch(err) {
            console.error(err);
        }
    },

    initEvents: () => {
        $("button.ratingButton").on("click", (event) => {
            const leftRight = event.currentTarget.id.split("-")[1];
        });
    },

    init: () => {
        const leaderboardHtml = allVillagers.reduce((total, villager, vIndex) => {
            app.ratings[villager] = {};
            return total + `<p class='leaderboardSpot' id='leaderboard-${vIndex + 1}'>${vIndex + 1}.</p>`;
        }, "");
        // $("div#leaderBoard").append(leaderboardHtml);
        app.load();
        app.getComparisons();
        app.initEvents();
        app.showVillagers();
    }
};

$(document).ready(() => {
    app.init();
});
