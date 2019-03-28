function onLoad() {
    log( "All Pictures in html-stream will be replaced." );
}

function onResponse(req, res) {
	var body = res.ReadBody();
	log_info("replacing pictures...");
	res.Body = res.Body.replace(/<img .*?>/ig, "<img src='https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/09/iStock-880927348-1080x675.jpg'>")
}
