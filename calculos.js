class sumar {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sumar() {
        return this.a + this.b;
    }
}
class restar {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    restar() {
        return this.a - this.b;
    }
}   
class multiplicar {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    multiplicar() {
        return this.a * this.b;
    }
}
class dividir {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    dividir() {
        return this.a / this.b;
    }
}
class resolver{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    resolver(){
        return this.a + this.b + this.c;
    }
}