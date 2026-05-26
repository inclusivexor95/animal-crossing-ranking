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
        right: undefined,
        index: undefined
    },
    done: 0,
    total: 0,

    showLeaderboard: () => {

    },

    showVillagers: () => {
        if (app.comparisons.length) {
            const comparison = app.comparisons.pop();
            app.currentRating.left = comparison.left;
            app.currentRating.right = comparison.right;
            app.currentRating.index = comparison.cIndex;
            $("button#rating-left").text(app.currentRating.left);
            $("button#rating-right").text(app.currentRating.right);
        } else {
            app.showLeaderboard();
        }
    },

    getUpper: (villager, currentMap) => {
        const newHigher = Object.keys(app.ratings[villager]).filter(villagerRight => {
            return !currentMap[villagerRight] && (app.ratings[villager][villagerRight] === false);
        });

        if (newHigher.length) {
            newHigher.forEach(newVillager => {
                currentMap[newVillager] = true;
            });
            newHigher.forEach(newVillager => {
                app.getUpper(newVillager, currentMap);
            });
            return true;
        }
        return false;
    },

    getLower: (villager, currentMap) => {
        const newLower = Object.keys(app.ratings[villager]).filter(villagerLeft => {
            return !currentMap[villagerLeft] && (app.ratings[villager][villagerLeft] === true);
        });

        if (newLower.length) {
            newLower.forEach(newVillager => {
                currentMap[newVillager] = true;
            });
            newLower.forEach(newVillager => {
                app.getLower(newVillager, currentMap);
            });
            return true;
        }
        return false;
    },

    recalc: (higher, lower, cIndex) => {
        const belowLower = {};
        const aboveHigher = {};
        const foundBelow = app.getLower(lower, belowLower);
        const foundAbove = app.getUpper(higher, aboveHigher);

        if (foundBelow) {
            Object.keys(belowLower).forEach(below => {
                app.recordPartRating(higher, below, "left", cIndex);
                // app.ratings[higher][below] = true;
                // app.ratings[below][higher] = false;
            });
        }
        if (foundAbove) {
            Object.keys(aboveHigher).forEach(above => {
                app.recordPartRating(lower, above, "right", cIndex);
                // app.ratings[lower][above] = false;
                // app.ratings[above][lower] = true;
            });
        }
        return foundAbove || foundBelow;
    },

    recordPartRating: (villagerLeft, villagerRight, leftRight, cIndex) => {
        const result = {
            left: villagerLeft,
            right: villagerRight,
            result: leftRight,
            index: cIndex
        };

        if (leftRight === "left") {
            app.ratings[villagerLeft][villagerRight] = true;
            app.ratings[villagerRight][villagerLeft] = false;
        } else if (leftRight === "right") {
            app.ratings[villagerLeft][villagerRight] = false;
            app.ratings[villagerRight][villagerLeft] = true;
        }
        app.ratingHistory.push(result);
        app.done++;
    },

    recordRating: (leftRight) => {
        let didRecalc;
        const villagerLeft = app.currentRating.left;
        const villagerRight = app.currentRating.right;
        app.recordPartRating(villagerLeft, villagerRight, leftRight, app.currentRating.cIndex);
        if (leftRight === "left") {
            didRecalc = app.recalc(villagerLeft, villagerRight, app.currentRating.cIndex);
        } else if (leftRight === "right") {
            didRecalc = app.recalc(villagerRight, villagerLeft, app.currentRating.cIndex);
        }
        app.save();
        if (didRecalc) {
            app.getComparisons();
        } else {
            app.updateProgress();
        }
        app.showVillagers();
    },

    updateProgress: () => {
        $("#done-message").text(`Done ${app.done} of ${app.total} ratings (${Math.round(app.done / app.total * 1000) / 10}%)`);
    },

    getComparisons: () => {
        const doneMap = {};
        app.done = 0;
        app.total = 0;
        allVillagers.forEach(villager => {
            doneMap[villager] = {};
        });
        allVillagers.forEach(villager1 => {
            allVillagers.forEach(villager2 => {
                if (villager2 !== villager1) {
                    if (!doneMap[villager1][villager2]) {
                        if (app.ratings[villager1][villager2] === undefined) {
                            app.comparisons.push({left: villager1, right: villager2, cIndex: app.total});
                        } else {
                            app.done++;
                        }
                        app.total++;
                        doneMap[villager1][villager2] = true;
                        doneMap[villager2][villager1] = true;
                    }
                }
            });
        });
        app.updateProgress();
    },

    undo: () => {
        if (app.ratingHistory.length) {
            // const rating = app.ratingHistory.pop();
            const cIndex = app.ratingHistory[app.ratingHistory.length - 1].index;
            const ratingIdxToRemove = app.ratingHistory.findIndex(rating => rating.index === cIndex);

            app.ratingHistory.splice(ratingIdxToRemove).forEach(rating => {
                app.ratings[rating.left][rating.right] = undefined;
                app.ratings[rating.right][rating.left] = undefined;
                app.comparisons.push({left: rating.left, right: rating.right, cIndex: rating.index});
                app.done--;
            });
            
            app.save();
            app.updateProgress();
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
                    app.ratings[villager] = data[villager];
                });
            }
        } catch(err) {
            console.error(err);
        }
    },

    initEvents: () => {
        $("button.ratingButton").on("click", (event) => {
            const leftRight = event.currentTarget.id.split("-")[1];
            app.recordRating(leftRight);
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
