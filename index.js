let saldoRank = vitoriasDerrotas(100, 5)

function vitoriasDerrotas(X, Y){
    let resultado = X - Y
    return resultado
}

switch (true){
    case (saldoRank <= 10):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de ferro")
    break

    case (saldoRank >= 11 && saldoRank <= 20):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de bronze")
    break

    case (saldoRank >= 21 && saldoRank <= 50):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de prata")
    break

    case (saldoRank >= 51 && saldoRank <= 80):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de ouro")
    break

    case (saldoRank >= 81 && saldoRank <= 90):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de diamante")
    break

    case (saldoRank >= 91 && saldoRank <= 100):
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de lendario")
    break

    default:
    console.log("O Herói tem de saldo de " + saldoRank + " está no nível de imortal")
    break

    
}
