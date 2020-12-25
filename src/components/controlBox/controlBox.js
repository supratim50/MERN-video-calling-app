import React, { useEffect } from "react";
import "./controlBox.css";

// components
import Button, { CornerRoundButton } from "../buttons/Buttons/button";
import { useDataLayerValue } from "../../contexts/DataLayer";

// icons
import {
  FaMicrophone,
  FaVideo,
  FaShareSquare,
  FaRocketchat,
  FaUsers,
} from "react-icons/fa";

const ControlBox = () => {
  const [{ showChatBox, showParticipants }, dispatch] = useDataLayerValue();

  // chat function
  const changeChat = () => {
    dispatch({
      type: "OPEN_CHAT",
      chat: !showChatBox,
    });
  };

  // participants function
  const changeParticipants = () => {
    dispatch({
      type: "OPEN_PARTICIPANTS",
      participants: !showParticipants,
    });
  };

  return (
    <div className="bottom__button__box position-absolute w-100 d-flex justify-content-between align-items-center">
      {/* left box */}
      <div className="bottom_button_box__left_box d-flex align-items-center justify-content-between p-3">
        <Button
          classList="mr-3 bg_color_white"
          icon={<FaMicrophone size={30} />}
        />
        <Button classList="mr-3 bg_color_white" icon={<FaVideo size={30} />} />
      </div>
      {/* middle box */}
      <div className="bottom_button_box__middle_box flex-fill d-flex justify-content-center align-items-center">
        {/* chat box */}
        <Button
          classList="mr-3 bg_color_white"
          icon={<FaRocketchat size={30} />}
          onClick={changeChat}
        />
        <CornerRoundButton
          classList="bg_color_green px-4 py-3 mr-3 color_black"
          content={<FaShareSquare size={30} />}
        />
        <Button
          classList="mr-3 bg_color_white"
          icon={<FaUsers size={30} />}
          onClick={changeParticipants}
        />
      </div>
      {/* right box */}
      <div className="bottom_button_box__right_box d-flex justify-content-center align-items-center p-3">
        <CornerRoundButton
          classList="bg_color_red px-4 py-2 color_white"
          content="Leave"
        />
      </div>
      {/* right box end */}
    </div>
  );
};

export default ControlBox;
