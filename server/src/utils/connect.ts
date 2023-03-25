import * as mongoose from "mongoose";
import config from "config";

function connect() {
    const dbUri = config.get<string>("dbUri")

    return mongoose.connect(dbUri).then(() => console.log("connected to db")).catch((error) =>{
        console.error("could not connect to db")
        process.exit(1)
    })
}

export default connect