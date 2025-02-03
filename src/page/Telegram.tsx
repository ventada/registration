const Telegram = () => {
  return (
    <div
      onClick={
        //@ts-ignore
        window.Telegram.WebApp.sendData("Hi from netlify")
      }
    >
      Telegram
    </div>
  );
};

export default Telegram;
