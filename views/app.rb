require 'sinatra'

get '/' do
	erb :index
end

get '/photopage' do
	erb :photopage
end

get '/menu' do
	erb :menu
end