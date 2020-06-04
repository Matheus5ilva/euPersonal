{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js" integrity="sha384-THVO/sM0mFD9h7dfSndI6TS0PgAGavwKvB5hAxRRvc0o9cPLohB0wb/PTA7LdUHs" crossorigin="anonymous"></script> */ }
class Avaliacao {
    constructor(nome, sexo, idade, peso, altura, peitoral, abdominal, coxa, data) {
        this.nome = nome
        this.sexo = sexo
        this.idade = idade
        this.peso = parseFloat(peso.replace(',', '.'))
        this.altura = parseFloat(altura.replace(',', '.'))
        this.peitoral = parseFloat(peitoral.replace(',', '.'))
        this.abdominal = parseFloat(abdominal.replace(',', '.'))
        this.coxa = parseFloat(coxa.replace(',', '.'))
        this.data = new Date(data)
        this.dataT = this.data.setDate(this.data.getDate() + 1)
        this.dataV = this.data.toLocaleDateString("pt-BR")
        //Formulas para calculo pollock 3
        this.imc = (((this.peso / (this.altura * this.altura)) * 10000).toFixed(2))
        this.somatorio = parseInt(peitoral) + parseInt(abdominal) + parseInt(coxa)
        this.gordura = ((4.95 / ((1.10938 - (0.0008267 * this.somatorio) + (0.0000016 * (this.somatorio * this.somatorio)) - (0.0002574 * this.idade))) - 4.5) * 100)
        this.percentual = (((4.95 / ((1.10938 - (0.0008267 * this.somatorio) + (0.0000016 * (this.somatorio * this.somatorio)) - (0.0002574 * this.idade))) - 4.5) * 100).toFixed(2))
        this.pesoGordo = (((this.peso * this.gordura) / 100).toFixed(2))
        this.lbm = ((this.peso - this.pesoGordo).toFixed(2))
        this.type = "avaliação"
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Anotacao {
    constructor(titulo, tipo, dataA, horario, descricao) {
        this.titulo = titulo
        this.tipo = tipo
        this.dataA = new Date(dataA)
        this.dataAt = this.dataA.setDate(this.dataA.getDate() + 1)
        this.dataAn = this.dataA.toLocaleDateString("pt-BR")
        this.horario = horario
        this.descricao = descricao
        this.type = "anotação"
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Ficha {

    constructor(nomeAluno, nomePerso, objetivo, dataTreino,
        tipoTreino1, serieTreino1, exeTreino1, repTreino1, descTreino1, tipoTreino2, serieTreino2, exeTreino2, repTreino2, descTreino2,
        tipoTreino3, serieTreino3, exeTreino3, repTreino3, descTreino3, tipoTreino4, serieTreino4, exeTreino4, repTreino4, descTreino4,
        tipoTreino5, serieTreino5, exeTreino5, repTreino5, descTreino5, tipoTreino6, serieTreino6, exeTreino6, repTreino6, descTreino6,
        tipoTreino7, serieTreino7, exeTreino7, repTreino7, descTreino7, tipoTreino8, serieTreino8, exeTreino8, repTreino8, descTreino8,
        tipoTreino9, serieTreino9, exeTreino9, repTreino9, descTreino9, tipoTreino10, serieTreino10, exeTreino10, repTreino10, descTreino10,
        tipoTreino11, serieTreino11, exeTreino11, repTreino11, descTreino11, tipoTreino12, serieTreino12, exeTreino12, repTreino12, descTreino12,
        tipoTreino13, serieTreino13, exeTreino13, repTreino13, descTreino13, tipoTreino14, serieTreino14, exeTreino14, repTreino14, descTreino14,
        tipoTreino15, serieTreino15, exeTreino15, repTreino15, descTreino15, tipoTreino16, serieTreino16, exeTreino16, repTreino16, descTreino16,
        tipoTreino17, serieTreino17, exeTreino17, repTreino17, descTreino17, tipoTreino18, serieTreino18, exeTreino18, repTreino18, descTreino18,
        tipoTreino19, serieTreino19, exeTreino19, repTreino19, descTreino19, tipoTreino20, serieTreino20, exeTreino20, repTreino20, descTreino20,
        tipoTreino21, serieTreino21, exeTreino21, repTreino21, descTreino21, tipoTreino22, serieTreino22, exeTreino22, repTreino22, descTreino22,
        tipoTreino23, serieTreino23, exeTreino23, repTreino23, descTreino23, tipoTreino24, serieTreino24, exeTreino24, repTreino24, descTreino24,
        tipoTreino25, serieTreino25, exeTreino25, repTreino25, descTreino25, tipoTreino26, serieTreino26, exeTreino26, repTreino26, descTreino26,
        tipoTreino27, serieTreino27, exeTreino27, repTreino27, descTreino27, tipoTreino28, serieTreino28, exeTreino28, repTreino28, descTreino28,
        tipoTreino29, serieTreino29, exeTreino29, repTreino29, descTreino29, tipoTreino30, serieTreino30, exeTreino30, repTreino30, descTreino30,
        tipoTreino31, serieTreino31, exeTreino31, repTreino31, descTreino31, tipoTreino32, serieTreino32, exeTreino32, repTreino32, descTreino32,
        tipoTreino33, serieTreino33, exeTreino33, repTreino33, descTreino33, tipoTreino34, serieTreino34, exeTreino34, repTreino34, descTreino34,
        tipoTreino35, serieTreino35, exeTreino35, repTreino35, descTreino35, tipoTreino36, serieTreino36, exeTreino36, repTreino36, descTreino36,
    ) {
        this.nomeAluno = nomeAluno
        this.nomePerso = nomePerso
        this.objetivo = objetivo
        this.dataTreino = new Date(dataTreino)
        this.dataT = this.dataTreino.setDate(this.dataTreino.getDate() + 1)
        this.dataTn = this.dataTreino.toLocaleDateString("pt-BR")
        this.tipoTreino1 = tipoTreino1
        this.serieTreino1 = serieTreino1
        this.exeTreino1 = exeTreino1
        this.repTreino1 = repTreino1
        this.descTreino1 = descTreino1
        this.tipoTreino2 = tipoTreino2
        this.serieTreino2 = serieTreino2
        this.exeTreino2 = exeTreino2
        this.repTreino2 = repTreino2
        this.descTreino2 = descTreino2
        this.tipoTreino3 = tipoTreino3
        this.serieTreino3 = serieTreino3
        this.exeTreino3 = exeTreino3
        this.repTreino3 = repTreino3
        this.descTreino3 = descTreino3
        this.tipoTreino4 = tipoTreino4
        this.serieTreino4 = serieTreino4
        this.exeTreino4 = exeTreino4
        this.repTreino4 = repTreino4
        this.descTreino4 = descTreino4
        this.tipoTreino5 = tipoTreino5
        this.serieTreino5 = serieTreino5
        this.exeTreino5 = exeTreino5
        this.repTreino5 = repTreino5
        this.descTreino5 = descTreino5
        this.tipoTreino6 = tipoTreino6
        this.serieTreino6 = serieTreino6
        this.exeTreino6 = exeTreino6
        this.repTreino6 = repTreino6
        this.descTreino6 = descTreino6
        this.tipoTreino7 = tipoTreino7
        this.serieTreino7 = serieTreino7
        this.exeTreino7 = exeTreino7
        this.repTreino7 = repTreino7
        this.descTreino7 = descTreino7
        this.tipoTreino8 = tipoTreino8
        this.serieTreino8 = serieTreino8
        this.exeTreino8 = exeTreino8
        this.repTreino8 = repTreino8
        this.descTreino8 = descTreino8
        this.tipoTreino9 = tipoTreino9
        this.serieTreino9 = serieTreino9
        this.exeTreino9 = exeTreino9
        this.repTreino9 = repTreino9
        this.descTreino9 = descTreino9
        this.tipoTreino10 = tipoTreino10
        this.serieTreino10 = serieTreino10
        this.exeTreino10 = exeTreino10
        this.repTreino10 = repTreino10
        this.descTreino10 = descTreino10
        this.tipoTreino11 = tipoTreino11
        this.serieTreino11 = serieTreino11
        this.exeTreino11 = exeTreino11
        this.repTreino11 = repTreino11
        this.descTreino11 = descTreino11
        this.tipoTreino12 = tipoTreino12
        this.serieTreino12 = serieTreino12
        this.exeTreino12 = exeTreino12
        this.repTreino12 = repTreino12
        this.descTreino12 = descTreino12
        this.tipoTreino13 = tipoTreino13
        this.serieTreino13 = serieTreino13
        this.exeTreino13 = exeTreino13
        this.repTreino13 = repTreino13
        this.descTreino13 = descTreino13
        this.tipoTreino14 = tipoTreino14
        this.serieTreino14 = serieTreino14
        this.exeTreino14 = exeTreino14
        this.repTreino14 = repTreino14
        this.descTreino14 = descTreino14
        this.tipoTreino15 = tipoTreino15
        this.serieTreino15 = serieTreino15
        this.exeTreino15 = exeTreino15
        this.repTreino15 = repTreino15
        this.descTreino15 = descTreino15
        this.tipoTreino16 = tipoTreino16
        this.serieTreino16 = serieTreino16
        this.exeTreino16 = exeTreino16
        this.repTreino16 = repTreino16
        this.descTreino16 = descTreino16
        this.tipoTreino17 = tipoTreino17
        this.serieTreino17 = serieTreino17
        this.exeTreino17 = exeTreino17
        this.repTreino17 = repTreino17
        this.descTreino17 = descTreino17
        this.tipoTreino18 = tipoTreino18
        this.serieTreino18 = serieTreino18
        this.exeTreino18 = exeTreino18
        this.repTreino18 = repTreino18
        this.descTreino18 = descTreino18
        this.tipoTreino19 = tipoTreino19
        this.serieTreino19 = serieTreino19
        this.exeTreino19 = exeTreino19
        this.repTreino19 = repTreino19
        this.descTreino19 = descTreino19
        this.tipoTreino20 = tipoTreino20
        this.serieTreino20 = serieTreino20
        this.exeTreino20 = exeTreino20
        this.repTreino20 = repTreino20
        this.descTreino20 = descTreino20
        this.tipoTreino21 = tipoTreino21
        this.serieTreino21 = serieTreino21
        this.exeTreino21 = exeTreino21
        this.repTreino21 = repTreino21
        this.descTreino21 = descTreino21
        this.tipoTreino22 = tipoTreino22
        this.serieTreino22 = serieTreino22
        this.exeTreino22 = exeTreino22
        this.repTreino22 = repTreino22
        this.descTreino22 = descTreino22
        this.tipoTreino23 = tipoTreino23
        this.serieTreino23 = serieTreino23
        this.exeTreino23 = exeTreino23
        this.repTreino23 = repTreino23
        this.descTreino23 = descTreino23
        this.tipoTreino24 = tipoTreino24
        this.serieTreino24 = serieTreino24
        this.exeTreino24 = exeTreino24
        this.repTreino24 = repTreino24
        this.descTreino24 = descTreino24
        this.tipoTreino25 = tipoTreino25
        this.serieTreino25 = serieTreino25
        this.exeTreino25 = exeTreino25
        this.repTreino25 = repTreino25
        this.descTreino25 = descTreino25
        this.tipoTreino26 = tipoTreino26
        this.serieTreino26 = serieTreino26
        this.exeTreino26 = exeTreino26
        this.repTreino26 = repTreino26
        this.descTreino26 = descTreino26
        this.tipoTreino27 = tipoTreino27
        this.serieTreino27 = serieTreino27
        this.exeTreino27 = exeTreino27
        this.repTreino27 = repTreino27
        this.descTreino27 = descTreino27
        this.tipoTreino28 = tipoTreino28
        this.serieTreino28 = serieTreino28
        this.exeTreino28 = exeTreino28
        this.repTreino28 = repTreino28
        this.descTreino28 = descTreino28
        this.tipoTreino29 = tipoTreino29
        this.serieTreino29 = serieTreino29
        this.exeTreino29 = exeTreino29
        this.repTreino29 = repTreino29
        this.descTreino29 = descTreino29
        this.tipoTreino30 = tipoTreino30
        this.serieTreino30 = serieTreino30
        this.exeTreino30 = exeTreino30
        this.repTreino30 = repTreino30
        this.descTreino30 = descTreino30
        this.tipoTreino31 = tipoTreino31
        this.serieTreino31 = serieTreino31
        this.exeTreino31 = exeTreino31
        this.repTreino31 = repTreino31
        this.descTreino31 = descTreino31
        this.tipoTreino32 = tipoTreino32
        this.serieTreino32 = serieTreino32
        this.exeTreino32 = exeTreino32
        this.repTreino32 = repTreino32
        this.descTreino32 = descTreino32
        this.tipoTreino33 = tipoTreino33
        this.serieTreino33 = serieTreino33
        this.exeTreino33 = exeTreino33
        this.repTreino33 = repTreino33
        this.descTreino33 = descTreino33
        this.tipoTreino34 = tipoTreino34
        this.serieTreino34 = serieTreino34
        this.exeTreino34 = exeTreino34
        this.repTreino34 = repTreino34
        this.descTreino34 = descTreino34
        this.tipoTreino35 = tipoTreino35
        this.serieTreino35 = serieTreino35
        this.exeTreino35 = exeTreino35
        this.repTreino35 = repTreino35
        this.descTreino35 = descTreino35
        this.tipoTreino36 = tipoTreino36
        this.serieTreino36 = serieTreino36
        this.exeTreino36 = exeTreino36
        this.repTreino36 = repTreino36
        this.descTreino36 = descTreino36
        this.type = "ficha"
    }
}


class Bd {
    constructor() {
        let id = localStorage.getItem('id')
        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(b) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(b))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {
        let registros = Array()

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let registro = JSON.parse(localStorage.getItem(i))

            if (registro === null) {
                continue
            }
            registro.id = i
            registros.push(registro)
        }
        return registros
    }

    remover(id) {
        localStorage.removeItem(id)
    }

}

let bd = new Bd()

function cadastraAvaliacao() {
    let nome = document.getElementById('nome')
    let sexo = document.getElementById('sexo')
    let idade = document.getElementById('idade')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let peitoral = document.getElementById('peitoral')
    let abdominal = document.getElementById('abdominal')
    let coxa = document.getElementById('coxa')
    let data = document.getElementById('data')

    let avaliacao = new Avaliacao(
        nome.value,
        sexo.value,
        idade.value,
        peso.value,
        altura.value,
        peitoral.value,
        abdominal.value,
        coxa.value,
        data.value,
    )

    if (avaliacao.validarDados()) {
        bd.gravar(avaliacao)
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_titulo').innerHTML = 'Avaliação inserido com sucesso'
        document.getElementById('modal_mensagem').innerHTML = 'Avaliação Física foi cadastrada com sucesso!'
        document.getElementById('modal_button').className = 'btn btn-success'

        //dialog de sucesso
        $('#modalRegistraAvaliacao').modal('show')

        nome.value = ''
        sexo.value = ''
        idade.value = ''
        peso.value = ''
        altura.value = ''
        peitoral.value = ''
        abdominal.value = ''
        coxa.value = ''
        data.value = ''
    } else {

        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_titulo').innerHTML = 'Erro na inserção da avaliação'
        document.getElementById('modal_mensagem').innerHTML = 'Erro na gravação, verifique se todos os campos foi preenchido corretamente'
        document.getElementById('modal_button').className = 'btn btn-danger'

        //dialog de erro
        $('#modalRegistraAvaliacao').modal('show')
    }
}

function cadastraAnotacao() {
    let titulo = document.getElementById('titulo')
    let tipo = document.getElementById('tipo')
    let dataA = document.getElementById('dataA')
    let horario = document.getElementById('horario')
    let descricao = document.getElementById('descricao')

    let anotacao = new Anotacao(
        titulo.value,
        tipo.value,
        dataA.value,
        horario.value,
        descricao.value
    )

    if (anotacao.validarDados()) {
        bd.gravar(anotacao)
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_titulo').innerHTML = 'Anotação inserido com sucesso'
        document.getElementById('modal_mensagem').innerHTML = 'Anotação foi cadastrada com sucesso!'
        document.getElementById('modal_button').className = 'btn btn-success'

        //dialog de sucesso
        $('#modalRegistraAnotacao').modal('show')

        titulo.value = ''
        tipo.value = ''
        dataA.value = ''
        horario.value = ''
        descricao.value = ''
    } else {

        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_titulo').innerHTML = 'Erro na inserção da anotação'
        document.getElementById('modal_mensagem').innerHTML = 'Erro na gravação, verifique se todos os campos foi preenchido corretamente'
        document.getElementById('modal_button').className = 'btn btn-danger'

        //dialog de erro
        $('#modalRegistraAnotacao').modal('show')
    }
}

function carregaListaAvaliacao(avaliacoes = Array(), filter = false) {
    if (avaliacoes.length == 0 && filter == false) {
        avaliacoes = bd.recuperarTodosRegistros()
    }
    let avaliacao = avaliacoes.filter((av) => {
        return av.type === 'avaliação'
    })
    // selecionando o elemento tbody da tabela
    let listaAvaliacoes = document.getElementById('listaAvaliacoes')
    listaAvaliacoes.innerHTML = ''


    avaliacao.forEach(function (a) {
        // criar a linha <tr>
        let linha = listaAvaliacoes.insertRow()

        // criar as colunas <td>
        linha.insertCell(0).innerHTML = a.nome
        linha.insertCell(1).innerHTML = `${a.dataV}`
        if (a.imc <= 18.5) {
            a.imc = `Abaixo do peso`
        } else if (a.imc >= 18.6 && a.imc <= 24.9) {
            a.imc = `Peso ideal`
        } else if (a.imc >= 25.0 && a.imc <= 29.9) {
            a.imc = `Acima do peso`
        } else if (a.imc >= 30.0 && a.imc <= 34.9) {
            a.imc = `Obesidade nível I`
        } else if (a.imc >= 35.0 && a.imc <= 39.9) {
            a.imc = `Obsedade nível II`
        } else if (a.imc >= 40) {
            a.imc = `Obesidade nível III`
        }
        linha.insertCell(2).innerHTML = a.imc
        linha.insertCell(3).innerHTML = `${a.pesoGordo}kg`
        linha.insertCell(4).innerHTML = `${a.percentual}%`
        linha.insertCell(5).innerHTML = `${a.lbm}kg`
        // criar um botão de exclusão

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
        btn.id = `id_avaliacao_${a.id}`
        btn.onclick = function () {
            let id = this.id.replace('id_avaliacao_', '')

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(6).append(btn)
    })
}

function carregaListaAvaliacaoInicial(avaliacoes = Array(), filter = false) {
    if (avaliacoes.length == 0 && filter == false) {
        avaliacoes = bd.recuperarTodosRegistros()
    }
    let avaliacao = avaliacoes.filter((av) => {
        return av.type === 'avaliação'
    })
    // selecionando o elemento tbody da tabela
    let listaAvaliacoesInicial = document.getElementById('listaAvaliacoesInicial')
    listaAvaliacoesInicial.innerHTML = ''

    avaliacao.forEach(function (a) {
        // criar a linha <tr>
        let linha = listaAvaliacoesInicial.insertRow()

        // criar as colunas <td>
        linha.insertCell(0).innerHTML = a.nome
        linha.insertCell(1).innerHTML = `${a.dataV}`
    });
}
function carregaListaAnotacao(anotacoes = Array(), filtro = false) {
    if (anotacoes.length == 0 && filtro == false) {
        anotacoes = bd.recuperarTodosRegistros()
    }

    let anotacao = anotacoes.filter((anot) => {
        return anot.type === 'anotação'
    })
    let listaAnotacoes = document.getElementById('listaAnotacoes')
    listaAnotacoes.innerHTML = ''

    anotacao.forEach(function (an) {

        let linha = listaAnotacoes.insertRow()

        linha.insertCell(0).innerHTML = an.titulo
        switch (an.tipo) {
            case '1':
                an.tipo = 'Aula'
                break;
            case '2':
                an.tipo = 'Avaliação Física'
                break;
            case '3':
                an.tipo = 'Montar Treino'
                break;
            case '4':
                an.tipo = 'Outros'
                break;
        }

        linha.insertCell(1).innerHTML = an.tipo
        linha.insertCell(2).innerHTML = `${an.dataAn}`
        linha.insertCell(3).innerHTML = an.horario
        linha.insertCell(4).innerHTML = an.descricao
        // criar um botão de exclusão

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
        btn.id = `id_anotacao_${an.id}`
        btn.onclick = function () {
            let id = this.id.replace('id_anotacao_', '')

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(5).append(btn)
    })
}

function carregaListaAnotacaoInicial(anotacoes = Array(), filter = false) {
    if (anotacoes.length == 0 && filter == false) {
        anotacoes = bd.recuperarTodosRegistros()
    }
    let anotacao = anotacoes.filter((an) => {
        return an.type === 'anotação'
    })
    // selecionando o elemento tbody da tabela
    let listaAnotacaoInicial = document.getElementById('listaAnotacaoInicial')
    listaAnotacaoInicial.innerHTML = ''

    anotacao.forEach(function (a) {
        // criar a linha <tr>
        let linha = listaAnotacaoInicial.insertRow()

        // criar as colunas <td>
        linha.insertCell(0).innerHTML = a.titulo
        linha.insertCell(1).innerHTML = `${a.dataAn}`
        linha.insertCell(2).innerHTML = `${a.horario}`
    });
}


function cadastraTreino() {
    let nomeAluno = document.getElementById('nomeAluno')
    let nomePerso = document.getElementById('nomePerso')
    let objetivo = document.getElementById('objetivo')
    let dataTreino = document.getElementById('dataTreino')
    let tipoTreino1 = document.getElementById('tipoTreino1')
    let serieTreino1 = document.getElementById('serieTreino1')
    let exeTreino1 = document.getElementById('exeTreino1')
    let repTreino1 = document.getElementById('repTreino1')
    let descTreino1 = document.getElementById('descTreino1')
    let tipoTreino2 = document.getElementById('tipoTreino2')
    let serieTreino2 = document.getElementById('serieTreino2')
    let exeTreino2 = document.getElementById('exeTreino2')
    let repTreino2 = document.getElementById('repTreino2')
    let descTreino2 = document.getElementById('descTreino2')
    let tipoTreino3 = document.getElementById('tipoTreino3')
    let serieTreino3 = document.getElementById('serieTreino3')
    let exeTreino3 = document.getElementById('exeTreino3')
    let repTreino3 = document.getElementById('repTreino3')
    let descTreino3 = document.getElementById('descTreino3')
    let tipoTreino4 = document.getElementById('tipoTreino4')
    let serieTreino4 = document.getElementById('serieTreino4')
    let exeTreino4 = document.getElementById('exeTreino4')
    let repTreino4 = document.getElementById('repTreino4')
    let descTreino4 = document.getElementById('descTreino4')
    let tipoTreino5 = document.getElementById('tipoTreino5')
    let serieTreino5 = document.getElementById('serieTreino5')
    let exeTreino5 = document.getElementById('exeTreino5')
    let repTreino5 = document.getElementById('repTreino5')
    let descTreino5 = document.getElementById('descTreino5')
    let tipoTreino6 = document.getElementById('tipoTreino6')
    let serieTreino6 = document.getElementById('serieTreino6')
    let exeTreino6 = document.getElementById('exeTreino6')
    let repTreino6 = document.getElementById('repTreino6')
    let descTreino6 = document.getElementById('descTreino6')
    let tipoTreino7 = document.getElementById('tipoTreino7')
    let serieTreino7 = document.getElementById('serieTreino7')
    let exeTreino7 = document.getElementById('exeTreino7')
    let repTreino7 = document.getElementById('repTreino7')
    let descTreino7 = document.getElementById('descTreino7')
    let tipoTreino8 = document.getElementById('tipoTreino8')
    let serieTreino8 = document.getElementById('serieTreino8')
    let exeTreino8 = document.getElementById('exeTreino8')
    let repTreino8 = document.getElementById('repTreino8')
    let descTreino8 = document.getElementById('descTreino8')
    let tipoTreino9 = document.getElementById('tipoTreino9')
    let serieTreino9 = document.getElementById('serieTreino9')
    let exeTreino9 = document.getElementById('exeTreino9')
    let repTreino9 = document.getElementById('repTreino9')
    let descTreino9 = document.getElementById('descTreino9')
    let tipoTreino10 = document.getElementById('tipoTreino10')
    let serieTreino10 = document.getElementById('serieTreino10')
    let exeTreino10 = document.getElementById('exeTreino10')
    let repTreino10 = document.getElementById('repTreino10')
    let descTreino10 = document.getElementById('descTreino10')
    let tipoTreino11 = document.getElementById('tipoTreino11')
    let serieTreino11 = document.getElementById('serieTreino11')
    let exeTreino11 = document.getElementById('exeTreino11')
    let repTreino11 = document.getElementById('repTreino11')
    let descTreino11 = document.getElementById('descTreino11')
    let tipoTreino12 = document.getElementById('tipoTreino12')
    let serieTreino12 = document.getElementById('serieTreino12')
    let exeTreino12 = document.getElementById('exeTreino12')
    let repTreino12 = document.getElementById('repTreino12')
    let descTreino12 = document.getElementById('descTreino12')
    let tipoTreino13 = document.getElementById('tipoTreino13')
    let serieTreino13 = document.getElementById('serieTreino13')
    let exeTreino13 = document.getElementById('exeTreino13')
    let repTreino13 = document.getElementById('repTreino13')
    let descTreino13 = document.getElementById('descTreino13')
    let tipoTreino14 = document.getElementById('tipoTreino14')
    let serieTreino14 = document.getElementById('serieTreino14')
    let exeTreino14 = document.getElementById('exeTreino14')
    let repTreino14 = document.getElementById('repTreino14')
    let descTreino14 = document.getElementById('descTreino14')
    let tipoTreino15 = document.getElementById('tipoTreino15')
    let serieTreino15 = document.getElementById('serieTreino15')
    let exeTreino15 = document.getElementById('exeTreino15')
    let repTreino15 = document.getElementById('repTreino15')
    let descTreino15 = document.getElementById('descTreino15')
    let tipoTreino16 = document.getElementById('tipoTreino16')
    let serieTreino16 = document.getElementById('serieTreino16')
    let exeTreino16 = document.getElementById('exeTreino16')
    let repTreino16 = document.getElementById('repTreino16')
    let descTreino16 = document.getElementById('descTreino16')
    let tipoTreino17 = document.getElementById('tipoTreino17')
    let serieTreino17 = document.getElementById('serieTreino17')
    let exeTreino17 = document.getElementById('exeTreino17')
    let repTreino17 = document.getElementById('repTreino17')
    let descTreino17 = document.getElementById('descTreino17')
    let tipoTreino18 = document.getElementById('tipoTreino18')
    let serieTreino18 = document.getElementById('serieTreino18')
    let exeTreino18 = document.getElementById('exeTreino18')
    let repTreino18 = document.getElementById('repTreino18')
    let descTreino18 = document.getElementById('descTreino18')
    let tipoTreino19 = document.getElementById('tipoTreino19')
    let serieTreino19 = document.getElementById('serieTreino19')
    let exeTreino19 = document.getElementById('exeTreino19')
    let repTreino19 = document.getElementById('repTreino19')
    let descTreino19 = document.getElementById('descTreino19')
    let tipoTreino20 = document.getElementById('tipoTreino20')
    let serieTreino20 = document.getElementById('serieTreino20')
    let exeTreino20 = document.getElementById('exeTreino20')
    let repTreino20 = document.getElementById('repTreino20')
    let descTreino20 = document.getElementById('descTreino20')
    let tipoTreino21 = document.getElementById('tipoTreino21')
    let serieTreino21 = document.getElementById('serieTreino21')
    let exeTreino21 = document.getElementById('exeTreino21')
    let repTreino21 = document.getElementById('repTreino21')
    let descTreino21 = document.getElementById('descTreino21')
    let tipoTreino22 = document.getElementById('tipoTreino22')
    let serieTreino22 = document.getElementById('serieTreino22')
    let exeTreino22 = document.getElementById('exeTreino22')
    let repTreino22 = document.getElementById('repTreino22')
    let descTreino22 = document.getElementById('descTreino22')
    let tipoTreino23 = document.getElementById('tipoTreino23')
    let serieTreino23 = document.getElementById('serieTreino23')
    let exeTreino23 = document.getElementById('exeTreino23')
    let repTreino23 = document.getElementById('repTreino23')
    let descTreino23 = document.getElementById('descTreino23')
    let tipoTreino24 = document.getElementById('tipoTreino24')
    let serieTreino24 = document.getElementById('serieTreino24')
    let exeTreino24 = document.getElementById('exeTreino24')
    let repTreino24 = document.getElementById('repTreino24')
    let descTreino24 = document.getElementById('descTreino24')
    let tipoTreino25 = document.getElementById('tipoTreino25')
    let serieTreino25 = document.getElementById('serieTreino25')
    let exeTreino25 = document.getElementById('exeTreino25')
    let repTreino25 = document.getElementById('repTreino25')
    let descTreino25 = document.getElementById('descTreino25')
    let tipoTreino26 = document.getElementById('tipoTreino26')
    let serieTreino26 = document.getElementById('serieTreino26')
    let exeTreino26 = document.getElementById('exeTreino26')
    let repTreino26 = document.getElementById('repTreino26')
    let descTreino26 = document.getElementById('descTreino26')
    let tipoTreino27 = document.getElementById('tipoTreino27')
    let serieTreino27 = document.getElementById('serieTreino27')
    let exeTreino27 = document.getElementById('exeTreino27')
    let repTreino27 = document.getElementById('repTreino27')
    let descTreino27 = document.getElementById('descTreino27')
    let tipoTreino28 = document.getElementById('tipoTreino28')
    let serieTreino28 = document.getElementById('serieTreino28')
    let exeTreino28 = document.getElementById('exeTreino28')
    let repTreino28 = document.getElementById('repTreino28')
    let descTreino28 = document.getElementById('descTreino28')
    let tipoTreino29 = document.getElementById('tipoTreino29')
    let serieTreino29 = document.getElementById('serieTreino29')
    let exeTreino29 = document.getElementById('exeTreino29')
    let repTreino29 = document.getElementById('repTreino29')
    let descTreino29 = document.getElementById('descTreino29')
    let tipoTreino30 = document.getElementById('tipoTreino30')
    let serieTreino30 = document.getElementById('serieTreino30')
    let exeTreino30 = document.getElementById('exeTreino30')
    let repTreino30 = document.getElementById('repTreino30')
    let descTreino30 = document.getElementById('descTreino30')
    let tipoTreino31 = document.getElementById('tipoTreino31')
    let serieTreino31 = document.getElementById('serieTreino31')
    let exeTreino31 = document.getElementById('exeTreino31')
    let repTreino31 = document.getElementById('repTreino31')
    let descTreino31 = document.getElementById('descTreino31')
    let tipoTreino32 = document.getElementById('tipoTreino32')
    let serieTreino32 = document.getElementById('serieTreino32')
    let exeTreino32 = document.getElementById('exeTreino32')
    let repTreino32 = document.getElementById('repTreino32')
    let descTreino32 = document.getElementById('descTreino32')
    let tipoTreino33 = document.getElementById('tipoTreino33')
    let serieTreino33 = document.getElementById('serieTreino33')
    let exeTreino33 = document.getElementById('exeTreino33')
    let repTreino33 = document.getElementById('repTreino33')
    let descTreino33 = document.getElementById('descTreino33')
    let tipoTreino34 = document.getElementById('tipoTreino34')
    let serieTreino34 = document.getElementById('serieTreino34')
    let exeTreino34 = document.getElementById('exeTreino34')
    let repTreino34 = document.getElementById('repTreino34')
    let descTreino34 = document.getElementById('descTreino34')
    let tipoTreino35 = document.getElementById('tipoTreino35')
    let serieTreino35 = document.getElementById('serieTreino35')
    let exeTreino35 = document.getElementById('exeTreino35')
    let repTreino35 = document.getElementById('repTreino35')
    let descTreino35 = document.getElementById('descTreino35')
    let tipoTreino36 = document.getElementById('tipoTreino36')
    let serieTreino36 = document.getElementById('serieTreino36')
    let exeTreino36 = document.getElementById('exeTreino36')
    let repTreino36 = document.getElementById('repTreino36')
    let descTreino36 = document.getElementById('descTreino36')


    let ficha = new Ficha(
        nomeAluno.value,
        nomePerso.value,
        objetivo.value,
        dataTreino.value,
        tipoTreino1.value, serieTreino1.value, exeTreino1.value, repTreino1.value, descTreino1.value,
        tipoTreino2.value, serieTreino2.value, exeTreino2.value, repTreino2.value, descTreino2.value,
        tipoTreino3.value, serieTreino3.value, exeTreino3.value, repTreino3.value, descTreino3.value,
        tipoTreino4.value, serieTreino4.value, exeTreino4.value, repTreino4.value, descTreino4.value,
        tipoTreino5.value, serieTreino5.value, exeTreino5.value, repTreino5.value, descTreino5.value,
        tipoTreino6.value, serieTreino6.value, exeTreino6.value, repTreino6.value, descTreino6.value,
        tipoTreino7.value, serieTreino7.value, exeTreino7.value, repTreino7.value, descTreino7.value,
        tipoTreino8.value, serieTreino8.value, exeTreino8.value, repTreino8.value, descTreino8.value,
        tipoTreino9.value, serieTreino9.value, exeTreino9.value, repTreino9.value, descTreino9.value,
        tipoTreino10.value, serieTreino10.value, exeTreino10.value, repTreino10.value, descTreino10.value,
        tipoTreino11.value, serieTreino11.value, exeTreino11.value, repTreino11.value, descTreino11.value,
        tipoTreino12.value, serieTreino12.value, exeTreino12.value, repTreino12.value, descTreino12.value,
        tipoTreino13.value, serieTreino13.value, exeTreino13.value, repTreino13.value, descTreino13.value,
        tipoTreino14.value, serieTreino14.value, exeTreino14.value, repTreino14.value, descTreino14.value,
        tipoTreino15.value, serieTreino15.value, exeTreino15.value, repTreino15.value, descTreino15.value,
        tipoTreino16.value, serieTreino16.value, exeTreino16.value, repTreino16.value, descTreino16.value,
        tipoTreino17.value, serieTreino17.value, exeTreino17.value, repTreino17.value, descTreino17.value,
        tipoTreino18.value, serieTreino18.value, exeTreino18.value, repTreino18.value, descTreino18.value,
        tipoTreino19.value, serieTreino19.value, exeTreino19.value, repTreino19.value, descTreino19.value,
        tipoTreino20.value, serieTreino20.value, exeTreino20.value, repTreino20.value, descTreino20.value,
        tipoTreino21.value, serieTreino21.value, exeTreino21.value, repTreino21.value, descTreino21.value,
        tipoTreino22.value, serieTreino22.value, exeTreino22.value, repTreino22.value, descTreino22.value,
        tipoTreino23.value, serieTreino23.value, exeTreino23.value, repTreino23.value, descTreino23.value,
        tipoTreino24.value, serieTreino24.value, exeTreino24.value, repTreino24.value, descTreino24.value,
        tipoTreino25.value, serieTreino25.value, exeTreino25.value, repTreino25.value, descTreino25.value,
        tipoTreino26.value, serieTreino26.value, exeTreino26.value, repTreino26.value, descTreino26.value,
        tipoTreino27.value, serieTreino27.value, exeTreino27.value, repTreino27.value, descTreino27.value,
        tipoTreino28.value, serieTreino28.value, exeTreino28.value, repTreino28.value, descTreino28.value,
        tipoTreino29.value, serieTreino29.value, exeTreino29.value, repTreino29.value, descTreino29.value,
        tipoTreino30.value, serieTreino30.value, exeTreino30.value, repTreino30.value, descTreino30.value,
        tipoTreino31.value, serieTreino31.value, exeTreino31.value, repTreino31.value, descTreino31.value,
        tipoTreino32.value, serieTreino32.value, exeTreino32.value, repTreino32.value, descTreino32.value,
        tipoTreino33.value, serieTreino33.value, exeTreino33.value, repTreino33.value, descTreino33.value,
        tipoTreino34.value, serieTreino34.value, exeTreino34.value, repTreino34.value, descTreino34.value,
        tipoTreino35.value, serieTreino35.value, exeTreino35.value, repTreino35.value, descTreino35.value,
        tipoTreino36.value, serieTreino36.value, exeTreino36.value, repTreino36.value, descTreino36.value,
    )

    bd.gravar(ficha)
    document.getElementById('modal_titulo_div').className = 'modal-header text-success'
    document.getElementById('modal_titulo').innerHTML = 'Ficha de treino inserido com sucesso'
    document.getElementById('modal_mensagem').innerHTML = 'Ficha de treino foi cadastrada com sucesso!'
    document.getElementById('modal_button').className = 'btn btn-success'

    //dialog de sucesso
    $('#modalRegistraFicha').modal('show')

    nomeAluno.value = ''
    nomePerso.value = ''
    objetivo.value = ''
    dataTreino.value = ''
    tipoTreino1.value = ''
    serieTreino1.value = ''
    exeTreino1.value = ''
    repTreino1.value = ''
    descTreino1.value = ''
    tipoTreino2.value = ''
    serieTreino2.value = ''
    exeTreino2.value = ''
    repTreino2.value = ''
    descTreino2.value = ''
    tipoTreino3.value = ''
    serieTreino3.value = ''
    exeTreino3.value = ''
    repTreino3.value = ''
    descTreino3.value = ''
    tipoTreino4.value = ''
    serieTreino4.value = ''
    exeTreino4.value = ''
    repTreino4.value = ''
    descTreino4.value = ''
    tipoTreino5.value = ''
    serieTreino5.value = ''
    exeTreino5.value = ''
    repTreino5.value = ''
    descTreino5.value = ''
    tipoTreino6.value = ''
    serieTreino6.value = ''
    exeTreino6.value = ''
    repTreino6.value = ''
    descTreino6.value = ''
    tipoTreino7.value = ''
    serieTreino7.value = ''
    exeTreino7.value = ''
    repTreino7.value = ''
    descTreino7.value = ''
    tipoTreino8.value = ''
    serieTreino8.value = ''
    exeTreino8.value = ''
    repTreino8.value = ''
    descTreino8.value = ''
    tipoTreino9.value = ''
    serieTreino9.value = ''
    exeTreino9.value = ''
    repTreino9.value = ''
    descTreino9.value = ''
    tipoTreino10.value = ''
    serieTreino10.value = ''
    exeTreino10.value = ''
    repTreino10.value = ''
    descTreino10.value = ''
    tipoTreino11.value = ''
    serieTreino11.value = ''
    exeTreino11.value = ''
    repTreino11.value = ''
    descTreino11.value = ''
    tipoTreino12.value = ''
    serieTreino12.value = ''
    exeTreino12.value = ''
    repTreino12.value = ''
    descTreino12.value = ''
    tipoTreino13.value = ''
    serieTreino13.value = ''
    exeTreino13.value = ''
    repTreino13.value = ''
    descTreino13.value = ''
    tipoTreino14.value = ''
    serieTreino14.value = ''
    exeTreino14.value = ''
    repTreino14.value = ''
    descTreino14.value = ''
    tipoTreino15.value = ''
    serieTreino15.value = ''
    exeTreino15.value = ''
    repTreino15.value = ''
    descTreino15.value = ''
    tipoTreino16.value = ''
    serieTreino16.value = ''
    exeTreino16.value = ''
    repTreino16.value = ''
    descTreino16.value = ''
    tipoTreino17.value = ''
    serieTreino17.value = ''
    exeTreino17.value = ''
    repTreino17.value = ''
    descTreino17.value = ''
    tipoTreino18.value = ''
    serieTreino18.value = ''
    exeTreino18.value = ''
    repTreino18.value = ''
    descTreino18.value = ''
    tipoTreino19.value = ''
    serieTreino19.value = ''
    exeTreino19.value = ''
    repTreino19.value = ''
    descTreino19.value = ''
    tipoTreino20.value = ''
    serieTreino20.value = ''
    exeTreino20.value = ''
    repTreino20.value = ''
    descTreino20.value = ''
    tipoTreino21.value = ''
    serieTreino21.value = ''
    exeTreino21.value = ''
    repTreino21.value = ''
    descTreino21.value = ''
    tipoTreino22.value = ''
    serieTreino22.value = ''
    exeTreino22.value = ''
    repTreino22.value = ''
    descTreino22.value = ''
    tipoTreino23.value = ''
    serieTreino23.value = ''
    exeTreino23.value = ''
    repTreino23.value = ''
    descTreino23.value = ''
    tipoTreino24.value = ''
    serieTreino24.value = ''
    exeTreino24.value = ''
    repTreino24.value = ''
    descTreino24.value = ''
    tipoTreino25.value = ''
    serieTreino25.value = ''
    exeTreino25.value = ''
    repTreino25.value = ''
    descTreino25.value = ''
    tipoTreino26.value = ''
    serieTreino26.value = ''
    exeTreino26.value = ''
    repTreino26.value = ''
    descTreino26.value = ''
    tipoTreino27.value = ''
    serieTreino27.value = ''
    exeTreino27.value = ''
    repTreino27.value = ''
    descTreino27.value = ''
    tipoTreino28.value = ''
    serieTreino28.value = ''
    exeTreino28.value = ''
    repTreino28.value = ''
    descTreino28.value = ''
    tipoTreino29.value = ''
    serieTreino29.value = ''
    exeTreino29.value = ''
    repTreino29.value = ''
    descTreino29.value = ''
    tipoTreino30.value = ''
    serieTreino30.value = ''
    exeTreino30.value = ''
    repTreino30.value = ''
    descTreino30.value = ''
    tipoTreino31.value = ''
    serieTreino31.value = ''
    exeTreino31.value = ''
    repTreino31.value = ''
    descTreino31.value = ''
    tipoTreino32.value = ''
    serieTreino32.value = ''
    exeTreino32.value = ''
    repTreino32.value = ''
    descTreino32.value = ''
    tipoTreino33.value = ''
    serieTreino33.value = ''
    exeTreino33.value = ''
    repTreino33.value = ''
    descTreino33.value = ''
    tipoTreino34.value = ''
    serieTreino34.value = ''
    exeTreino34.value = ''
    repTreino34.value = ''
    descTreino34.value = ''
    tipoTreino35.value = ''
    serieTreino35.value = ''
    exeTreino35.value = ''
    repTreino35.value = ''
    descTreino35.value = ''
    tipoTreino36.value = ''
    serieTreino36.value = ''
    exeTreino36.value = ''
    repTreino36.value = ''
    descTreino36.value = ''

}

function carregaListaFicha(ficha = Array(), filtro = false) {
    if (ficha.length == 0 && filtro == false) {
        ficha = bd.recuperarTodosRegistros()
    }

    let exercicio = ficha.filter((exer) => {
        return exer.type === 'ficha'
    })
    let listaFicha = document.getElementById('listaFicha')
    listaFicha.innerHTML = ''

    exercicio.forEach(function (ex) {

        let linha = listaFicha.insertRow()

        linha.insertCell(0).innerHTML = ex.nomeAluno
        linha.insertCell(1).innerHTML = ex.nomePerso
        linha.insertCell(2).innerHTML = ex.dataTn
        linha.insertCell(3).innerHTML = ex.objetivo
        // criar um botão de exclusão

        let btnPDF = document.createElement("button")
        btnPDF.className = 'btn btn-warning'
        btnPDF.innerHTML = '<i class="fas fa-file-pdf"></i>'
        btnPDF.idP = `id_pdf_${ex.idP}`
        btnPDF.onclick = function () {
            var img = "data:image/jpeg;base64,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"
            var doc = new jsPDF();
            doc.setFontSize(26);
            doc.text("Ficha de Treino", 90, 30);
            doc.addImage(img, "JPEG", 10, 10, 65, 35);
            doc.setFontSize(13);
            doc.text(`Aluno: ${ex.nomeAluno}`, 15, 60);
            doc.text(`Personal: ${ex.nomePerso}`, 100, 60);
            doc.text(`Objetivo: ${ex.objetivo}`, 15, 65);
            doc.text(`Data: ${ex.dataTn}`, 100, 65);
            doc.text("Tipo", 10, 75);
            doc.text("Serie", 35, 75);
            doc.text("Exercicio", 65, 75);
            doc.text("Repetição", 135, 75);
            doc.text("Descanso", 175, 75);
            doc.text(`${ex.tipoTreino1}`, 10, 85);
            doc.text(`${ex.serieTreino1}`, 40, 85);
            doc.text(`${ex.exeTreino1}`, 65, 85);
            doc.text(`${ex.repTreino1}`, 135, 85);
            doc.text(`${ex.descTreino1}`, 180, 85);
            doc.text(`${ex.tipoTreino2}`, 10, 90);
            doc.text(`${ex.serieTreino2}`, 40, 90);
            doc.text(`${ex.exeTreino2}`, 65, 90);
            doc.text(`${ex.repTreino2}`, 135, 90);
            doc.text(`${ex.descTreino2}`, 180, 90);
            doc.text(`${ex.tipoTreino3}`, 10, 95);
            doc.text(`${ex.serieTreino3}`, 40, 95);
            doc.text(`${ex.exeTreino3}`, 65, 95);
            doc.text(`${ex.repTreino3}`, 135, 95);
            doc.text(`${ex.descTreino3}`, 180, 95);
            doc.text(`${ex.tipoTreino4}`, 10, 100);
            doc.text(`${ex.serieTreino4}`, 40, 100);
            doc.text(`${ex.exeTreino4}`, 65, 100);
            doc.text(`${ex.repTreino4}`, 135, 100);
            doc.text(`${ex.descTreino4}`, 180, 100);
            doc.text(`${ex.tipoTreino5}`, 10, 105);
            doc.text(`${ex.serieTreino5}`, 40, 105);
            doc.text(`${ex.exeTreino5}`, 65, 105);
            doc.text(`${ex.repTreino5}`, 135, 105);
            doc.text(`${ex.descTreino5}`, 180, 105);
            doc.text(`${ex.tipoTreino6}`, 10, 110);
            doc.text(`${ex.serieTreino6}`, 40, 110);
            doc.text(`${ex.exeTreino6}`, 65, 110);
            doc.text(`${ex.repTreino6}`, 135, 110);
            doc.text(`${ex.descTreino6}`, 180, 110);
            doc.text(`${ex.tipoTreino7}`, 10, 115);
            doc.text(`${ex.serieTreino7}`, 40, 115);
            doc.text(`${ex.exeTreino7}`, 65, 115);
            doc.text(`${ex.repTreino7}`, 135, 115);
            doc.text(`${ex.descTreino7}`, 180, 115);
            doc.text(`${ex.tipoTreino8}`, 10, 120);
            doc.text(`${ex.serieTreino8}`, 40, 120);
            doc.text(`${ex.exeTreino8}`, 65, 120);
            doc.text(`${ex.repTreino8}`, 135, 120);
            doc.text(`${ex.descTreino8}`, 180, 120);
            doc.text(`${ex.tipoTreino9}`, 10, 125);
            doc.text(`${ex.serieTreino9}`, 40, 125);
            doc.text(`${ex.exeTreino9}`, 65, 125);
            doc.text(`${ex.repTreino9}`, 135, 125);
            doc.text(`${ex.descTreino9}`, 180, 125);
            doc.text(`${ex.tipoTreino10}`, 10, 130);
            doc.text(`${ex.serieTreino10}`, 40, 130);
            doc.text(`${ex.exeTreino10}`, 65, 130);
            doc.text(`${ex.repTreino10}`, 135, 130);
            doc.text(`${ex.descTreino10}`, 180, 130);
            doc.text(`${ex.tipoTreino11}`, 10, 135);
            doc.text(`${ex.serieTreino11}`, 40, 135);
            doc.text(`${ex.exeTreino11}`, 65, 135);
            doc.text(`${ex.repTreino11}`, 135, 135);
            doc.text(`${ex.descTreino11}`, 180, 135);
            doc.text(`${ex.tipoTreino12}`, 10, 140);
            doc.text(`${ex.serieTreino12}`, 40, 140);
            doc.text(`${ex.exeTreino12}`, 65, 140);
            doc.text(`${ex.repTreino12}`, 135, 140);
            doc.text(`${ex.descTreino12}`, 180, 140);
            doc.text(`${ex.tipoTreino13}`, 10, 145);
            doc.text(`${ex.serieTreino13}`, 40, 145);
            doc.text(`${ex.exeTreino13}`, 65, 145);
            doc.text(`${ex.repTreino13}`, 135, 145);
            doc.text(`${ex.descTreino13}`, 180, 145);
            doc.text(`${ex.tipoTreino14}`, 10, 150);
            doc.text(`${ex.serieTreino14}`, 40, 150);
            doc.text(`${ex.exeTreino14}`, 65, 150);
            doc.text(`${ex.repTreino14}`, 135, 150);
            doc.text(`${ex.descTreino14}`, 180, 150);
            doc.text(`${ex.tipoTreino15}`, 10, 155);
            doc.text(`${ex.serieTreino15}`, 40, 155);
            doc.text(`${ex.exeTreino15}`, 65, 155);
            doc.text(`${ex.repTreino15}`, 135, 155);
            doc.text(`${ex.descTreino15}`, 180, 155);
            doc.text(`${ex.tipoTreino16}`, 10, 160);
            doc.text(`${ex.serieTreino16}`, 40, 160);
            doc.text(`${ex.exeTreino16}`, 65, 160);
            doc.text(`${ex.repTreino16}`, 135, 160);
            doc.text(`${ex.descTreino16}`, 180, 160);
            doc.text(`${ex.tipoTreino17}`, 10, 165);
            doc.text(`${ex.serieTreino17}`, 40, 165);
            doc.text(`${ex.exeTreino17}`, 65, 165);
            doc.text(`${ex.repTreino17}`, 135, 165);
            doc.text(`${ex.descTreino17}`, 180, 165);
            doc.text(`${ex.tipoTreino18}`, 10, 170);
            doc.text(`${ex.serieTreino18}`, 40, 170);
            doc.text(`${ex.exeTreino18}`, 65, 170);
            doc.text(`${ex.repTreino18}`, 135, 170);
            doc.text(`${ex.descTreino18}`, 180, 170);
            doc.text(`${ex.tipoTreino19}`, 10, 175);
            doc.text(`${ex.serieTreino19}`, 40, 175);
            doc.text(`${ex.exeTreino19}`, 65, 175);
            doc.text(`${ex.repTreino19}`, 135, 175);
            doc.text(`${ex.descTreino19}`, 180, 175);
            doc.text(`${ex.tipoTreino20}`, 10, 180);
            doc.text(`${ex.serieTreino20}`, 40, 180);
            doc.text(`${ex.exeTreino20}`, 65, 180);
            doc.text(`${ex.repTreino20}`, 135, 180);
            doc.text(`${ex.descTreino20}`, 180, 180);
            doc.text(`${ex.tipoTreino21}`, 10, 185);
            doc.text(`${ex.serieTreino21}`, 40, 185);
            doc.text(`${ex.exeTreino21}`, 65, 185);
            doc.text(`${ex.repTreino21}`, 135, 185);
            doc.text(`${ex.descTreino21}`, 180, 185);
            doc.text(`${ex.tipoTreino21}`, 10, 190);
            doc.text(`${ex.serieTreino21}`, 40, 190);
            doc.text(`${ex.exeTreino21}`, 65, 190);
            doc.text(`${ex.repTreino21}`, 135, 190);
            doc.text(`${ex.descTreino21}`, 180, 190);
            doc.text(`${ex.tipoTreino22}`, 10, 195);
            doc.text(`${ex.serieTreino22}`, 40, 195);
            doc.text(`${ex.exeTreino22}`, 65, 195);
            doc.text(`${ex.repTreino22}`, 135, 195);
            doc.text(`${ex.descTreino22}`, 180, 195);
            doc.text(`${ex.tipoTreino23}`, 10, 200);
            doc.text(`${ex.serieTreino23}`, 40, 200);
            doc.text(`${ex.exeTreino23}`, 65, 200);
            doc.text(`${ex.repTreino23}`, 135, 200);
            doc.text(`${ex.descTreino23}`, 180, 200);
            doc.text(`${ex.tipoTreino24}`, 10, 205);
            doc.text(`${ex.serieTreino24}`, 40, 205);
            doc.text(`${ex.exeTreino24}`, 65, 205);
            doc.text(`${ex.repTreino24}`, 135, 205);
            doc.text(`${ex.descTreino24}`, 180, 205);
            doc.text(`${ex.tipoTreino25}`, 10, 210);
            doc.text(`${ex.serieTreino25}`, 40, 210);
            doc.text(`${ex.exeTreino25}`, 65, 210);
            doc.text(`${ex.repTreino25}`, 135, 210);
            doc.text(`${ex.descTreino25}`, 180, 210);
            doc.text(`${ex.tipoTreino26}`, 10, 215);
            doc.text(`${ex.serieTreino26}`, 40, 215);
            doc.text(`${ex.exeTreino26}`, 65, 215);
            doc.text(`${ex.repTreino26}`, 135, 215);
            doc.text(`${ex.descTreino26}`, 180, 215);
            doc.text(`${ex.tipoTreino27}`, 10, 220);
            doc.text(`${ex.serieTreino27}`, 40, 220);
            doc.text(`${ex.exeTreino27}`, 65, 220);
            doc.text(`${ex.repTreino27}`, 135, 220);
            doc.text(`${ex.descTreino27}`, 180, 220);
            doc.text(`${ex.tipoTreino28}`, 10, 225);
            doc.text(`${ex.serieTreino28}`, 40, 225);
            doc.text(`${ex.exeTreino28}`, 65, 225);
            doc.text(`${ex.repTreino28}`, 135, 225);
            doc.text(`${ex.descTreino28}`, 180, 225);
            doc.text(`${ex.tipoTreino29}`, 10, 230);
            doc.text(`${ex.serieTreino29}`, 40, 230);
            doc.text(`${ex.exeTreino29}`, 65, 230);
            doc.text(`${ex.repTreino29}`, 135, 230);
            doc.text(`${ex.descTreino29}`, 180, 230);
            doc.text(`${ex.tipoTreino30}`, 10, 235);
            doc.text(`${ex.serieTreino30}`, 40, 235);
            doc.text(`${ex.exeTreino30}`, 65, 235);
            doc.text(`${ex.repTreino30}`, 135, 235);
            doc.text(`${ex.descTreino30}`, 180, 235);
            doc.text(`${ex.tipoTreino31}`, 10, 240);
            doc.text(`${ex.serieTreino31}`, 40, 240);
            doc.text(`${ex.exeTreino31}`, 65, 240);
            doc.text(`${ex.repTreino31}`, 135, 240);
            doc.text(`${ex.descTreino31}`, 180, 240);
            doc.text(`${ex.tipoTreino32}`, 10, 245);
            doc.text(`${ex.serieTreino32}`, 40, 245);
            doc.text(`${ex.exeTreino32}`, 65, 245);
            doc.text(`${ex.repTreino32}`, 135, 245);
            doc.text(`${ex.descTreino32}`, 180, 245);
            doc.text(`${ex.tipoTreino33}`, 10, 250);
            doc.text(`${ex.serieTreino33}`, 40, 250);
            doc.text(`${ex.exeTreino33}`, 65, 250);
            doc.text(`${ex.repTreino33}`, 135, 250);
            doc.text(`${ex.descTreino33}`, 180, 250);
            doc.text(`${ex.tipoTreino34}`, 10, 255);
            doc.text(`${ex.serieTreino34}`, 40, 255);
            doc.text(`${ex.exeTreino34}`, 65, 255);
            doc.text(`${ex.repTreino34}`, 135, 255);
            doc.text(`${ex.descTreino34}`, 180, 255);
            doc.text(`${ex.tipoTreino35}`, 10, 260);
            doc.text(`${ex.serieTreino35}`, 40, 260);
            doc.text(`${ex.exeTreino35}`, 65, 260);
            doc.text(`${ex.repTreino35}`, 135, 260);
            doc.text(`${ex.descTreino35}`, 180, 260);
            doc.text(`${ex.tipoTreino36}`, 10, 245);
            doc.text(`${ex.serieTreino36}`, 40, 245);
            doc.text(`${ex.exeTreino36}`, 65, 245);
            doc.text(`${ex.repTreino36}`, 135, 245);
            doc.text(`${ex.descTreino36}`, 180, 245);

            doc.save(`Ficha${ex.nomeAluno}.pdf`);

        }
        linha.insertCell(4).append(btnPDF)
        // criar um botão de exclusão

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
        btn.id = `id_ficha_${ex.id}`
        btn.onclick = function () {
            let id = this.id.replace('id_ficha_', '')

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(5).append(btn)
    })
}

function carregaListaFichaInicial(ficha = Array(), filtro = false) {
    if (ficha.length == 0 && filtro == false) {
        ficha = bd.recuperarTodosRegistros()
    }

    let exercicio = ficha.filter((exer) => {
        return exer.type === 'ficha'
    })
    let listaFichaInicial = document.getElementById('listaFichaInicial')
    listaFichaInicial.innerHTML = ''

    exercicio.forEach(function (ex) {

        let linha = listaFichaInicial.insertRow()

        linha.insertCell(0).innerHTML = ex.nomeAluno
        linha.insertCell(1).innerHTML = ex.dataTn
    });
}