import {useEffect, useRef, useState} from 'react';

export default function App() {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 👇️ simulate chat messages flowing in
    setInterval(
      () =>
        setMessages(current => [
          ...current,
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quaerat eum id obcaecati, magnam voluptatum dolorem sunt, omnis sed consectetur necessitatibus blanditiis ipsa? Cumque architecto, doloribus mollitia velit non sint!',
        ]),
      600,
    );
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div>
      <h2>Top of the page</h2>

      <div>
        {messages.map((message, index) => {
          return <p key={index}>{message}</p>;
        })}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
