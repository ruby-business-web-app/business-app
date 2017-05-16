require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

get '/layout' do
	erb :layout
end

get '/photopage' do 
	@heading = "hero"
	@page_type = "withsmall"
	@nav_script_type = "navscripts.js"
	erb :photopage
end

get '/' do
	@heading = "index-hero"
	@page_type = "withbig"
	@nav_script_type = "indexnavscripts.js"
	erb :index
end

get '/menu' do
	@heading = "hero"
	@page_type = "withsmall"
	@nav_script_type = "navscripts.js"
	erb :menu
end

get '/contact' do
	@heading = "hero"
	@page_type = "withsmall"
	@nav_script_type = "navscripts.js"
	erb :contact
end

post '/contact' do

	@from = Email.new(email: params[:from_email])
	@subject = params[:subject]
	@content = Content.new(type: 'text/plain', value: params[:content])
	@mail = Mail.new(@from, @subject, @content)

	
	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: @mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers
	@heading = "hero"
	@page_type = "withsmall"
	@nav_script_type = "navscripts.js"
	erb :contact
end
