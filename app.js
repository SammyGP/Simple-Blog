var bodyParser = require("body-parser"),
mongoose 	   = require("mongoose"),
express 	   = require("express"),
app 		   = express();

// APP CONFIG/SETÙP
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/simple_blog");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// SCHEMA
var blogSchema = new mongoose.Schema({
	title: String,
	category: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Routes

app.get("/", function(req, res){
	res.redirect("/blogs");
});

// INDEX
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, allBlogs){
		if(err) {
			console.log(err);
		} else if (allBlogs.length === 0) {
			console.log("No blogs yet");
			res.render("index", {blogs: allBlogs});
		} else {
			res.render("index", {blogs: allBlogs});
		}
	});
});


app.listen(3000, function(){
	console.log("server is running");
});