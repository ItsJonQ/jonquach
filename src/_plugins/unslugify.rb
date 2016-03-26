module Jekyll
  module Unslugify
    def unslugify(text)
      text.strip.gsub('-', ' ').split.map(&:capitalize).join(' ')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Unslugify)
