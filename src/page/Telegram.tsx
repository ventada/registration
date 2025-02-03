const Telegram = () => {
  return (
    <div
      onClick={() => {
        console.log("s.kef");

        //@ts-ignore
        window.Telegram.WebApp.sendData("Hi from netlify");
      }}
    >
      Telegram
    </div>
  );
};

export default Telegram;
