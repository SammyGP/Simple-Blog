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