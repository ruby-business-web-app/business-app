require 'sinatra'


get '/layout' do
	erb :layout
end

get '/photopage' do 
	@heading = "hero"
	@page_type = "withsmall"
	erb :photopage
end

get '/' do
	@heading = "index-hero"
	@page_type = "withbig"
	erb :index
end

get '/menu' do
	@heading = "hero"
	@page_type = "withsmall"
	erb :menu
end

get '/contact' do
	@heading = "hero"
	@page_type = "withsmall"
	erb :contact
end