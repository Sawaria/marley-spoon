class Api::V1::RecipesController < ApplicationController
  FILTERED_FIELDS = [
    'sys.id',
    'fields.title',
    'fields.photo',
    'fields.tags',
    'fields.description',
    'fields.chef'
  ].freeze

  CONTENT_TYPE = 'recipe'

  def index
    recipes = contentful_client.all
    render json: RecipeTransformation.recipes(recipes)
  end

  def show
    recipe = contentful_client.find(id: recipe_id)
    render json: RecipeTransformation.recipe(recipe)
  end

  private

  def contentful_client
    @contentful_client ||= ::ApiClients::ContentfulClient.new(options: options)
  end

  def options
    {
      select: FILTERED_FIELDS.join(','),
      content_type: CONTENT_TYPE
    }
  end

  def recipe_id
    params.fetch(:id)
  end
end
