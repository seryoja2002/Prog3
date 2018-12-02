class Monster extends Kendanieak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 15;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    /*bazmanal() {
        if (this.energy == 15) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var norMonster = new Monster(norVandak[0], norVandak[1]);
                monster.push(norMonster);
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.energy--;
                this.multiply = 0;
            }
        }
    }*/
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var c in monster) {
                if (monster[c].x == this.x && monster[c].y == this.y) {
                    monster.splice(c, 1);
                }
            }
        }
    }
}






class MonsterEg extends Kendanieak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 15;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3.1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 15) {
            var norVandak = random(this.yntrelVandak(3));
            if (norVandak) {
                var norMonsterEg = new MonsterEg(norVandak[0], norVandak[1]);
                monsterEg.push(norMonsterEg);
                if (Math.random() < 0.5) {

                    matrix[norVandak[1]][norVandak[0]] = 3.1;
                }
                else {
                    matrix[norVandak[1]][norVandak[0]] = 3;
                }
                this.energy--;
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3.1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var c in MonsterEg) {
                if (monsterEg[c].x == this.x && monsterEg[c].y == this.y) {
                    monsterEg.splice(c, 1);
                }
            }
        }
    }
}