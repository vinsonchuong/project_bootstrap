# AppName
[![Build Status](https://travis-ci.org/vinsonchuong/app_name.png?branch=master)](https://travis-ci.org/vinsonchuong/app_name)
[![Dependency Status](https://gemnasium.com/vinsonchuong/app_name.png)](https://gemnasium.com/vinsonchuong/app_name)
[![Code Climate](https://codeclimate.com/github/vinsonchuong/app_name.png)](https://codeclimate.com/github/vinsonchuong/app_name)

## Development
### Getting Started
The application requires the following external dependencies:
* PostgreSQL
* Ruby 2.1.1
* Bundler

The rest of the dependencies are handled through:
```bash
bundle install
```

Create `.env` with the necessary database credentials:
```bash
DATABASE_USER='if different from your system username'
DATABASE_PASSWORD='unless Postgres authenticates with trust or ident'
```
These environment variables must be set before running any CLI commands. You
can ensure that they are set by one of:
* Manually running `source .env`
* Prefixing all commands with `foreman run`
* Using a tool like [direnv](http://http://direnv.net)

Bootstrap the database with:
```bash
source .env
bin/rake db:setup
```

You should now be able to run the tests and start the application:
```bash
bin/rails s
```

To remove the need to call `bin/rake` and `bin/rails`, you can add the `bin`
directory to your `PATH` environment variable via:
* `export PATH=bin:$PATH`
* [direnv](http://http://direnv.net)

## License
```
Copyright (c) 2014 Vinson Chuong

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
