function Calculadora(){
    this.display = document.querySelector('.display')
    this.inicia = () =>{
        this.capturaClique()
        this.capturaEnter()
    }

    this.capturaClique = () =>{
        document.addEventListener('click',e =>{
            const el = e.target
            if(el.classList.contains('btn-num')) this.addNumber(el)
            if(el.classList.contains('btn-eq')) this.realizaConta()
            if(el.classList.contains('btn-del')) this.delNumber()
            if(el.classList.contains('btn-clean')) this.cleanNumber()
        })
    }
    this.capturaEnter = () =>{
        document.addEventListener('keypress',e =>{
            const el = e.target
            if(e.keyCode !==13)return
            this.realizaConta()
        })
    }

    this.addNumber = (el) =>{
        this.display.value += el.innerText
        this.display.focus()
    }
    
    this.delNumber = () => this.display.value = this.display.value.slice(0,-1)

    this.cleanNumber = () => this.display.value = ''

    this.realizaConta = () =>{
        try{
            let conta = this.display.value.replace(',','.')
            conta = eval(conta)
            if(!conta){
                alert('Conta Invalida')
                this.cleanNumber()
                return
            }
            this.display.value = conta
        }catch(e){
            alert('conta invalida')
            this.cleanNumber()
            return
        }
    }

}

calculadora = new Calculadora()
calculadora.inicia()