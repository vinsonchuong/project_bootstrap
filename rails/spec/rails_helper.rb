ENV['RAILS_ENV'] = 'test'
require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'

require 'capybara/rails'
require 'capybara/poltergeist'
Capybara.default_driver = :poltergeist
#Capybara.default_driver = :selenium

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

RSpec.configure do |config|
  config.before(:suite) { ActiveRecord::Migration.maintain_test_schema! }

  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.use_transactional_fixtures = false
  config.before { DatabaseCleaner.strategy = :transaction }
  config.before(type: :feature) { DatabaseCleaner.strategy = :truncation }
  config.before { DatabaseCleaner.start }
  config.after { DatabaseCleaner.clean }

  config.infer_spec_type_from_file_location!
end
