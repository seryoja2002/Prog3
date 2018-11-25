var socket = io.connect();

var days = 1;
var weather;
var time;
var m = 40;
var n = 50;
//var matrix = [];
/*for (var i = 0; i < m; i++) {
    matrix.push([]);
}

for (var a = 0; a < n; a++) {
    for (var x = 0; x < m; x++) {
        matrix[x].push(Math.round(Math.random() * 5));
    }
}*/

var matrix = [
    [3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2.1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2.1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 4, 4, 0, 0, 3.1, 3.1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [2, 2, 0, 0, 0, 0, 2.1, 2.1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
];


var side  = 20;
var grassArr = [];
var xotaker = [];
var monster = [];
var lion = [];
var gigant = [];
var allEater =[];
var xotakerEg = [];
var monsterEg = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 2.1) {
                xotakerEg.push(new  XotakerEg(x, y, 2.1))
            } 
            else if (matrix[y][x] == 3) {
                monster.push(new Monster(x, y, 3));
            }
            else if (matrix[y][x] == 3.1) {
                monsterEg.push(new MonsterEg(x, y, 3.1));
            }
            else if (matrix[y][x] == 4) {
                lion.push(new Lion(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                gigant.push(new Gigant(x, y, 5));
            }
            /*else if (matrix[y][x] == 6) {
                allEater.push(new AllEater(x, y, 6));
            }*/
        }
    }
}
var statistics;
function draw() {

    if (frameCount % 500 == 0) {
        
        statistics = {
            "Frame count": frameCount,
            "Խոտերի քանակ՝ ": grassArr.length,
            "Խոտակերների քանակ՝ ": xotaker.length,
            "Մոնստերների քանակ՝ ": gishatich.length,
            "Առյուծների քանակ՝ ": lion.length,
            "Գիգանտների քանակ՝ ": gigant.length,
            "Ամենակերների քանակ ՝ ": allEater.length
        }
        socket.emit("send statistics", statistics);
    }

    days++;
    time++;
    if (days < 10) {
        weather = 1;
        document.getElementById("weather").innerHTML = "Ձմեռ է";
    }
    else if (days >= 10 && days < 20) {
        weather = 2;
        document.getElementById("weather").innerHTML = "Գարուն է";
    }
    else if (days >= 20 && days < 30) {
        weather = 3;
        document.getElementById("weather").innerHTML = "Ամառ է";
    }
    else if (days >= 30 && days < 40) {
        weather = 4;
        document.getElementById("weather").innerHTML = "Աշուն է";
    }
    else if (days > 40) {
        days = 0;
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (weather == 1) {
                    fill("white");
                }
                else if (weather == 2) {
                    fill("green");
                }
                else if (weather == 3) {
                    fill("green");
                }
                else if (weather == 4) {
                    fill("#cc9900");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.1) {
                fill("#ffffb3");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.1) {
                fill("#404BFF");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("red")
                rect(x * side, y * side, side, side);
            }
            /*else if (matrix[y][x] == 6) {
                fill("orange")
                rect(x * side, y * side, side, side);
            }*/
        }
    }
    if (time == 10) {
        for (var i in xotaker) {
            xotaker[i]
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotaker) {
        xotaker[i].sharjvel();
        xotaker[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotaker[i].x && grassArr[c].y == xotaker[i].y) {
                grassArr.splice(c, 1);
            }
        }
        xotaker[i].mahanal();
    }

    for (var i in xotakerEg) {
        xotakerEg[i].sharjvel();
        xotakerEg[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotakerEg[i].x && grassArr[c].y == xotakerEg[i].y) {
                grassArr.splice(c, 1);
            }
        }
        xotakerEg[i].bazmanal();
        xotakerEg[i].mahanal();
    }

    for (var i in monster) {
        monster[i].sharjvel();
        monster[i].utel();
        for (var c in xotaker) {
            if (xotaker[c].x == monster[i].x && xotaker[c].y == monster[i].y) {
                xotaker.splice(c, 1);
            }
        }
        monster[i].mahanal();
    }

    for (var i in monsterEg) {
        monsterEg[i].sharjvel();
        monsterEg[i].utel();
        for (var c in xotakerEg) {
            if (xotaker[c].x == monsterEg[i].x && xotaker[c].y == monsterEg[i].y) {
                xotaker.splice(c, 1);
            }
        }
        monsterEg[i].bazmanal();
        monsterEg[i].mahanal();
    }

    for (var i in lion) {
        lion[i].sharjvel();
        lion[i].bazmanal();
        lion[i].utel();
        for (var c in monster) {
            if (monster[c].x == lion[i].x && monster[c].y == lion[i].y) {
                monster.splice(c, 1);
            }
        }
        lion[i].mahanal()
    }
    for (var i in gigant) {
        gigant[i].sharjvel();
        gigant[i].utel();
        for (var c in lion) {
            if (lion[c].x == gigant[i].x && lion[c].y == gigant[i].y) {
                lion.splice(c, 1);
            }
        }
        gigant[i].bazmanal();
    }
    /*for (var i in allEater) {
        allEater[i].sharjvel();
        allEater[i].utel();
    }*/
}
