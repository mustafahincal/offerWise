const WebSocket = require("websocket").client;

const ws = new WebSocket();

const solve = (message) => {
      const letterArray =
            "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
      const solvedMessage = message.split("").map((char) => {
            const index = letterArray.indexOf(char);
            return index >= 0 ? letterArray[25 - index] : char;
      });
      return solvedMessage.join("");
};

let registered = false;
ws.on("connect", function (connection) {
      console.log("WebSocket client connected");

      connection.on("message", function (message) {
            console.log("Received message:", JSON.parse(message.utf8Data));
            const solvedMessage = solve(JSON.parse(message.utf8Data).message);

            if (!registered) {
                  const registrationKey = solvedMessage.substr(263, 64);
                  console.log("Registration key:", registrationKey)
                  const data = {
                        type: "REGISTER",
                        name: "Mustafa",
                        surname: "Hıncal",
                        email: "mustafahncal@gmail.com",
                        registrationKey: registrationKey,
                  };

                  connection.send(JSON.stringify(data));
                  registered = true;
            }
      });
});

ws.connect("wss://cekirdektenyetisenler.kartaca.com/ws");