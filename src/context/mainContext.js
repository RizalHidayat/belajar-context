import { createContext, Component } from "react";

export const mainContext = createContext();

class MainContextProvider extends Component {
  state = {
    biodata: {
      name: "rizal",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  };

  render() {
    const mainContextValue = {
      data: this.state.biodata,
    };
    return (
      <mainContext.Provider value={mainContextValue}>
        {this.props.children}
      </mainContext.Provider>
    );
  }
}

export default MainContextProvider;
