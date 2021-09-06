import { Calculator } from "./bodyCalculator.js";
export class ContainerApp extends NS_Component {
    constructor() {
        super({ children: {} }, { feather: CreateElm("main", { style: containerStyle }), main: GetElm("body") });
        this.GetProps("children")["calculator"] = new Calculator();
        this.feather.SetChild(this.GetProps("children")["calculator"].feather);
    }
}
