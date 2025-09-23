import Cardlist from "./Cardlist"
import data from "./data/"
import Search from "./Search"

function App() {
  
    const [profile,setProfile] = useState(data.products);

    const searchUser = (username) => {
        const data1 = data.products.filter((p) => {
          return p.login.includes(username);
        })
        setProfile(data1);
    }
    return (
      <>
      <h1>Github Card Project</h1>
      <Search onSearch ={searchUser} />
      <Cardlist profile1 = {profile} />
      </>
  );
}

export default App;
