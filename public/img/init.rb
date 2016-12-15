Dir.glob("#{File.dirname(__FILE__)}/*.png").each do |file|
  require file
end
