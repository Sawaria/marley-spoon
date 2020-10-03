class RecipeTransformation
  def self.recipe(obj)
    {
      id: obj.sys[:id],
      title: obj.fields[:title],
      photo_url: obj.fields[:photo]&.url,
      tag_names: (obj.fields[:tags] || []).map(&:name),
      description: obj.fields[:description],
      chef_name: obj.fields[:chef]&.name
    }
  end

  def self.recipes(obj)
    obj.map(&method(:recipe))
  end
end
