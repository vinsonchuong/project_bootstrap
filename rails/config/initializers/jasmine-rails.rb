# Fixes https://github.com/searls/jasmine-rails/issues/117#issuecomment-40330896
Rails.application.config.assets.precompile << 'jasmine-specs.css'
