import { ContainerApp } from "./components/container.js";
import { Header } from "./components/header.js";
// Constant declaration
const bodyApp = GetElm("body");
const htmlApp = GetElm("html");
export const languageApp = htmlApp.to?.lang;
// Class Main
class MyApp extends NS_Component {
    constructor() {
        super({
            children: {}
        }, { feather: bodyApp, main: htmlApp });
        this.GetProps("children")["header"] = new Header();
        this.GetProps("children")["container"] = new ContainerApp();
        this.feather.NOS(neutron);
        this.feather.NOS(bodyStyle);
        this.feather.SetChild(this.GetProps("children")["header"].feather);
        this.feather.SetChild(this.GetProps("children")["container"].feather);
    }
}
const app = new MyApp();
