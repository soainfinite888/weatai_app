# frozen_string_literal: true
folders = 'config,lib,models,controllers,representers,services,values'
Dir.glob("./{#{folders}}/init.rb").each do |file|
  require file
end