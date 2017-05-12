require 'sinatra'

get '/'
	erb :index
end

get '/menu'
	erb :menu
end
