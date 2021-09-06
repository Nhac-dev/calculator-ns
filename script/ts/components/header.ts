import { languageApp } from "../main-elm.js"

export class Header extends NS_Component{
    navWhitLink!: create_Element_Cls
    linksElm!: create_Element_Cls[]
    constructor(){
        super({
            headerLinks: <Array<string[]>> [
                ["https://github.com/Nhac-dev", "https://instagram.com/jeff.developer", "https://jefferson-developer.herokuapp.com"],
                ["GitHub", "Instagram", "Meu Site oficial"]
            ]
        }, {
            feather: CreateElm("header", {}),
            main: GetElm("body")
        })
        this.navWhitLink = CreateElm("nav", {
            style: navLinkStyle
        })

        this.linksElm = []
        this.GetProps("headerLinks").forEach((element: string[]) => {
            element.forEach((data, index)=>{
                if(this.linksElm[index]){
                    this.linksElm[index].SetTXT(data)
                }else{
                    this.linksElm[index] = CreateElm("a", {
                        href: data,
                        style: {
                            margin: "0.2rem 0.5rem"
                        }
                    })
                    this.linksElm[index].NOS(LinkStyle)
                    this.linksElm[index].Mouseenter(()=>{
                        this.linksElm[index].NOS({
                            color: "#f9ef27",
                            transitionDuration: "0.5s"
                        }) 
                    })
                    this.linksElm[index].Mouseout(()=>{
                        this.linksElm[index].NOS(LinkStyle) 
                    })
                    this.navWhitLink.SetChild(this.linksElm[index])
                }
            })
        });

        this.feather.NOS(neutron)
        this.feather.NOS(HeaderStyle)

        this.navWhitLink.NOS(neutron)
        this.navWhitLink.NOS({margin: "auto"})

        this.feather.SetChild(this.navWhitLink)
    }
}