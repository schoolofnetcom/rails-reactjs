class Api::PeopleController < Api::BaseController
	def index
		@people = Person.all

		respond_to do |format|
			format.json { render json: @people }
		end
	end

	def create
		@person = Person.create(person_params)

		respond_to do |format|
			format.json { render json: @person }
		end
	end

	def destroy
		@person = Person.find(params[:id])

		@person.destroy

		respond_to do |format| 
			format.json { render json: @person }
		end
	end

	def update
	end

	private 
		def person_params
			params.require(:person).permit(:name, :age)
		end
end
