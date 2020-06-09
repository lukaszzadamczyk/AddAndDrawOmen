class App extends React.Component {
  state = {
    omens: ["omen1", "omen2", "omen3"],
    omen: "",
    value: "",
  };

  handleDrawClick = () => {
    const index = Math.floor(Math.random() * this.state.omens.length);
    // console.log(index);
    this.setState({
      omen: this.state.omens[index],
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddClick = () => {
    const { value, omens } = this.state;
    if (value === "") return alert("type something");
    const options = [...omens];
    options.push(value);
    alert(`Now you can draw from ${options} `);
    this.setState({
      omens: options,
      value: "",
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleDrawClick}>Draw Omen</button>
        <br />
        <input
          placeholder="Type something"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddClick}>Add Omen</button>
        <h3>{this.state.omen}</h3>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
