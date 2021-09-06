const neutron:nosProps = {
    margin: "0",
    padding: "0",
    boxSizing: "border-box"
}
const bodyStyle:nosProps = {
    backgroundColor: "#202833"
}


const HeaderStyle:nosProps = {
    backgroundColor: "#072956",
    width: "100%",
    minHeight: "2.5rem",
    display: "flex",
    justifyContent: "center"
}

const navLinkStyle:nosProps = {
    display: "flex",
    textAlign: "center"
}

const LinkStyle:nosProps = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "25px"
}

const containerStyle:nosProps = {
    ...neutron,
    width: (screen.width <= 800? "100%": "90%"),
    backgroundColor: "#11233a",
    margin: "0.5rem auto",
    padding: "0.5rem 0.2rem",
    borderRadius: "0.2rem"
}


const calculatorStyle:nosProps = {
    ...neutron,
    margin: "0 auto",
    width: "15rem",
    display: "flex",
    flexDirection: "column"
}


const displayStyle:nosProps = {
    ...neutron,
    width: "100%",
    border: "none",
    height: "2rem"
}
const buttonsContainerStyle:nosProps = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: "0.2rem auto",
    justifyContent: "center"
}

const btnStyle:nosProps = {
    width: "3.7rem",
    height: "3.7rem",
    border: "none"
}
const btnNumStyle:nosProps = {
    background: "#ff9900",
    color: "#000"
}
const btnOpStyle:nosProps = {
    color: "#fff",
    backgroundColor: "#000000"
}