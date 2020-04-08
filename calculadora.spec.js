const calculadora = require("./calculadora");

describe('calcular as espessões', ()=>{

    it('deve calcular 1+2', ()=>{
       let result = calculadora('1+2');

       expect(result).toEqual(3);
    });

    it('deve calcular 10+350', ()=>{
        let result = calculadora('10+350');
 
        expect(result).toEqual(360);
     });

     it('deve calcular 5+40+100', ()=>{
        let result = calculadora('5+40+100');
 
        expect(result).toEqual(145);
     });

     it('deve calcular 10-2', ()=>{
        let result = calculadora('10-2');
 
        expect(result).toEqual(8);
     });

     it('deve calcular -2+10', ()=>{
        let result = calculadora('-2+10');
 
        expect(result).toEqual(8);
     });

     it('deve calcular 10-2+40', ()=>{
        let result = calculadora('10-2+40');
 
        expect(result).toEqual(48);
     });

     it('deve calcular 2*4', ()=>{
        let result = calculadora('2*4');
 
        expect(result).toEqual(8);
     });

     it('deve calcular 10-2+40*2', ()=>{
        let result = calculadora('10-2+40*2');
 
        expect(result).toEqual(88);
     });

     it('deve calcular 10-2+40*2', ()=>{
        let result = calculadora('10-(2+40)*2');
 
        expect(result).toEqual(-74);
     });
});