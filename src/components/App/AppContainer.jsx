import { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/solid";
import AppSidebar from "./AppSidebar";
import Finder from "./finder/Finder";

const CHATS = [
  {
    id: "1",
    name: "Somnath Sarkar",
    messages: [
      {
        user: "Somnath Sarkar",
        message: "Hi!",
      },
      {
        user: "you",
        message: "Hey! Whats'up?",
      },
      {
        user: "Somnath Sarkar",
        message: "All good! How are you?",
      },
      {
        user: "you",
        message: "I am fine.",
      },
      {
        user: "you",
        message: "Moved to Bengaluru recently.",
      },
      {
        user: "Somnath Sarkar",
        message: "Cool! I am moving in blr too.",
      },
      {
        user: "you",
        message: "Great. Will meet then. Bye!",
      },
      {
        user: "Somnath Sarkar",
        message: "Hi!",
      },
      {
        user: "you",
        message: "Hey! Whats'up?",
      },
      {
        user: "Somnath Sarkar",
        message: "All good! How are you?",
      },
      {
        user: "you",
        message: "I am fine.",
      },
      {
        user: "you",
        message: "Moved to Bengaluru recently.",
      },
      {
        user: "Somnath Sarkar",
        message: "Cool! I am moving in blr too.",
      },
      {
        user: "you",
        message: "Great. Will meet then. Bye!",
      },
    ],
  },
  {
    id: "2",
    name: "Amit Malik",
    messages: [
      {
        user: "Amit Malik",
        message: "Bro, Where are you now?",
      },
      {
        user: "you",
        message: "Hey! Whats'up?",
      },
      {
        user: "Amit Malik",
        message: "All good! How are you?",
      },
      {
        user: "you",
        message: "I am fine.",
      },
      {
        user: "you",
        message: "Moved to Bengaluru recently.",
      },
      {
        user: "Amit Malik",
        message: "Cool! I am moving in blr too.",
      },
      {
        user: "you",
        message: "Great. Will meet then. Bye!",
      },
    ],
  },
  {
    id: "3",
    name: "Prithish Roy",
    messages: [
      {
        user: "Prithish Roy",
        message: "Hey man!",
      },
      {
        user: "you",
        message: "Hey! Whats'up?",
      },
      {
        user: "Prithish Roy",
        message: "All good! How are you?",
      },
      {
        user: "you",
        message: "I am fine.",
      },
      {
        user: "you",
        message: "Moved to Bengaluru recently.",
      },
      {
        user: "Prithish Roy",
        message: "Cool! I am moving in blr too.",
      },
      {
        user: "you",
        message: "Great. Will meet then. Bye!",
      },
    ],
  },
];

function AppContainer() {
  const [activeConversation, setActiveConversation] = useState(null);

  return (
    <div className="flex">
      <aside className="w-[400px]">
        <AppSidebar
          chats={CHATS}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
        />
      </aside>
      <div className="flex-1">
        {activeConversation ? (
          <Conversation
            activeConversation={activeConversation}
            setActiveConversation={setActiveConversation}
          />
        ) : (
          <FinderWrapper />
        )}
      </div>
    </div>
  );
}

function FinderWrapper() {
  return (
    <div className="cc-index-px h-full w-full bg-white">
      <header className="relative flex h-20 items-center justify-center">
        <div className="menu text-gray flex gap-3 font-medium text-gray-400">
          <div className="find cursor-pointer select-none text-gray-800 transition-all">
            Find
          </div>
          <div className="discover cursor-pointer select-none transition-all hover:text-gray-800">
            Discover
          </div>
        </div>
        <div className="filters absolute inset-0 top-7 ml-auto flex h-fit w-fit cursor-pointer select-none items-center gap-1 rounded-full bg-theme-purple px-3 py-0.5 text-sm text-white transition-all hover:bg-theme-purple/95">
          <FunnelIcon className="h-4 w-4" />
          Filters
        </div>
      </header>
      <section>
        <Finder />
      </section>
    </div>
  );
}

function Conversation({ activeConversation }) {
  console.log(activeConversation, "active convo in conversation");

  return (
    <div className="conversation flex flex-col h-screen">
      <div className="py-6 border-b px-4">{activeConversation?.name}</div>
      <div className="conversation-messages flex-1 p-4 space-y-2 overflow-y-scroll">
        {activeConversation?.messages.map((msg, id) =>
          msg.user === "you" ? (
            <div
              className="p-3 ml-auto max-w-[50%] rounded-3xl text-sm bg-theme-purple/30 w-fit"
              key={id}
            >
              {msg.message}
            </div>
          ) : (
            <div
              className="p-3 rounded-3xl max-w-[50%] text-sm bg-gray-100 w-fit"
              key={id}
            >
              {msg.message}
            </div>
          )
        )}
      </div>
      <div className="message-input pt-2 pb-4 px-4">
        <div className="input-wrapper relative">
          <input
            type="text"
            placeholder="Start chatting..."
            className="w-full outline-none border border-gray-300 px-6 py-3 rounded-full"
          />
          <button className="px-4 absolute inset-0 my-auto ml-auto mr-1.5 w-fit h-fit py-2 bg-theme-purple hover:opacity-90 transition-all text-white rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
