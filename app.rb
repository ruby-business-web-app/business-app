require 'sinatra'


require 'sendgrid-ruby'

include SendGrid


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

post '/contact' do
	from = Email.new(email: 'test@example.com')
	to = Email.new(email: 'test@example.com')
	subject = 'Sending with SendGrid is Fun'
	content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
	mail = Mail.new(from, subject, to, content)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers
end

