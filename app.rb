require 'sinatra'

get '/' do
	@heading = "index-hero"
	erb :index
end

get '/menu' do
	@heading = "hero"
	erb :menu
end

get '/photopage' do
	@heading = "hero"
	erb :photopage
end

get '/contact' do
	@heading = "hero"
	erb :contact
end