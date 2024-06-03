const categoria = prompt('Digite seu cargo')
categoria.toUpperCase()
let idade = ''

switch (categoria) {
    case 'A':
        console.log('A = 5 anos a 7 anos de idade')
        break;
    case 'B':
        console.log('B = 8 anos a 11 anos de idade')
        break;
    case 'C':
        console.log('C = 12 anos a 13 anos de idade')
        break;
    case 'D':
        console.log('D = 14 anos a 17 anos de idade')
        break;
    case 'E':
        console.log('E = você já é maior de idade 18 anos')
        break;
    default:
        console.log('Categoria inválida')
        break;
}
