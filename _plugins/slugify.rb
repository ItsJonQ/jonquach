module Jekyll
  module Slugify
    def slugify(text)
      text.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Slugify)
