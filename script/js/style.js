"use strict";
const neutron = {
    margin: "0",
    padding: "0",
    boxSizing: "border-box"
};
const bodyStyle = {
    backgroundColor: "#202833"
};
const HeaderStyle = {
    backgroundColor: "#072956",
    width: "100%",
    minHeight: "2.5rem",
    display: "flex",
    justifyContent: "center"
};
const navLinkStyle = {
    display: "flex",
    textAlign: "center"
};
const LinkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "25px"
};
const containerStyle = {
    ...neutron,
    width: (screen.width <= 800 ? "100%" : "90%"),
    backgroundColor: "#11233a",
    margin: "0.5rem auto",
    padding: "0.5rem 0.2rem",
    borderRadius: "0.2rem"
};
const calculatorStyle = {
    ...neutron,
    margin: "0 auto",
    width: "15rem",
    display: "flex",
    flexDirection: "column"
};
const displayStyle = {
    ...neutron,
    width: "100%",
    border: "none",
    height: "2rem"
};
const buttonsContainerStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: "0.2rem auto",
    justifyContent: "center"
};
const btnStyle = {
    width: "3.7rem",
    height: "3.7rem",
    border: "none"
};
const btnNumStyle = {
    background: "#ff9900",
    color: "#000"
};
const btnOpStyle = {
    color: "#fff",
    backgroundColor: "#000000"
};
