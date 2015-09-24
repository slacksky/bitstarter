var fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

