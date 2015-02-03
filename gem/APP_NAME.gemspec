lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'APP_NAME/version'

Gem::Specification.new do |spec|
  spec.name = 'APP_NAME'
  spec.version = APPNAME::VERSION
  spec.authors = ['Vinson Chuong']
  spec.email = ['vinsonchuong@gmail.com']
  spec.summary = %q{Short description here}

  spec.files = `git ls-files -z 2>/dev/null`.split("\x0")
  spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  # spec.add_runtime_dependency 'bundler', '>= 1.7'

  spec.add_development_dependency 'rake', '~> 10.4'
  spec.add_development_dependency 'rspec', '~> 3.1'
end
