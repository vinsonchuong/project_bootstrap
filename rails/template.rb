def install_file(path)
  contents = File.read(File.join(File.dirname(__FILE__), path))
    .gsub('AppName', app_const_base)
    .gsub('app_name', app_name)
  create_file path, contents, force: true
end

remove_file 'README.rdoc'
install_file 'README.md'

install_file 'Gemfile'
run 'bundle install'

run %q{echo "SECRET_TOKEN='$(bundle exec rake secret)'" >> .env}

generate 'rspec:install'
install_file '.rspec'
install_file 'Rakefile'
install_file 'spec/spec_helper.rb'

install_file 'app/views/layouts/application.html.erb'

install_file 'app/assets/javascripts/application.js'
install_file 'spec/javascripts/support/jasmine.yml'
install_file 'spec/javascripts/helpers/spec_helper.js'

install_file 'Procfile'

install_file 'config/environments/test.rb'
install_file 'config/initializers/secret_token.rb'
install_file 'config/routes.rb'

install_file 'config/database.yml'
rake 'db:create'
rake 'db:migrate'
rake 'db:test:prepare'

install_file '.gitignore'
