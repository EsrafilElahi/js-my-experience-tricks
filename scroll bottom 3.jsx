function TextMessage(props) {
  const { msg, messageRef} = props;
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (messageRef) {
      messageRef.current?.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
				console.log('target =>', target);
				console.log('event =>', event);
        target.scroll({ top: target.scrollHeight, behavior: "auto" });
      });
    }
  }, []);

  return (
    <div>text message item</div>
  );

}
