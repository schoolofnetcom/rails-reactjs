class AppController < ApplicationController
	def index
		@people = Person.all
	end
end
