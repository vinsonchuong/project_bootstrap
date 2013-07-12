ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'rspec/autorun'

require 'capybara/rails'
require 'capybara/poltergeist'
Capybara.javascript_driver = :poltergeist

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

ActiveRecord::Migration.check_pending! if defined?(ActiveRecord::Migration)

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.use_transactional_fixtures = false
  config.before { DatabaseCleaner.strategy = :transaction }
  config.before(type: feature) { DatabaseCleaner.strategy = :truncation }
  config.before { DatabaseCleaner.start }
  config.after { DatabaseCleaner.clean }

  config.infer_base_class_for_anonymous_controllers = false
  config.order = "random"
end
