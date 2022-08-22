import { createContext, Component } from "react";

export const mainContextNew = createContext();

const MainContextNewProvider = (props) => {
  const [data, setData] = useState({
    name: "rizal",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  });

  const mainContextValue = {
    data,
  };

  return (
    <mainContextNew.Provider value={mainContextValue}>
      {props.children}
    </mainContextNew.Provider>
  );
};

// class MainContextProvider extends Component {
//   state = {
//     biodata: {
//       name: "rizal",
//       avatar: "https://reqres.in/img/faces/12-image.jpg",
//     },
//   };

//   render() {
//     const mainContextValue = { data: this.state.biodata };
//     return (
//       <mainContext.Provider value={mainContextValue}>
//         {this.props.children}
//       </mainContext.Provider>
//     );
//   }
// }

export default MainContextNewProvider;
