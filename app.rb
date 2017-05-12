require 'sinatra'


get '/layout' do
	erb :layout
end

get '/photopage' do 
	erb :photopage
end

get '/' do
	erb :index
end