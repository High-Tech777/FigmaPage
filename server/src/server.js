const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authRoutes");
const app=express();
app.use(cors());
app.use(express.json());

app.use(
    "/api/auth", authRoutes
);

app.post('/api/signup', async(req, res)=> {
    console.log(req.body);
    res.json({
        success:true,
        message: 'Signup data received'
    });
});

app.listen(5000, ()=> {
    console.log (
        "Server running on port 5000"
    );
});