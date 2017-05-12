require 'rubygems'
require 'sinatra'

get '/index' do
	File.read('index.html')
end