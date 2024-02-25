import connectDB from "./config/mongoDB.js";
import app from "./index.js"

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`);
    connectDB()
});
