require 'zeus/rails'

class ZeusPlan < Zeus::Rails
  def test
    Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
    super
  end
end

Zeus.plan = ZeusPlan.new
