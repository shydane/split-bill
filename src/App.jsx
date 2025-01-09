import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 112233,
    name: "Hu tao",
    image: "../public/images/hutao2.jpg",
    balance: -7,
  },
  {
    id: 223344,
    name: "Miyabi",
    image: "../public/images/miyabi.jpg",
    balance: 20,
  },
  {
    id: 334455,
    name: "Yanti",
    image: "../public/images/yanti.png",
    balance: 0,
  },
];

function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={initialFriends} />
        </div>
      </div>
    </>
  );
}

export default App;
