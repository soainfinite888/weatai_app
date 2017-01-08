# frozen_string_literal: true
require './init.rb'
require 'faye'

Faye::WebSocket.load_adapter 'thin'
use Faye::RackAdapter, mount: '/faye', timeout: 45, extensions: []
run WeataiApp
