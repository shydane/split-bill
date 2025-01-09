import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
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
    image: "../public/images/hutao3.jpg",
    balance: 20,
  },
  {
    id: 334455,
    name: "Yanti",
    image: "../public/images/hutao.jpg",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={friends} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
          <button className="button" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
