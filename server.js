import connectDB from "./config/mongoDB.js";
import app from "./index.js"

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`);
    connectDB()
});
