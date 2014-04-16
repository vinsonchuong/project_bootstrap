directory File.dirname(__FILE__), destination_root, force: true
%w[
  template.rb
  README.rdoc
  app/assets/stylesheets/application.css
].each {|file| remove_file file}

%w[
  README.md
  app/views/layouts/application.html.erb
].each {|file| gsub_file file, 'AppName', app_const_base}

%w[
  README.md
  config/database.yml
].each {|file| gsub_file file, 'app_name', app_name}

Bundler.with_clean_env do
  run 'bundle update'
  rake 'db:create db:migrate'
  run 'bundle binstubs rspec-core'
  run 'bundle exec spring binstub --all'
end
