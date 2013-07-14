# AppName
[![Build Status](https://travis-ci.org/vinsonchuong/app_name.png?branch=master)](https://travis-ci.org/vinsonchuong/app_name)
[![Dependency Status](https://gemnasium.com/vinsonchuong/app_name.png)](https://gemnasium.com/vinsonchuong/app_name)
[![Code Climate](https://codeclimate.com/github/vinsonchuong/app_name.png)](https://codeclimate.com/github/vinsonchuong/app_name)

## Development
### Getting Started
We assume that the following external dependencies are setup and available:
* PostgreSQL
* Ruby 2.0.0
* Bundler
* Zeus
* [Heroku Toolbelt](http://toolbelt.heroku.com)

The rest of the dependencies are handled through:
```bash
bundle install
```

Create `.env` with the necessary database credentials:
```bash
POSTGRES_USER='if different from your unix username'
POSTGRES_PASSWORD='unless Postgres authenticates with trust or ident'
```
Then, bootstrap the database with:
```bash
foreman run bundle exec rake db:setup
foreman run bundle exec rake db:test:prepare
```
`foreman run` just sources `.env` before running the given command.

Create a cookie encryption key with:
```bash
echo "SECRET_TOKEN='$(bundle exec rake secret)'" >> .env
```

You should now be able to run the tests and start the application:
```bash
foreman start
```

## License
```
Copyright (c) 2013 Vinson Chuong

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
