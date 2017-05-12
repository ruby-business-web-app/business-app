require 'sinatra'


get '/layout' do
	erb :layout
end

get '/photopage' do 
	@heading = "hero"
	erb :photopage
end

get '/' do
	@heading = "index-hero"
	erb :index
end

get '/menu' do
	@heading = "hero"
	erb :menu
end

get '/contact' do
	@heading = "hero"
	erb :contact
end