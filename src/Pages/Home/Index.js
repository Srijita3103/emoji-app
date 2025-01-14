import React from "react";
import EmojiCollection from "../../Components/EmojiCollection";
import { emojiList } from "../../Data/teaCollection";

const HomePage = ({ list }) => {
  return (
    <div>
      <EmojiCollection list={emojiList} />
    </div>
  );
};

export default HomePage;
