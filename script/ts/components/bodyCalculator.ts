export class Calculator extends NS_Component{
    display!: create_Element_Cls
    btnsnum!: create_Element_Cls[]
    btnsoperator!: create_Element_Cls[]
    btnpower!: create_Element_Cls
    divBtn: create_Element_Cls
    constructor(){
        super({})
        const operators = [
            ["+", "-", "x", "/", ".", "^", "=", "(", ")", "<---", "cls"],
            ["more", "less", "multi", "div", "float", "expo", "equals", "parentopen", "parentclose", "erase", "clear"]
        ]
        let on = false
        
        this.display = CreateElm("input", {
            style: {
                ...displayStyle,
                textAlign: "right",
                padding: "0 0.5rem"
            }
        })
        this.display.SetAttr("readonly", "readonly")
        this.btnsnum = []
        this.btnsoperator = []
        this.btnpower = Btn({
            text: "ON",
            style: {
                ...btnStyle,
                backgroundColor: "#38d175"
            }
        })
        this.divBtn = Div({
            style: buttonsContainerStyle
        })
       
        operators.forEach((v, ind)=>{
            v.forEach((val, i)=>{
                if(ind == 0){
                    this.btnsoperator.push(
                        Btn({
                            text: val
                        })
                    )
                }else{
                    let a:any = val
                    this.btnsoperator[i].Click(()=> Operator(a, this.display))
                }
                
            })
        })
        this.feather.NOS(calculatorStyle)
        this.feather.SetID("calculator")

        for(let n = 0; n <= 9; n++){
            this.btnsnum.push(Btn({
                text: `${n}`
            }))
        }

        for(let nb = -1; nb < this.btnsnum.length; nb++){
            if(this.btnsnum[nb + 1]) {
                this.btnsnum[nb + 1].NOS(btnStyle)
                this.btnsnum[nb + 1].NOS(btnNumStyle)
            }
            if(this.btnsoperator[nb + 1]) {
                this.btnsoperator[nb + 1].NOS(btnStyle)
                this.btnsoperator[nb + 1].NOS(btnOpStyle)
            }
        }
        // Functions
            this.btnpower.Click(()=>{
                on = !on
                this.btnpower.NOS({
                    backgroundColor:  on?"#d33749":"#38d175",
                    transitionDuration: "0.5s"
                })
                this.btnpower.SetTXT(
                    on? "OFF": "ON" 
                )
                this.display.SetVal("")
                SetLocal("oncalc", on)
            })
            for(let c of this.btnsnum){
                c.Click(()=>{
                    if(on == true){
                        this.display.SetVal(this.display.GetVal() + c.GetTXT())
                    }else{
                        alert("Calculadora Desligada")
                    }
                })
                
            }
            function Operator(operator: "erase"| "more"|"less"|"multi"|"div"|"float"|"expo"|"equals"|"parentopen"|"parentclose"|"clear", display: create_Element_Cls){
                if(on){
                    switch(operator){
                        case "more":
                            display.GetVal() != ""? display.SetVal(display.GetVal() + " " + "+" + " "): undefined
                            break;
                        case "less":
                            display.GetVal() != ""? display.SetVal(display.GetVal()+ " " +"-" + " "): undefined
                            break
                        case "multi":
                            display.GetVal() != ""? display.SetVal(display.GetVal()+ " " +"*" + " "): undefined
                            break
                        case "div":
                            display.GetVal() != ""? display.SetVal(display.GetVal()+ " " + "/" + " "): undefined
                            break
                        case "float":
                            display.GetVal() != ""? display.SetVal(display.GetVal()+"."): undefined
                            break
                        case "expo":
                            display.GetVal() != ""? display.SetVal(display.GetVal()+ " " + "**" + " "): undefined
                            break
                        case "parentopen":
                            display.SetVal(display.GetVal()+ " " + "(")
                            break
                        case "parentclose":
                            display.SetVal(display.GetVal() + ")" + " ")
                            break
                        case "erase":
                            let lastind = display.GetVal().length - 1 
                            let valuelast:any = display.GetVal().split("")
                            valuelast.pop()
                            valuelast = valuelast.join().replace(/,/g, "")
                            display.GetVal() != ""? display.SetVal(valuelast): undefined
                            break
                        case "clear":
                            display.SetVal("")
                            break
                        case "equals":
                            let value = display.GetVal()
                            try {
                                display.SetVal(eval(value))
                            } catch (error) {
                                Alert("Expressão invalida!")
                            }
                            break
                    }
                }               
            }

            try{
                if(GetLocal("oncalc")) this.btnpower.to.click()
                
            }catch(e){
                on = false
            }
    
        // Append Child
    
            this.feather.SetChild(this.display)
            this.feather.SetChild(this.divBtn)


            this.divBtn.SetChild(this.btnpower)
            this.divBtn.SetChild(this.btnsoperator[6])
            this.divBtn.SetChild(this.btnsoperator[7])
            this.divBtn.SetChild(this.btnsoperator[8])
            //------------------------------------
            this.divBtn.SetChild(this.btnsnum[7])
            this.divBtn.SetChild(this.btnsnum[8])
            this.divBtn.SetChild(this.btnsnum[9])
            this.divBtn.SetChild(this.btnsoperator[0])
            //------------------------------------
            this.divBtn.SetChild(this.btnsnum[6])
            this.divBtn.SetChild(this.btnsnum[5])
            this.divBtn.SetChild(this.btnsnum[4])
            this.divBtn.SetChild(this.btnsoperator[1])
            //------------------------------------
            this.divBtn.SetChild(this.btnsnum[3])
            this.divBtn.SetChild(this.btnsnum[2])
            this.divBtn.SetChild(this.btnsnum[1])
            this.divBtn.SetChild(this.btnsoperator[2])
            //------------------------------------
            this.divBtn.SetChild(this.btnsoperator[3])
            this.divBtn.SetChild(this.btnsnum[0])
            this.divBtn.SetChild(this.btnsoperator[4])
            this.divBtn.SetChild(this.btnsoperator[5])
            //------------------------------------
            this.divBtn.SetChild(this.btnsoperator[9])
            this.divBtn.SetChild(this.btnsoperator[10])
    }
}