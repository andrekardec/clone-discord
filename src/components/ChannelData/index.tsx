import React, { useRef, useEffect } from "react";

import {Container, Messages, InputWrapper, Input, InputIcon} from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {

    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight + 10;
    }

  }, [messagesRef])

  return(
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          author="Andre Kardec"
          date="27/07/2021"
          content="Bora codar?"
        />
        ))}

      <ChannelMessage
          author="Vitor Zago"
          date="27/07/2021"
          content={
            <>
              <Mention>@Andre Kardec</Mention>, fiz uma pull-request
              na feature de clock-in. Dá uma olhada, por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;