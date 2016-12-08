# frozen_string_literal: true
require 'rake/testtask'

#[???]
task :run do
sh 'rerun "rackup -p 9000"'
end



#Rake::TestTask is object creates a test task that can run multiple testing files.
Rake::TestTask.new(:spec) do |t|
  t.pattern ='spec/*_spec.rb'
  t.warning = false

end

#when running:
#$ rake db:migrate
#$ RACK_ENV=test rake db:migrate



#delete VCR cassette things
desc 'delete cassette fixtures'
task :wipe do
  #sh 'rm spec/fixtures/cassettes/*.yml' do |ok, _|
  sh 'rm cassettes/*.yml' do |ok, _|
    puts(ok ? 'Cassettes deleted' : 'No casseettes found')
  end
end


#quality test
namespace :quality do
  CODE = 'app.rb'

  desc 'run all quality checks' 
  task all: [:rubocop, :flog, :flay]

  task :flog do
    sh "#{CODE}"
  end

  task :flay do
    sh "#{CODE}"
  end

  task :rubocop do
    sh 'rubocop'
  end

end
