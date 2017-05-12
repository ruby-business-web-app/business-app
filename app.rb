require 'sinatra'

get '/' do
	@heading = "index-hero"
	erb :index
end

get '/menu' do
	@heading = "hero"
	erb :menu
end